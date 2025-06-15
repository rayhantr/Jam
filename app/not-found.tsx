import { Box, Typography, Button, Container } from '@mui/material'
import { Home, Search } from '@mui/icons-material'
import Link from 'next/link'

export default function NotFound() {
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
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', md: '6rem' },
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          404
        </Typography>
        
        <Typography variant="h4" component="h1" gutterBottom>
          Page Not Found
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
          The page you're looking for doesn't exist. It might have been moved, deleted, 
          or you entered the wrong URL.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            component={Link}
            href="/"
            variant="contained"
            startIcon={<Home />}
            size="large"
          >
            Go Home
          </Button>
          
          <Button
            component={Link}
            href="/jobs"
            variant="outlined"
            startIcon={<Search />}
            size="large"
          >
            Browse Jobs
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

