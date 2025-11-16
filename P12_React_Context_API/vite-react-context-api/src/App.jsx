import './App.css';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import UserContextProvider from './contexts/UserContextProvider';

const App = () => {
  return (
    <UserContextProvider>
      <h2>Welcome to React Context API Learning!</h2>
      <Login />
      <UserProfile />
    </UserContextProvider>
  );
};

export default App;
