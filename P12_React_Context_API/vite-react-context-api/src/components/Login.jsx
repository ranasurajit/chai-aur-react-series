import { useContext, useState } from 'react';
import UserContext from '../contexts/userContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = () => {
        const userDetails = username.split('.');
        const fullname = `${userDetails[0].toUpperCase()} ${userDetails[1].toUpperCase()}`;
        setUser({ username, password, fullname });
    };

    return (
        <div>
            <h2>Login</h2>
            <input type='text' value={username}
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)} />
            <input type='password' value={password}
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
};

export default Login;
