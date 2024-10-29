import React from 'react'
import Dashboard from './Dashboard';
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import Footer from './Footer'

function App() {
  return (
    <>
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' align='center' sx={{flexGrow: 1}}> Admin User Dashboard</Typography>
      </Toolbar>
    </AppBar>
    <Container style={{marginTop: '20px', textAlign: 'center'}}>
      <Dashboard />
    </Container>
    <Footer />
    </>
  );
}

export default App;
