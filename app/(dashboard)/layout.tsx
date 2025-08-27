import { Metadata } from 'next'
import { Box, Container, AppBar, Toolbar, Typography } from '@mui/material'

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard - Jam',
    default: 'Dashboard - Jam',
  },
  description: 'Manage your projects, tasks, and freelance work on Jam',
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Simple Top Navigation */}
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jam Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      
      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Container maxWidth="xl">
          {children}
        </Container>
      </Box>
    </Box>
  )
}
