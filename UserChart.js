import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserChart = ({ userGrowthData, revenueData }) => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'User Growth',
        data: userGrowthData,
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Monthly Revenue',
        data: revenueData,
        borderColor: '#f50057',
        backgroundColor: 'rgba(245, 0, 87, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Growth and Monthly Revenue Over Time',
      },
    },
  };

  return (
    <Card sx={{ marginTop: 4, boxShadow: 3 }}>
      <CardContent>
        <Typography variant='h6' align='center' color="text.secondary" gutterBottom>
          User Growth & Monthly Revenue
        </Typography>
        <div style={{ position: 'relative', height: '400px', width: '100%' }}>
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserChart;
