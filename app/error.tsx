'use client'

import { useEffect } from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { ErrorOutline, Refresh } from '@mui/icons-material'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          gap: 3,
        }}
      >
        <ErrorOutline sx={{ fontSize: 80, color: 'error.main' }} />
        
        <Typography variant="h4" component="h1" gutterBottom>
          Oops! Something went wrong
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
          We encountered an unexpected error. This has been logged and our team will look into it.
          You can try refreshing the page or go back to the homepage.
        </Typography>
        
        {process.env.NODE_ENV === 'development' && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: 'grey.100',
              borderRadius: 1,
              maxWidth: '100%',
              overflow: 'auto',
            }}
          >
            <Typography variant="caption" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
              {error.message}
            </Typography>
          </Box>
        )}
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            startIcon={<Refresh />}
            onClick={reset}
            size="large"
          >
            Try Again
          </Button>
          
          <Button
            variant="outlined"
            onClick={() => window.location.href = '/'}
            size="large"
          >
            Go Home
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

