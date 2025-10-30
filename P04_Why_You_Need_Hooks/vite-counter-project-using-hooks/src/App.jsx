import { useState } from 'react';
import './App.css';

const App = () => {

  let [counter, setCounter] = useState(0);
  const maxValue = 10;
  const minValue = -10;

  const modifyCounter = (step, limit) => {
    if (step < 0 && counter == limit) {
      return;
    }
    if (step > 0 && counter == limit) {
      return;
    }
    counter += step;
    setCounter(counter);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <>
      <h2>Chai ☕️ aur React ⚛️ (Counter Project)</h2>
      <div>
        <h3>Counter : {counter}</h3>
      </div>
      <div>
        <button onClick={() => { modifyCounter(1, maxValue); }}>Increment Counter + </button>
        <button onClick={() => { modifyCounter(-1, minValue); }}>Decrement Counter - </button>
        <button onClick={resetCounter}>Reset Counter </button>
      </div>
      <div>
        <h3>Shadow Counter : {counter}</h3>
      </div>
    </>
  )
}

export default App;
