import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const GitHub = () => {
    // const [data, setData] = useState({});
    const data = useLoaderData();
    /**
     * Old Style of fetching data in components / FCs
     */
    // useEffect(() => {
    //     const getGithubData = async () => {
    //         const response = await fetch('https://api.github.com/users/ranasurajit');
    //         const json = await response.json();
    //         setData(json);
    //     };
    //     getGithubData();
    // }, []);

    return (
        <div className='text-center m-4 p-4 bg-gray-600 text-white text-2xl flex justify-around'>
            <img src={data?.avatar_url} width='300' alt='GitHub Profile'
                className='flex items-center' />
            <div className='flex items-center'>Github Followers : { data?.followers }</div>
        </div>
    );
};

export default GitHub;
