import { useEffect, useState } from 'react';
import { CURRENCY_API } from '../utils/constants';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const requestURL = `${CURRENCY_API}/${currency}.json`;
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(requestURL);
            const json = await res.json();
            setData(json[currency]);
        }
        fetchData();
    }, [currency]);
    return data;
}

export default useCurrencyInfo;
