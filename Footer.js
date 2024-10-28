import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 3, mt: 4 }}>
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          SCIT Technologies
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Connecting freelancers and clients for better opportunities.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Contact Us
          </Link>
        </Box>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} SCIT. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
