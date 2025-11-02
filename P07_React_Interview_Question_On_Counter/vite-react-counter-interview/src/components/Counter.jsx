import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [counterInc, setCounterInc] = useState(0);

    const modifyCounter = (increment) => {
        if (increment === 0) {
            setCounter(0);
        } else {
            /**
             * Here React batches the below calls together,
             * so the final update is equivalent to: +/- increment
             */
            setCounter(counter + increment); // counter = previous stale value
            setCounter(counter + increment); // counter = previous stale value
            setCounter(counter + increment); // counter = previous stale value
            setCounter(counter + increment); // counter = previous stale value
        }
    };

    const modifyIncCounter = (increment) => {
        if (increment === 0) {
            setCounterInc(0);
        } else {
            /**
             * If you actually wanted to increment 4 times,
             * use the functional updater form of setState,
             * which takes the previous state as input
             */
            setCounterInc(prevCounter => prevCounter + increment); // prevCounter = 0
            setCounterInc(prevCounter => prevCounter + increment); // prevCounter += increment
            setCounterInc(prevCounter => prevCounter + increment); // prevCounter += increment
            setCounterInc(prevCounter => prevCounter + increment); // prevCounter += increment
        }
    };

    return (
        <>
            <div className='m-5 text-2xl'>
                Counter Value (React Batch Updates) : {counter}
            </div>
            <div>
                <button className='bg-green-700 text-white'
                    onClick={() => { modifyCounter(1); }}>
                    Increment +
                </button>
                <button className='bg-red-400 text-white'
                    onClick={() => { modifyCounter(-1); }}>
                    Decrement -
                </button>
                <button className='bg-red-400 text-white'
                    onClick={() => { modifyCounter(0); }}>
                    Reset
                </button>
            </div>
            <div className='m-5 text-2xl'>
                Counter Value (React Incremental Updates) : {counterInc}
            </div>
            <div>
                <button className='bg-green-700 text-white'
                    onClick={() => { modifyIncCounter(1); }}>
                    Increment +
                </button>
                <button className='bg-red-400 text-white'
                    onClick={() => { modifyIncCounter(-1); }}>
                    Decrement -
                </button>
                <button className='bg-red-400 text-white'
                    onClick={() => { modifyIncCounter(0); }}>
                    Reset
                </button>
            </div>
        </>
    );
};

export default Counter;
