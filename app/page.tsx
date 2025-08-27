'use client'

import { Suspense, useState } from 'react'
import { Box, Typography, CircularProgress, Tabs, Tab, Container, Button } from '@mui/material'
import { Rocket, Store, Code, Palette, Navigation, Message, Assignment, Web } from '@mui/icons-material'
import { StoreDemo } from './components/StoreDemo'
import ComponentDemo from './components/ComponentDemo'
import NavigationDemo from './components/NavigationDemo'
import MessagingDemo from './components/MessagingDemo'
import FormsDemo from './components/FormsDemo'
import { PageDemo } from './components/PageDemo'

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
            <Tab label="Navigation Demo" icon={<Navigation />} />
            <Tab label="Messaging Demo" icon={<Message />} />
            <Tab label="Forms Demo" icon={<Assignment />} />
            <Tab label="Pages Demo" icon={<Web />} />
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
                  ���� Phase 3 Progress: Messaging Components Complete!
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ✅ Next.js 15 with App Router<br />
                  ✅ TypeScript configuration<br />
                  ✅ MUI v5 theme system<br />
                  ✅ Zustand store with TypeScript<br />
                  ✅ Redux compatibility layer<br />
                  ✅ Core UI components (BtnLink, BtnIcon)<br />
                  ✅ Navigation components (TopNav, BottomNav)<br />
                  ✅ Messaging components (MessageList, ChatWindow)<br />
                  ✅ Notification system (NotificationList)<br />
                  ✅ Form components (InputField, SelectField, CheckboxField)<br />
                  ✅ File upload and multi-step forms<br />
                  🔄 Page components next...
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
          
          <TabPanel value={tabValue} index={3}>
            <NavigationDemo />
          </TabPanel>
          
          <TabPanel value={tabValue} index={4}>
            <MessagingDemo />
          </TabPanel>
          
          <TabPanel value={tabValue} index={5}>
            <FormsDemo />
          </TabPanel>
          
          <TabPanel value={tabValue} index={6}>
            <PageDemo />
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
