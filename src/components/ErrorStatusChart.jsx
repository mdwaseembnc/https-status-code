// src/components/ErrorStatusChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = {
  '5xx': '#FF4560',
  '4xx': '#FEB019',
  'other': '#00B3E6'
};

const ErrorStatusChart = ({ data }) => {
  // Transform data for the chart
  const chartData = [
    { name: '5xx Errors', value: data['5xx'] || 0 },
    { name: '4xx Errors', value: data['4xx'] || 0 },
    { name: 'Other', value: data['other'] || 0 }
  ];

  return (
    <div className="error-chart">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name.split(' ')[0].toLowerCase()]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => value.toLocaleString()} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ErrorStatusChart;