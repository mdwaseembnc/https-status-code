// src/data/sampleData.js

export const dashboardData = {
    totalRequests: 128456,
    errorRate: 2.34,
    avgResponseTime: 127,
    statusCodes: {
      '5xx': 1543,
      '4xx': 1456,
      'other': 125457
    },
    alerts: [
      {
        id: 1,
        severity: 'Critical',
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
        message: 'High 5xx error rate detected',
        details: 'Error rate exceeded 5% threshold for more than 5 minutes'
      },
      {
        id: 2,
        severity: 'Warning',
        timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
        message: 'Increased response time detected',
        details: 'Average response time increased by 30% in the last hour'
      },
      {
        id: 3,
        severity: 'Info',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
        message: 'Server restarted successfully',
        details: 'Scheduled maintenance completed'
      },
      {
        id: 4,
        severity: 'Warning',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(), // 6 hours ago
        message: 'Database connection pool near capacity',
        details: '85% of available connections in use'
      },
      {
        id: 5,
        severity: 'Critical',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
        message: 'API rate limit exceeded',
        details: 'Multiple clients affected due to rate limiting'
      },
      {
        id: 6,
        severity: 'Warning',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(), // 18 hours ago
        message: 'Disk usage warning',
        details: 'Server disk usage above 80%'
      },
      {
        id: 7,
        severity: 'Info',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(), // 20 hours ago
        message: 'New SSL certificate installed',
        details: 'Certificate valid for 1 year'
      },
      {
        id: 8,
        severity: 'Warning',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(), // 22 hours ago
        message: 'Memory usage alert',
        details: 'Server memory usage spiked to 90%'
      },
      {
        id: 9,
        severity: 'Info',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 23).toISOString(), // 23 hours ago
        message: 'New user registrations increased',
        details: '150% increase in sign-ups compared to yesterday'
      },
      {
        id: 10,
        severity: 'Critical',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 24 hours ago
        message: 'Authentication service unavailable',
        details: 'Intermittent failures for 5 minutes, now resolved'
      }
    ]
  };
  
  export const generateRangeData = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dayDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    const dailyData = [];
    let totalRequests = 0;
    let total5xx = 0;
    let total4xx = 0;
    
    for (let i = 0; i < dayDiff; i++) {
      const currentDate = new Date(start);
      currentDate.setDate(currentDate.getDate() + i);
      
      const dailyRequests = Math.floor(Math.random() * 20000) + 10000;
      const daily5xx = Math.floor(Math.random() * 300);
      const daily4xx = Math.floor(Math.random() * 400);
      const daily3xx = Math.floor(Math.random() * 800);
      const daily2xx = dailyRequests - daily5xx - daily4xx - daily3xx;
      
      totalRequests += dailyRequests;
      total5xx += daily5xx;
      total4xx += daily4xx;
      
      dailyData.push({
        date: currentDate.toISOString().split('T')[0],
        totalRequests: dailyRequests,
        status5xx: daily5xx,
        status4xx: daily4xx,
        status3xx: daily3xx,
        status2xx: daily2xx,
        errorRate: ((daily5xx + daily4xx) / dailyRequests) * 100
      });
    }
    
    return {
      startDate,
      endDate,
      totalRequests,
      errors5xx: total5xx,
      errors4xx: total4xx,
      errorRate: ((total5xx + total4xx) / totalRequests) * 100,
      avgResponseTime: Math.floor(Math.random() * 150) + 100,
      statusCodes: {
        '5xx': total5xx,
        '4xx': total4xx,
        'other': totalRequests - total5xx - total4xx
      },
      dailyData
    };
  };