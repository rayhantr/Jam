'use client'

import React, { useState } from 'react'
import { 
  Box, 
  Typography, 
  Paper, 
  Grid, 
  Divider,
  Alert,
  Stack
} from '@mui/material'
import { BtnLink, BtnIcon } from './ui'

/**
 * Component Demo
 * Demonstrates the migrated UI components
 */
const ComponentDemo: React.FC = () => {
  const [deleteCount, setDeleteCount] = useState(0)
  const [menuClickCount, setMenuClickCount] = useState(0)

  const menuItems = [
    { label: 'Edit Item', onClick: () => alert('Edit clicked!') },
    { label: 'Share Item', onClick: () => alert('Share clicked!') },
    { label: 'Copy Link', onClick: () => alert('Copy link clicked!') },
    { label: 'Disabled Item', onClick: () => {}, disabled: true },
  ]

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        🎨 Component Migration Demo
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        ✅ Successfully migrated core UI components from JSX to TypeScript!
      </Alert>

      {/* BtnLink Demo */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          BtnLink Component
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Migrated from: <code>src_old/components/Buttons/BtnLink.jsx</code>
        </Typography>
        
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <BtnLink color="primary">
            Primary Link
          </BtnLink>
          <BtnLink color="secondary">
            Secondary Link
          </BtnLink>
          <BtnLink 
            color="primary" 
            variant="outlined"
            onClick={() => alert('Link clicked!')}
          >
            Outlined Link
          </BtnLink>
          <BtnLink 
            color="primary" 
            variant="contained"
            disabled
          >
            Disabled Link
          </BtnLink>
        </Stack>
      </Paper>

      {/* BtnIcon Demo */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          BtnIcon Component
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Migrated from: <code>src_old/components/Buttons/BtnIcon.jsx</code>
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Basic Icons
            </Typography>
            <Stack direction="row" spacing={1}>
              <BtnIcon 
                iconType="edit" 
                tooltip="Edit"
                onClick={() => alert('Edit clicked!')}
              />
              <BtnIcon 
                iconType="add" 
                color="primary"
                tooltip="Add"
                onClick={() => alert('Add clicked!')}
              />
              <BtnIcon 
                iconType="share" 
                color="secondary"
                tooltip="Share"
                onClick={() => alert('Share clicked!')}
              />
              <BtnIcon 
                iconType="link" 
                tooltip="Copy Link"
                onClick={() => alert('Link copied!')}
              />
              <BtnIcon 
                iconType="help" 
                color="primary"
                tooltip="Help"
                onClick={() => alert('Help clicked!')}
              />
              <BtnIcon 
                iconType="close" 
                tooltip="Close"
                onClick={() => alert('Close clicked!')}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Special Icons
            </Typography>
            <Stack direction="row" spacing={1}>
              <BtnIcon 
                iconType="delete" 
                tooltip="Delete (with confirmation)"
                onDelete={() => {
                  setDeleteCount(prev => prev + 1)
                  alert(`Item deleted! Count: ${deleteCount + 1}`)
                }}
              />
              <BtnIcon 
                iconType="menu-dot" 
                tooltip="Menu"
                menuItems={menuItems}
              />
              <BtnIcon 
                iconType="heart" 
                color="error"
                tooltip="Like"
                onClick={() => alert('Liked!')}
              />
              <BtnIcon 
                iconType="unlike" 
                tooltip="Dislike"
                onClick={() => alert('Disliked!')}
              />
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body2" color="text.secondary">
          <strong>Features:</strong>
          <br />
          • TypeScript support with proper prop types
          <br />
          • Material-UI v5 icons (replacing FontAwesome)
          <br />
          • Built-in delete confirmation popover
          <br />
          • Customizable menu popover
          <br />
          • Tooltip support
          <br />
          • Improved accessibility and UX
        </Typography>
      </Paper>

      {/* Migration Status */}
      <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
        <Typography variant="h6" gutterBottom>
          📊 Migration Progress
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Typography variant="h4" color="success.main">✅</Typography>
              <Typography variant="body2">BtnLink</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Typography variant="h4" color="success.main">✅</Typography>
              <Typography variant="body2">BtnIcon</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Typography variant="h4" color="warning.main">⏳</Typography>
              <Typography variant="body2">Navigation</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Typography variant="h4" color="grey.400">⏸️</Typography>
              <Typography variant="body2">Chat Components</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default ComponentDemo
