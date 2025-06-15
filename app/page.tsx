import { Suspense } from 'react'
import { Box, Typography, CircularProgress } from '@mui/material'

// This will be replaced with your actual home page component
function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Jam
      </Typography>
      <Typography variant="h5" component="h2" color="text.secondary" textAlign="center">
        Your Talent Marketplace - Now Powered by Next.js 15!
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, maxWidth: 600, textAlign: 'center' }}>
        This is the migrated version of your Upwork clone. 
        The migration to Next.js 15 with TypeScript and App Router is in progress.
      </Typography>
    </Box>
  )
}

export default function Page() {
  return (
    <Suspense fallback={
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    }>
      <HomePage />
    </Suspense>
  )
}

