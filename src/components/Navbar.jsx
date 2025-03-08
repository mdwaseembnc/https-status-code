// src/components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Server Monitor</h1>
      </div>
      <div className="navbar-menu">
        <div className="navbar-user">
          <img 
            src="/api/placeholder/32/32" 
            alt="User Avatar" 
            className="user-avatar" 
          />
          <span className="user-name">Admin User</span>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;