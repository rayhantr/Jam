'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { Box, Button, Container, Typography } from '@mui/material'
import { Home, ArrowBack } from '@mui/icons-material'

export default function NotFound() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: 4,
        }}
      >
        {/* 404 Visual */}
        <Box
          sx={{
            position: 'relative',
            mb: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '8rem', md: '12rem' },
              fontWeight: 'bold',
              color: 'primary.main',
              opacity: 0.1,
              lineHeight: 1,
            }}
          >
            404
          </Typography>
          <Typography
            variant="h2"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 'bold',
              color: 'text.primary',
            }}
          >
            Page Not Found
          </Typography>
        </Box>

        {/* Error Message */}
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600 }}
        >
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </Typography>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            component={Link}
            href="/"
            variant="contained"
            size="large"
            startIcon={<Home />}
            sx={{ minWidth: 140 }}
          >
            Home Page
          </Button>
          
          <Button
            onClick={() => window.history.back()}
            variant="outlined"
            size="large"
            startIcon={<ArrowBack />}
            sx={{ minWidth: 140 }}
          >
            Go Back
          </Button>
        </Box>

        {/* Additional Help */}
        <Box sx={{ mt: 6, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
          <Typography variant="body2" color="text.secondary">
            If you believe this is an error, please contact our support team.
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
