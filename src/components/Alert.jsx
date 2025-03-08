// src/components/Alert.jsx
import React from 'react';

const Alert = ({ alert }) => {
  const getSeverityClass = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'alert-critical';
      case 'warning':
        return 'alert-warning';
      case 'info':
        return 'alert-info';
      default:
        return '';
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className={`alert-item ${getSeverityClass(alert.severity)}`}>
      <div className="alert-header">
        <span className="alert-severity">{alert.severity}</span>
        <span className="alert-timestamp">{formatTimestamp(alert.timestamp)}</span>
      </div>
      <div className="alert-message">{alert.message}</div>
      {alert.details && <div className="alert-details">{alert.details}</div>}
    </div>
  );
};

export default Alert;