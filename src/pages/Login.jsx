// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'admin@example.com' && password === 'password') {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    }, 1000);
  };

  const handleSsoLogin = (provider) => {
    setIsLoading(true);
    setError('');
    
    // Simulate SSO authentication
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Server Monitor</h1>
          <p>Login to access your dashboard</p>
        </div>

        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="separator">
          <span>OR</span>
        </div>

        <div className="sso-options">
          <button 
            onClick={() => handleSsoLogin('google')} 
            className="sso-button google"
            disabled={isLoading}
          >
            Continue with Google
          </button>
          
          <button 
            onClick={() => handleSsoLogin('microsoft')} 
            className="sso-button microsoft"
            disabled={isLoading}
          >
            Continue with Microsoft
          </button>
          
          <button 
            onClick={() => handleSsoLogin('github')} 
            className="sso-button github"
            disabled={isLoading}
          >
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;