'use client'

import React, { useState } from 'react'
import {
  Avatar,
  Button,
  Collapse,
  Drawer,
  Fab,
  Zoom,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper
} from '@mui/material'
import {
  Home as HomeIcon,
  Notifications as NotificationsIcon,
  Message as MessageIcon,
  Person as PersonIcon,
  Search as SearchIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandLess,
  ExpandMore,
  Work as WorkIcon,
  Business as BusinessIcon,
  Assessment as AssessmentIcon,
  Help as HelpIcon,
  Support as SupportIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// Bottom navigation items
const bottomNavItems = [
  { path: '/', title: 'Home', icon: <HomeIcon /> },
  { path: '/notifications', title: 'Notifications', icon: <NotificationsIcon /> },
  { path: '/messages', title: 'Messages', icon: <MessageIcon /> },
  { path: '/profile', title: 'Profile', icon: <PersonIcon /> },
]

// Drawer navigation items
const drawerItems = [
  {
    path: '#',
    title: 'Find Work',
    icon: <WorkIcon />,
    subNav: [
      { id: 1, path: '#', title: 'Find Work' },
      { id: 2, path: '#', title: 'Saved Jobs' },
      { id: 3, path: '#', title: 'Proposals' },
      { id: 4, path: '#', title: 'Profile' },
      { id: 5, path: '#', title: 'My Stats' },
      { id: 6, path: '#', title: 'JamTalent Readiness Test' },
      { id: 7, path: '#', title: 'My Project Dashboard' },
    ],
  },
  {
    path: '#',
    title: 'My Jobs',
    icon: <BusinessIcon />,
    subNav: [
      { id: 1, path: '#', title: 'My Jobs' },
      { id: 2, path: '#', title: 'All Contracts' },
      { id: 3, path: '#', title: 'Work Diary' },
    ],
  },
  {
    path: '#',
    title: 'Reports',
    icon: <AssessmentIcon />,
    subNav: [
      { id: 1, path: '#', title: 'Overview' },
      { id: 2, path: '#', title: 'My Reports' },
      { id: 3, path: '#', title: 'Billings And Earnings' },
      { id: 4, path: '#', title: 'Connects History' },
      { id: 5, path: '#', title: 'Transaction History' },
      { id: 6, path: '#', title: 'Certificate of Earnings' },
    ],
  },
  { path: '#', title: 'FAQ', icon: <HelpIcon /> },
  { path: '#', title: 'Help & Support', icon: <SupportIcon /> },
  { path: '#', title: 'Terms & Conditions', icon: <AssignmentIcon /> },
]

// Quick navigation items for profile section
const quickNavItems = [
  { title: 'View Profile', path: '/profile' },
  { title: 'Settings', path: '/settings' },
  { title: 'Help', path: '/help' },
  { title: 'Logout', path: '/logout' },
]

interface DrawerNavItemProps {
  item: typeof drawerItems[0]
  onClose: () => void
}

// Drawer Navigation Item Component
const DrawerNavItem: React.FC<DrawerNavItemProps> = ({ item, onClose }) => {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    if (item.subNav) {
      setExpanded(!expanded)
    }
  }

  return (
    <>
      <ListItem 
        button 
        onClick={handleToggle}
        sx={{ 
          borderRadius: 1, 
          mb: 0.5,
          '&:hover': {
            backgroundColor: 'primary.light',
          }
        }}
      >
        <ListItemIcon sx={{ minWidth: 40 }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.title} />
        {item.subNav && (expanded ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      
      {item.subNav && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subNav.map((subItem) => (
              <ListItem
                key={subItem.id}
                button
                component={Link}
                href={subItem.path}
                onClick={onClose}
                sx={{ 
                  pl: 6, 
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'grey.100',
                  }
                }}
              >
                <ListItemText 
                  primary={subItem.title}
                  primaryTypographyProps={{ variant: 'body2' }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}

/**
 * BottomNav Component
 * Mobile navigation bar with drawer menu
 * Migrated from src_old/components/NavBars/BottomNav.jsx
 */
const BottomNav: React.FC = () => {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [profileExpanded, setProfileExpanded] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setProfileExpanded(false)
  }

  const handleProfileToggle = () => {
    setProfileExpanded(!profileExpanded)
  }

  const isActiveRoute = (path: string) => {
    return pathname === path
  }

  return (
    <>
      {/* Bottom Navigation Bar - Mobile Only */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          backgroundColor: 'transparent',
        }}
      >
        {/* Main Navigation Buttons */}
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}
        >
          {bottomNavItems.map((item) => (
            <Button
              key={item.title}
              component={Link}
              href={item.path}
              sx={{
                flexGrow: 1,
                py: 2,
                px: 1,
                color: 'white',
                flexDirection: 'column',
                minHeight: 64,
                position: 'relative',
                backgroundColor: isActiveRoute(item.path) ? 'primary.main' : 'transparent',
                '&:hover': {
                  backgroundColor: isActiveRoute(item.path) ? 'primary.dark' : 'rgba(255, 255, 255, 0.1)',
                },
                '&::after': isActiveRoute(item.path) ? {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 4,
                  height: 4,
                  backgroundColor: 'white',
                  borderRadius: '50%',
                } : {},
              }}
            >
              {item.icon}
              <Typography 
                variant="caption" 
                sx={{ 
                  mt: 0.5,
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                {item.title}
              </Typography>
            </Button>
          ))}
        </Box>

        {/* Floating Action Buttons */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {/* Search Button */}
          <Zoom in timeout={300}>
            <Fab
              size="small"
              color="secondary"
              onClick={() => setSearchModalOpen(true)}
              sx={{ borderRadius: 1 }}
            >
              <SearchIcon />
            </Fab>
          </Zoom>

          {/* Menu Button */}
          <Zoom in={!drawerOpen} timeout={300} style={{ transitionDelay: '200ms' }}>
            <Fab
              size="small"
              color="secondary"
              onClick={handleDrawerOpen}
              sx={{ borderRadius: 1 }}
            >
              <MenuIcon />
            </Fab>
          </Zoom>
        </Box>

        {/* Close Button (when drawer is open) */}
        <Zoom in={drawerOpen} timeout={300} style={{ transitionDelay: '200ms' }} unmountOnExit>
          <Fab
            size="small"
            color="secondary"
            onClick={handleDrawerClose}
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              borderRadius: 1,
              zIndex: 1400,
            }}
          >
            <CloseIcon />
          </Fab>
        </Zoom>
      </Box>

      {/* Drawer Menu */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: 1350,
          '& .MuiDrawer-paper': {
            width: 'calc(100vw - 88px)',
            maxWidth: 320,
            m: 1,
            borderRadius: 2,
            height: 'calc(100vh - 16px)',
          },
        }}
      >
        {/* Navigation Items */}
        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
          <List>
            {drawerItems.map((item, index) => (
              <DrawerNavItem
                key={index}
                item={item}
                onClose={handleDrawerClose}
              />
            ))}
          </List>
        </Box>

        {/* User Profile Section */}
        <Paper
          sx={{
            m: 2,
            mt: 0,
            p: 2,
            backgroundColor: 'primary.light',
            borderRadius: 2,
            flexShrink: 0,
          }}
        >
          {/* Profile Header */}
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar
                component={Link}
                href="/profile"
                onClick={handleDrawerClose}
                sx={{ width: 48, height: 48 }}
              />
            </Grid>
            <Grid item xs>
              <Box
                component={Link}
                href="/profile"
                onClick={handleDrawerClose}
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography variant="h6" color="secondary">
                  User Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  username@gmail.com
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Quick Actions */}
          <Collapse in={profileExpanded} timeout={300}>
            <Box sx={{ pt: 2 }}>
              <List dense>
                {quickNavItems.map((item) => (
                  <ListItem
                    key={item.title}
                    button
                    component={Link}
                    href={item.path}
                    onClick={handleDrawerClose}
                    sx={{ 
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      }
                    }}
                  >
                    <ListItemText 
                      primary={item.title}
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Collapse>

          {/* Expand/Collapse Button */}
          <Button
            onClick={handleProfileToggle}
            color="secondary"
            fullWidth
            sx={{ mt: 1, py: 1 }}
          >
            {profileExpanded ? <ExpandLess /> : <ExpandMore />}
          </Button>
        </Paper>
      </Drawer>

      {/* Search Modal Placeholder */}
      {searchModalOpen && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setSearchModalOpen(false)}
        >
          <Paper
            sx={{
              p: 3,
              m: 2,
              maxWidth: 400,
              width: '100%',
              borderRadius: 2,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Typography variant="h6" gutterBottom>
              Search
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Search functionality will be implemented here.
            </Typography>
            <Button
              onClick={() => setSearchModalOpen(false)}
              sx={{ mt: 2 }}
              variant="outlined"
            >
              Close
            </Button>
          </Paper>
        </Box>
      )}
    </>
  )
}

export default BottomNav

