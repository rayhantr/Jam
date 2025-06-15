'use client'

import React, { useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Grid,
  Alert,
  Stack,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  Tabs,
  Tab,
  Card,
  CardContent
} from '@mui/material'
import {
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  Chat as ChatIcon,
  List as ListIcon
} from '@mui/icons-material'
import { MessageList, NotificationList, ChatWindow } from './messaging'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`messaging-tabpanel-${index}`}
      aria-labelledby={`messaging-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

/**
 * MessagingDemo Component
 * Demonstrates the migrated messaging and notification components
 */
const MessagingDemo: React.FC = () => {
  const [tabValue, setTabValue] = useState(0)
  const [showAsPopper, setShowAsPopper] = useState(false)
  const [enableRealTimeChat, setEnableRealTimeChat] = useState(true)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const handleSendMessage = (message: string) => {
    console.log('Sending message:', message)
    // In a real app, this would send the message via WebSocket or API
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        💬 Messaging & Notifications Demo
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        ✅ Successfully migrated messaging components from JSX to TypeScript!
      </Alert>

      {/* Controls */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Demo Controls
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Configure the messaging components to test different scenarios
        </Typography>
        
        <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={showAsPopper}
                onChange={(e) => setShowAsPopper(e.target.checked)}
              />
            }
            label="Show as Popper (Compact View)"
          />
          <FormControlLabel
            control={
              <Switch
                checked={enableRealTimeChat}
                onChange={(e) => setEnableRealTimeChat(e.target.checked)}
              />
            }
            label="Enable Real-time Chat Features"
          />
        </Stack>
      </Paper>

      {/* Component Tabs */}
      <Paper sx={{ mb: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="messaging demo tabs">
            <Tab 
              label="Message List" 
              icon={<MessageIcon />} 
              iconPosition="start"
            />
            <Tab 
              label="Notifications" 
              icon={<NotificationsIcon />} 
              iconPosition="start"
            />
            <Tab 
              label="Chat Window" 
              icon={<ChatIcon />} 
              iconPosition="start"
            />
            <Tab 
              label="Overview" 
              icon={<ListIcon />} 
              iconPosition="start"
            />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="h5" gutterBottom>
            MessageList Component
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Migrated from: <code>src_old/components/MessageList/MessageList.jsx</code>
          </Typography>
          
          <Box sx={{ mt: 3, height: showAsPopper ? 450 : 600 }}>
            <MessageList isPopper={showAsPopper} />
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h5" gutterBottom>
            NotificationList Component
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Migrated from: <code>src_old/components/NotificationList/NotificationList.jsx</code>
          </Typography>
          
          <Box sx={{ mt: 3, height: showAsPopper ? 450 : 600 }}>
            <NotificationList isPopper={showAsPopper} />
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h5" gutterBottom>
            ChatWindow Component
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Migrated from: <code>src_old/components/MessageList/ChatWindow.jsx</code>
          </Typography>
          
          <Box sx={{ mt: 3, height: 600 }}>
            <ChatWindow
              onSendMessage={enableRealTimeChat ? handleSendMessage : undefined}
              recipientName="John Doe"
              recipientAvatar=""
            />
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="h5" gutterBottom>
            Migration Overview
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {/* MessageList Features */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    💬 MessageList Features
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Material-UI v5 components throughout</Typography>
                    <Typography variant="body2">• TypeScript interfaces for all props</Typography>
                    <Typography variant="body2">• Responsive design with mobile optimization</Typography>
                    <Typography variant="body2">• Read/unread status management</Typography>
                    <Typography variant="body2">• Bulk actions (mark all as read)</Typography>
                    <Typography variant="body2">• Individual message actions (read, delete, report)</Typography>
                    <Typography variant="body2">• Avatar integration with fallback initials</Typography>
                    <Typography variant="body2">• Timestamp formatting and display</Typography>
                    <Typography variant="body2">• Next.js Link integration for navigation</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* NotificationList Features */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="secondary">
                    🔔 NotificationList Features
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Category-based notification types</Typography>
                    <Typography variant="body2">• Color-coded icons and styling</Typography>
                    <Typography variant="body2">• Rich notification content with descriptions</Typography>
                    <Typography variant="body2">• Action URLs for clickable notifications</Typography>
                    <Typography variant="body2">• Category chips and status indicators</Typography>
                    <Typography variant="body2">• Notification summary and grouping</Typography>
                    <Typography variant="body2">• Settings integration for preferences</Typography>
                    <Typography variant="body2">• Unread count tracking</Typography>
                    <Typography variant="body2">• Responsive layout with proper spacing</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* ChatWindow Features */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="success.main">
                    💭 ChatWindow Features
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Real-time chat interface design</Typography>
                    <Typography variant="body2">• Message bubbles with proper alignment</Typography>
                    <Typography variant="body2">• Auto-scroll to latest messages</Typography>
                    <Typography variant="body2">• Typing indicators and online status</Typography>
                    <Typography variant="body2">• File attachment and emoji support</Typography>
                    <Typography variant="body2">• Multi-line message input with auto-resize</Typography>
                    <Typography variant="body2">• Timestamp formatting for messages</Typography>
                    <Typography variant="body2">• User avatar and profile integration</Typography>
                    <Typography variant="body2">• Send button with proper validation</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* Technical Improvements */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="warning.main">
                    🔧 Technical Improvements
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Full TypeScript conversion with strict typing</Typography>
                    <Typography variant="body2">• Material-UI v5 components and theming</Typography>
                    <Typography variant="body2">• Modern React hooks and functional components</Typography>
                    <Typography variant="body2">• Next.js App Router integration</Typography>
                    <Typography variant="body2">• Improved accessibility with ARIA labels</Typography>
                    <Typography variant="body2">• Better state management patterns</Typography>
                    <Typography variant="body2">• Enhanced responsive design</Typography>
                    <Typography variant="body2">• Optimized performance with proper memoization</Typography>
                    <Typography variant="body2">• Consistent component architecture</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Migration Status */}
          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="h6" gutterBottom>
              📊 Messaging Migration Progress
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">✅</Typography>
                  <Typography variant="body2">MessageList</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">✅</Typography>
                  <Typography variant="body2">MessageBlock</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">✅</Typography>
                  <Typography variant="body2">NotificationList</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">✅</Typography>
                  <Typography variant="body2">ChatWindow</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </TabPanel>
      </Paper>

      {/* Integration Examples */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          🔗 Integration Examples
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          These components are now ready to be integrated into your navigation and pages
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<MessageIcon />}
              onClick={() => setTabValue(0)}
            >
              View Messages
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<NotificationsIcon />}
              onClick={() => setTabValue(1)}
            >
              View Notifications
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<ChatIcon />}
              onClick={() => setTabValue(2)}
            >
              Open Chat
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setTabValue(3)}
            >
              View Overview
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default MessagingDemo

