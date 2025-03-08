// src/utils/api.js
import { dashboardData, generateRangeData } from '../data/sampleData';

// Simulate API calls with promises
export const fetchDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData);
    }, 800);
  });
};

export const fetchDataForRange = (startDate, endDate) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = generateRangeData(startDate, endDate);
      resolve(data);
    }, 1200);
  });
};