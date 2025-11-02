import './App.css';
import Counter from './components/Counter';

const App = () => {
  return (
    <>
      <div className='bg-green-300 p-4 text-4xl text-black rounded-lg'>
        <h2>React Batch vs Incremental Updates on States</h2>
      </div>
      <Counter />
    </>
  )
};

export default App;
