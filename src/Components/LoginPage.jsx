import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = { username, password };
    setUser(user);
    navigate('/userinfo');
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />User Name:</label>
      <label>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>Password:</label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;