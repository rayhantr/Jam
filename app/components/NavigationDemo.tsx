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
  Divider
} from '@mui/material'
import { TopNav, BottomNav } from './navigation'

/**
 * Navigation Demo
 * Demonstrates the migrated navigation components
 */
const NavigationDemo: React.FC = () => {
  const [showTopNav, setShowTopNav] = useState(true)
  const [showBottomNav, setShowBottomNav] = useState(false)

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        🧭 Navigation Migration Demo
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        ✅ Successfully migrated navigation components from JSX to TypeScript!
      </Alert>

      {/* Controls */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Navigation Controls
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Toggle navigation components to test their functionality
        </Typography>
        
        <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={showTopNav}
                onChange={(e) => setShowTopNav(e.target.checked)}
              />
            }
            label="Show Top Navigation (Desktop)"
          />
          <FormControlLabel
            control={
              <Switch
                checked={showBottomNav}
                onChange={(e) => setShowBottomNav(e.target.checked)}
              />
            }
            label="Show Bottom Navigation (Mobile)"
          />
        </Stack>
      </Paper>

      {/* TopNav Demo */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          TopNav Component
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Migrated from: <code>src_old/components/NavBars/TopNav.jsx</code>
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              ✅ Features Migrated
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">• Material-UI v5 AppBar with responsive design</Typography>
              <Typography variant="body2">• Search input with proper styling</Typography>
              <Typography variant="body2">• Navigation dropdown menus with popovers</Typography>
              <Typography variant="body2">• Message notifications with badge animation</Typography>
              <Typography variant="body2">• Notification center with popover</Typography>
              <Typography variant="body2">• Profile menu with avatar and options</Typography>
              <Typography variant="body2">• TypeScript interfaces for all props</Typography>
              <Typography variant="body2">• Next.js App Router integration</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              🔧 Technical Improvements
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">• Replaced FontAwesome with Material-UI icons</Typography>
              <Typography variant="body2">• Modern React hooks instead of class components</Typography>
              <Typography variant="body2">• Improved accessibility with ARIA labels</Typography>
              <Typography variant="body2">• Better responsive breakpoints</Typography>
              <Typography variant="body2">• Enhanced tooltip positioning</Typography>
              <Typography variant="body2">• Cleaner component composition</Typography>
              <Typography variant="body2">• Consistent theming with MUI system</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body2" color="text.secondary">
          <strong>Note:</strong> The TopNav is designed for desktop screens (hidden on mobile).
          Toggle the switch above to see it in action. It includes dropdown menus for "Find Work", "My Jobs", and "Reports".
        </Typography>
      </Paper>

      {/* BottomNav Demo */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          BottomNav Component
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Migrated from: <code>src_old/components/NavBars/BottomNav.jsx</code>
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              ✅ Features Migrated
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">• Mobile-first bottom navigation bar</Typography>
              <Typography variant="body2">• Floating action buttons (Search & Menu)</Typography>
              <Typography variant="body2">• Slide-out drawer with navigation items</Typography>
              <Typography variant="body2">• Collapsible menu sections</Typography>
              <Typography variant="body2">• User profile section with quick actions</Typography>
              <Typography variant="body2">• Smooth animations and transitions</Typography>
              <Typography variant="body2">• Active route highlighting</Typography>
              <Typography variant="body2">• Search modal integration</Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              🔧 Technical Improvements
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">• Material-UI v5 Drawer and FAB components</Typography>
              <Typography variant="body2">• TypeScript interfaces for all components</Typography>
              <Typography variant="body2">• Next.js Link integration</Typography>
              <Typography variant="body2">• Improved touch targets for mobile</Typography>
              <Typography variant="body2">• Better state management with hooks</Typography>
              <Typography variant="body2">• Enhanced accessibility features</Typography>
              <Typography variant="body2">• Responsive design patterns</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body2" color="text.secondary">
          <strong>Note:</strong> The BottomNav is designed for mobile screens (hidden on desktop).
          Toggle the switch above to see it in action. Try the floating menu button to open the drawer.
        </Typography>
      </Paper>

      {/* Migration Status */}
      <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
        <Typography variant="h6" gutterBottom>
          📊 Navigation Migration Progress
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Typography variant="h4" color="success.main">✅</Typography>
              <Typography variant="body2">TopNav</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Typography variant="h4" color="success.main">✅</Typography>
              <Typography variant="body2">BottomNav</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Typography variant="h4" color="success.main">✅</Typography>
              <Typography variant="body2">NavPopper</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Typography variant="h4" color="warning.main">⏳</Typography>
              <Typography variant="body2">SideNav</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Conditional Navigation Rendering */}
      {showTopNav && (
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <TopNav />
        </Box>
      )}
      
      {showBottomNav && (
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <BottomNav />
        </Box>
      )}
    </Box>
  )
}

export default NavigationDemo

