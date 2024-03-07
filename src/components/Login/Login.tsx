import {useEffect, useState} from 'react';
import axios from "axios";
import './Login.css';

type ModelValueType = 'gpt' | 'codex' | 'image';
const Login = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('/login');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="Login">
      <header className="Login-header">
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </header>
    </div>
  );
}

export default Login;
