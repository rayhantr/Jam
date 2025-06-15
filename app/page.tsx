'use client'

import { Suspense, useState } from 'react'
import { Box, Typography, CircularProgress, Tabs, Tab, Container, Button } from '@mui/material'
import { Rocket, Store, Code, Palette } from '@mui/icons-material'
import { StoreDemo } from './components/StoreDemo'
import ComponentDemo from './components/ComponentDemo'

function TabPanel({ children, value, index }: { children: React.ReactNode, value: number, index: number }) {
  return (
    <div hidden={value !== index}>
      {value === index && children}
    </div>
  )
}

// This will be replaced with your actual home page component
function HomePage() {
  const [tabValue, setTabValue] = useState(0)

  return (
    <Container maxWidth="lg">
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
        <Rocket sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
        
        <Typography variant="h2" component="h1" gutterBottom textAlign="center">
          Welcome to Jam
        </Typography>
        <Typography variant="h5" component="h2" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          Your Talent Marketplace - Now Powered by Next.js 15!
        </Typography>
        
        {/* Navigation Tabs */}
        <Box sx={{ width: '100%', maxWidth: 800 }}>
          <Tabs 
            value={tabValue} 
            onChange={(_, newValue) => setTabValue(newValue)}
            centered
            sx={{ mb: 3 }}
          >
            <Tab label="Overview" icon={<Code />} />
            <Tab label="Store Demo" icon={<Store />} />
            <Tab label="Component Demo" icon={<Palette />} />
          </Tabs>
          
          <TabPanel value={tabValue} index={0}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
                This is the migrated version of your Upwork clone. 
                The migration to Next.js 15 with TypeScript and App Router is in progress.
              </Typography>
              
              <Box
                sx={{
                  p: 3,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: 1,
                  maxWidth: 600,
                  mx: 'auto',
                  textAlign: 'left',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  🚀 Phase 2 Complete: Zustand Store Setup
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ✅ Next.js 15 with App Router<br />
                  ✅ TypeScript configuration<br />
                  ✅ MUI v5 theme system<br />
                  ✅ Zustand store with TypeScript<br />
                  ✅ Redux compatibility layer<br />
                  ✅ Persistent state management<br />
                  ✅ Modern build pipeline<br />
                  🔄 Component migration next...
                </Typography>
              </Box>
            </Box>
          </TabPanel>
          
          <TabPanel value={tabValue} index={1}>
            <StoreDemo />
          </TabPanel>
          
          <TabPanel value={tabValue} index={2}>
            <ComponentDemo />
          </TabPanel>
        </Box>
      </Box>
    </Container>
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
