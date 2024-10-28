import React from 'react';
import { Card, Typography, Grid2, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import UserChart from './UserChart';

export default function Dashboard() {
  const userGrowthData = [1200, 1300, 1350, 1400, 1450, 1500, 1550];
  const revenuePerUser = 4.5; 
  const revenueData = userGrowthData.map(users => (users * revenuePerUser).toFixed(2)); 

  const activeUsers = 1000;
  const feedbackRating = 4.7; 
  const churnRate = 10; 

  const users = [
    { name: 'John Doe', email: 'john@example.com', signupDate: '2024-01-15' },
    { name: 'Jane Smith', email: 'jane@example.com', signupDate: '2024-01-20' },
    { name: 'Alex Johnson', email: 'alex@example.com', signupDate: '2024-02-05' },
    { name: 'Maria Garcia', email: 'maria@example.com', signupDate: '2024-02-10' },
    { name: 'Michael Brown', email: 'michael@example.com', signupDate: '2024-02-15' },
  ];

  return (
    <Grid2 container spacing={4} justifyContent="center">
      <Grid2 item xs={12} sm={6} md={4}>
        <Card sx={{ textAlign: 'center', padding: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant='h6' color="text.secondary">Total Users:</Typography>
            <Typography variant='h4' color="primary">{userGrowthData[userGrowthData.length - 1]}</Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4}>
        <Card sx={{ textAlign: 'center', padding: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant='h6' color="text.secondary">Monthly Revenue:</Typography>
            <Typography variant='h4' color="primary">${revenueData[revenueData.length - 1]}</Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4}>
        <Card sx={{ textAlign: 'center', padding: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant='h6' color="text.secondary">Active Users:</Typography>
            <Typography variant='h4' color="primary">{activeUsers}</Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4}>
        <Card sx={{ textAlign: 'center', padding: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant='h6' color="text.secondary">Feedback Rating:</Typography>
            <Typography variant='h4' color="primary">{feedbackRating} / 5</Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} sm={6} md={4}>
        <Card sx={{ textAlign: 'center', padding: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant='h6' color="text.secondary">Churn Rate:</Typography>
            <Typography variant='h4' color="primary">{churnRate} %</Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12}>
        <Card sx={{ padding: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant='h6' color="text.secondary" align="center">Recent Sign-ups</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Signup Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.signupDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 item xs={12} md={8}>
        <UserChart userGrowthData={userGrowthData} revenueData={revenueData} />
      </Grid2>
    </Grid2>
  );
}
