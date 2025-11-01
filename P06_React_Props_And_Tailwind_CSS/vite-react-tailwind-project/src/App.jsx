import Card from './components/Card';
import './App.css';

const App = () => {

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-lg text-black mb-5">
        Tailwind CSS
      </h1>
      <div className='flex content-between gap-5'>
        <Card username='Chai and JS' details='JavaScript Course' btnText='Read More ...' />
        <Card username='Chai and React' details='React Course' />
      </div>
    </>
  )
};

export default App;
