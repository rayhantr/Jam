import { Metadata } from 'next'
import { Box, Container, Paper } from '@mui/material'
import TopNav from '@/components/navigation/TopNav'

export const metadata: Metadata = {
  title: {
    template: '%s | Profile - Jam',
    default: 'Profile - Jam',
  },
  description: 'Manage your freelancer profile and settings on Jam',
}

interface ProfileLayoutProps {
  children: React.ReactNode
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Navigation */}
      <TopNav />
      
      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, py: 3, backgroundColor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
            {children}
          </Paper>
        </Container>
      </Box>
    </Box>
  )
}
