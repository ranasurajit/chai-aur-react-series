import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default App;
