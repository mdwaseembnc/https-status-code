// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ErrorStatusChart from '../components/ErrorStatusChart';
import Alert from '../components/Alert';
import { fetchDashboardData } from '../utils/api';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const loadDashboardData = async () => {
      try {
        setIsLoading(true);
        // In a real app, this would fetch from your backend
        const dashboardData = await fetchDashboardData();
        setData(dashboardData);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load dashboard data');
        setIsLoading(false);
      }
    };

    loadDashboardData();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="dashboard-container">
        <Navbar />
        <div className="dashboard-content">
          <Sidebar />
          <div className="loading-spinner">Loading dashboard data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <Navbar />
        <div className="dashboard-content">
          <Sidebar />
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <div className="dashboard-header">
            <h1>Server Status Dashboard</h1>
            <div className="dashboard-actions">
            <button 
  style={{
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
  onClick={() => navigate('/data-range')}
>
  View Historical Data
</button>

            </div>
          </div>

          <div className="dashboard-cards">
            <div className="status-card">
              <h3>Server Status</h3>
              <p className="status-badge success">Operational</p>
              <p>Last checked: {new Date().toLocaleTimeString()}</p>
            </div>
            
            <div className="status-card">
              <h3>Total Requests</h3>
              <p className="counter">{data.totalRequests.toLocaleString()}</p>
              <p>Last 24 hours</p>
            </div>
            
            <div className="status-card">
              <h3>Error Rate</h3>
              <p className="counter">{data.errorRate.toFixed(2)}%</p>
              <p>Last 24 hours</p>
            </div>
            
            <div className="status-card">
              <h3>Avg. Response Time</h3>
              <p className="counter">{data.avgResponseTime} ms</p>
              <p>Last 24 hours</p>
            </div>
          </div>

          <div className="chart-container">
            <h2>HTTP Status Breakdown</h2>
            <ErrorStatusChart data={data.statusCodes} />
          </div>

          <div className="alerts-container">
            <h2>Recent Alerts</h2>
            {data.alerts.length === 0 ? (
              <p className="no-alerts">No recent alerts</p>
            ) : (
              <div className="alerts-list">
                {data.alerts.map((alert) => (
                  <Alert key={alert.id} alert={alert} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;