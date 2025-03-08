// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink 
            to="/data-range" 
            className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
          >
            Data Range Analysis
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink 
            to="/settings" 
            className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;