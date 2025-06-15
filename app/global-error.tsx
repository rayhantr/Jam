'use client'

import { useEffect } from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { Refresh, Home, BugReport } from '@mui/icons-material'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body>
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
            {/* Error Icon */}
            <BugReport 
              sx={{ 
                fontSize: 80, 
                color: 'error.main', 
                mb: 3,
                opacity: 0.7 
              }} 
            />

            {/* Error Title */}
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'error.main' }}
            >
              Something went wrong!
            </Typography>

            {/* Error Message */}
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 600 }}
            >
              We apologize for the inconvenience. An unexpected error has occurred.
            </Typography>

            {/* Error Details (Development) */}
            {process.env.NODE_ENV === 'development' && (
              <Box
                sx={{
                  mb: 4,
                  p: 2,
                  backgroundColor: 'grey.100',
                  borderRadius: 1,
                  maxWidth: '100%',
                  overflow: 'auto',
                }}
              >
                <Typography variant="body2" component="pre" sx={{ fontSize: '0.75rem' }}>
                  {error.message}
                </Typography>
              </Box>
            )}

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                onClick={reset}
                variant="contained"
                size="large"
                startIcon={<Refresh />}
                sx={{ minWidth: 140 }}
              >
                Try Again
              </Button>
              
              <Button
                href="/"
                variant="outlined"
                size="large"
                startIcon={<Home />}
                sx={{ minWidth: 140 }}
              >
                Home Page
              </Button>
            </Box>

            {/* Support Information */}
            <Box sx={{ mt: 6, p: 3, backgroundColor: 'grey.50', borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary">
                If this problem persists, please contact our support team with error ID: {error.digest}
              </Typography>
            </Box>
          </Box>
        </Container>
      </body>
    </html>
  )
}

