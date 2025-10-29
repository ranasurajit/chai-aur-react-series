import Chai from './Chai';

const App = () => {
  const username = 'Chai and Code!';
  return (
    <>
      <h1>Welcome to Chai ☕️ aur React ⚛️ series - Using 'Vite'</h1>
      <Chai />
      Username : {username}
    </>
  );
}

export default App;
