import { Metadata } from 'next'
import { Box, Container, Paper, Typography } from '@mui/material'
import { Rocket } from '@mui/icons-material'

export const metadata: Metadata = {
  title: {
    template: '%s | Auth - Jam',
    default: 'Authentication - Jam',
  },
  description: 'Sign in or register for Jam - Your talent marketplace',
}

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          {/* Logo/Brand */}
          <Box sx={{ mb: 3 }}>
            <Rocket sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
            <Typography variant="h4" component="h1" fontWeight="bold">
              Jam
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your Talent Marketplace
            </Typography>
          </Box>
          
          {/* Auth Content */}
          {children}
        </Paper>
      </Container>
    </Box>
  )
}

