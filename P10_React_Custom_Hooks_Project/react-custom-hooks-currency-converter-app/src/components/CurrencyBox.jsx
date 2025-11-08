import { useId } from 'react';

const CurrencyBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = ''
}) => {
    const currencyLabelId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label className='text-black/40 mb-2 inline-block' htmlFor={currencyLabelId}>
                    {label}
                </label>
                <input
                    id={currencyLabelId}
                    className='outline-none w-full bg-transparent py-1.5'
                    type='number'
                    value={amount}
                    placeholder='Amount'
                    disabled={amountDisable}
                    onChange={onAmountChange}
                    min='0'
                    step='0.01'
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    disabled={currencyDisable} value={selectedCurrency}
                    onChange={onCurrencyChange}>
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default CurrencyBox;
