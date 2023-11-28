import React, { useState } from 'react';
import AuthService from './AuthService';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      try {
        const user = await AuthService.login(username, password);
        onLogin(user);
      } catch (error) {
        console.error('Login error:', error);
      }
    };
  
    return (
      <div className="auth-container">
        <h2>Login</h2>
        <div className="auth-form">
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
  };
  
  export default Login;
  