# 💱 Currency Converter App (React + Vite + Tailwind)

A simple **React Currency Converter App** built using a custom hook,
clean UI components, and asynchronous data fetching.\
This project was developed as a learning exercise to practice **React
Hooks**, **custom hooks**, **state management**, and **component
reusability**.

------------------------------------------------------------------------

## 🚀 Features

-   🌍 Fetches real-time currency exchange rates using a public currency
    API
-   🧠 Custom React Hook (`useCurrencyInfo`) for modular and reusable
    API logic
-   💡 Swap between currencies dynamically
-   📈 Converts amount instantly and precisely (2 decimal places)
-   🎨 Styled beautifully with Tailwind CSS
-   🔒 Handles API loading and error states safely

------------------------------------------------------------------------

## 🧩 Tech Stack

  Technology              Purpose
  ----------------------- -----------------------------------------
  **React (Vite)**        Fast, modular frontend framework
  **Tailwind CSS**        Utility-first styling for responsive UI
  **Custom Hook**         To manage API data fetching logic
  **JavaScript (ES6+)**   Core programming language

------------------------------------------------------------------------

## 🏗️ Project Structure

    src/
    ├── components/
    │   └── CurrencyBox.jsx       # Reusable input + currency selector component
    ├── hooks/
    │   └── useCurrencyInfo.js    # Custom hook for fetching currency data
    ├── utils/
    │   └── constants.js          # Stores API URLs and static data
    ├── App.jsx                   # Main application logic and layout
    └── main.jsx                  # Entry point for React (Vite bootstrap)

------------------------------------------------------------------------

## ⚙️ Custom Hook -- `useCurrencyInfo.js`

A lightweight, reusable hook to fetch currency exchange rates
dynamically.

``` js
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currency) return;

    const requestURL = `${CURRENCY_API}/${currency}.json`;
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(requestURL);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const json = await res.json();
        if (isMounted) setData(json[currency] || {});
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setData({});
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();
    return () => { isMounted = false; };
  }, [currency]);

  return { data, loading, error };
}
```

------------------------------------------------------------------------

## 🧱 Core Component -- `CurrencyBox.jsx`

``` js
import { useId } from 'react';

const CurrencyBox = ({ label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectedCurrency = 'usd', amountDisable = false, currencyDisable = false, className = '' }) => {
  const amountInputId = useId();
  const selectId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex justify-between items-end ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input id={amountInputId} className='outline-none w-full bg-transparent py-1.5' type='number' value={amount} placeholder='Amount' disabled={amountDisable} onChange={onAmountChange} min='0' step='0.01' />
      </div>
      <div className='w-1/2 flex flex-col items-end text-right'>
        <label htmlFor={selectId} className='text-black/40 mb-2'>Currency Type</label>
        <select id={selectId} className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' disabled={currencyDisable} value={selectedCurrency} onChange={onCurrencyChange}>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyBox;
```

------------------------------------------------------------------------

## 💡 Key Learning Outcomes

### 🧠 React Concepts Learned

-   `useState` and `useEffect` for managing side effects
-   Creating **custom hooks** (`useCurrencyInfo`) for reusable logic
-   Prop drilling and state lifting between components
-   Controlled components (`input`, `select`)
-   Conditional rendering based on loading/error states

### 🧩 Component Architecture

-   Building modular and reusable UI components (`CurrencyBox`)
-   Implementing clean data flow between parent and child components

### ⚙️ Asynchronous Programming

-   Working with async/await in React hooks
-   Handling loading states, errors, and cleanup functions

### 🎨 Tailwind CSS Mastery

-   Using utility-first classes for layout and spacing
-   Responsive and modern UI styling

------------------------------------------------------------------------

## 🧮 Example Conversion Flow

1.  Select `From` and `To` currencies.\
2.  Enter amount to convert.\
3.  Click "Convert" --- result updates immediately.\
4.  Use "Swap" button to interchange currencies instantly.

------------------------------------------------------------------------

## 🧰 Constants

``` js
// utils/constants.js
export const CURRENCY_API = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
export const BACKGROUND_IMAGE_URL = "https://images.unsplash.com/photo-1561414927-6d86591d0c4f";
```

------------------------------------------------------------------------

## 🧑‍💻 Author

**Surajit Rana**\
📘 Guided Project --- Learning React Hooks, Custom Hooks, and Tailwind
CSS\
📅 Completed: November 2025

------------------------------------------------------------------------

## 🪄 License

This project is open-sourced for educational purposes.\
Feel free to fork, learn, and modify it as part of your learning
journey!
