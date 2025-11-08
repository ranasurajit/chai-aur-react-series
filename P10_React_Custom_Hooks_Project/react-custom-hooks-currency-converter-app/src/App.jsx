import { useState } from 'react';
import CurrencyBox from './components/CurrencyBox';
import { BACKGROUND_IMAGE_URL } from './utils/constants';
import useCurrencyInfo from './hooks/useCurrencyInfo';

const App = () => {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  const onCurrencyChange = (type, value) => {
    if (type === 'from') {
      setFrom(value);
    } else {
      setTo(value);
    }
    setConvertedAmount(0);
  };

  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <h1 className='text-center mb-4 text-3xl text-shadow-2xs font-bold'>Currency Converter</h1>
            <div className='w-full mb-1'>
              <CurrencyBox
                label='From'
                amount={amount}
                onAmountChange={(e) => setAmount(Number(e.target.value) || 0)}
                onCurrencyChange={(e) => { onCurrencyChange('from', e.target.value); }}
                currencyOptions={currencyOptions}
                selectedCurrency={from}
                amountDisable={false}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <CurrencyBox
                label='To'
                amount={convertedAmount}
                onAmountChange={(e) => setConvertedAmount(Number(e.target.value) || 0)}
                onCurrencyChange={(e) => { onCurrencyChange('to', e.target.value); }}
                currencyOptions={currencyOptions}
                selectedCurrency={to}
                amountDisable={true}
              />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              disabled={!currencyInfo[to]}>
              Convert {from?.toUpperCase()} to {to?.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
