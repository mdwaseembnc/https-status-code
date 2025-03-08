// src/pages/DataRange.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ErrorStatusChart from '../components/ErrorStatusChart';
import { fetchDataForRange } from '../utils/api';
import '../styles/DataRange.css';

const DataRange = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rangeData, setRangeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
      navigate('/login');
    }
    
    // Set default date range to last 7 days
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - 7);
    
    setEndDate(end.toISOString().split('T')[0]);
    setStartDate(start.toISOString().split('T')[0]);
  }, [navigate]);

  const handleRangeSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      setError(null);
      
      // In a real app, this would fetch from your backend with the date range
      const data = await fetchDataForRange(startDate, endDate);
      setRangeData(data);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load data for the specified range');
      setIsLoading(false);
    }
  };

  return (
    <div className="data-range-container">
      <Navbar />
      <div className="data-range-content">
        <Sidebar />
        <main className="main-content">
          <div className="data-range-header">
            <h1>Data Range Analysis</h1>
            <button onClick={() => navigate('/dashboard')} className="back-button">
              Back to Dashboard
            </button>
          </div>

          <div className="date-range-form-container">
            <form onSubmit={handleRangeSubmit} className="date-range-form">
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
              
              <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Analyze'}
              </button>
            </form>
          </div>

          {error && <div className="error-message">{error}</div>}

          {isLoading && <div className="loading-spinner">Loading data...</div>}

          {rangeData && (
            <div className="data-results">
              <div className="summary-stats">
                <div className="stat-card">
                  <h3>Total Requests</h3>
                  <p className="stat-value">{rangeData.totalRequests.toLocaleString()}</p>
                </div>
                
                <div className="stat-card">
                  <h3>Error Rate</h3>
                  <p className="stat-value">{rangeData.errorRate.toFixed(2)}%</p>
                </div>
                
                <div className="stat-card">
                  <h3>Avg. Response Time</h3>
                  <p className="stat-value">{rangeData.avgResponseTime} ms</p>
                </div>
                
                <div className="stat-card">
                  <h3>Total 5xx Errors</h3>
                  <p className="stat-value">{rangeData.errors5xx.toLocaleString()}</p>
                </div>
              </div>

              <div className="chart-container">
                <h2>HTTP Status Breakdown</h2>
                <ErrorStatusChart data={rangeData.statusCodes} />
              </div>

              <div className="data-table-container">
                <h2>Daily Breakdown</h2>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Total Requests</th>
                      <th>2xx</th>
                      <th>3xx</th>
                      <th>4xx</th>
                      <th>5xx</th>
                      <th>Error Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rangeData.dailyData.map((day) => (
                      <tr key={day.date}>
                        <td>{day.date}</td>
                        <td>{day.totalRequests.toLocaleString()}</td>
                        <td>{day.status2xx.toLocaleString()}</td>
                        <td>{day.status3xx.toLocaleString()}</td>
                        <td>{day.status4xx.toLocaleString()}</td>
                        <td>{day.status5xx.toLocaleString()}</td>
                        <td>{day.errorRate.toFixed(2)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DataRange;