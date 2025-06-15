import { Metadata } from 'next'
import { Box, Container } from '@mui/material'
import { TopNav } from '@/app/components/navigation/TopNav'
import { BottomNav } from '@/app/components/navigation/BottomNav'

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
      {/* Top Navigation */}
      <TopNav />
      
      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Container maxWidth="xl">
          {children}
        </Container>
      </Box>
      
      {/* Bottom Navigation for Mobile */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <BottomNav />
      </Box>
    </Box>
  )
}

