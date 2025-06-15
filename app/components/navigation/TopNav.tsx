'use client'

import React, { useState } from 'react'
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Tooltip,
  Zoom,
  Container,
  Grid,
  TextField,
  InputAdornment,
  Box,
  Typography,
  Paper
} from '@mui/material'
import {
  Search as SearchIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreVertIcon
} from '@mui/icons-material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import NavPopper from './NavPopper'

// Navigation items configuration
const navItems = [
  {
    id: 1,
    path: '#',
    title: 'Find Work',
    menuId: 'find-work',
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
    id: 2,
    path: '#',
    title: 'My Jobs',
    menuId: 'my-jobs',
    subNav: [
      { id: 1, path: '#', title: 'My Jobs' },
      { id: 2, path: '#', title: 'All Contracts' },
      { id: 3, path: '#', title: 'Work Diary' },
    ],
  },
  {
    id: 3,
    path: '#',
    title: 'Reports',
    menuId: 'reports',
    subNav: [
      { id: 1, path: '#', title: 'Overview' },
      { id: 2, path: '#', title: 'My Reports' },
      { id: 3, path: '#', title: 'Billings And Earnings' },
      { id: 4, path: '#', title: 'Connects History' },
      { id: 5, path: '#', title: 'Transaction History' },
      { id: 6, path: '#', title: 'Certificate of Earnings' },
    ],
  },
]

// Types
interface PopperButtonProps {
  activeRoute?: boolean
  tooltip: string
  ariaLabel: string
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  isOpen: boolean
  icon: React.ReactNode
  hasNotification?: boolean
}

interface NavDropdownProps {
  title: string
  subNav: Array<{ id: number; path: string; title: string }>
  isOpen: boolean
  onToggle: (event: React.MouseEvent<HTMLElement>) => void
  onClose: () => void
  anchorEl: HTMLElement | null
}

// Reusable Popper Button Component
const PopperButton: React.FC<PopperButtonProps> = ({
  activeRoute = false,
  tooltip,
  ariaLabel,
  onClick,
  isOpen,
  icon,
  hasNotification = false
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  return (
    <Tooltip
      title={tooltip}
      open={isOpen ? false : tooltipOpen}
      onOpen={() => setTooltipOpen(true)}
      onClose={() => setTooltipOpen(false)}
      TransitionComponent={Zoom}
      arrow
    >
      <Button
        onClick={onClick}
        aria-label={ariaLabel}
        color="inherit"
        disabled={activeRoute}
        sx={{
          p: 1,
          borderRadius: 1,
          mx: 0.5,
          backgroundColor: isOpen ? 'primary.light' : 'transparent',
          color: isOpen ? 'primary.main' : 'inherit',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
          '&.Mui-disabled': {
            color: 'primary.main',
          },
        }}
      >
        {hasNotification ? (
          <Badge
            variant="dot"
            color="primary"
            sx={{
              '& .MuiBadge-badge': {
                '&::after': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  animation: 'ripple 1.5s infinite ease-in-out',
                  border: '1px solid currentColor',
                  content: '""',
                },
              },
            }}
          >
            {icon}
          </Badge>
        ) : (
          icon
        )}
      </Button>
    </Tooltip>
  )
}

// Navigation Dropdown Component
const NavDropdown: React.FC<NavDropdownProps> = ({
  title,
  subNav,
  isOpen,
  onToggle,
  onClose,
  anchorEl
}) => {
  return (
    <>
      <Button
        onClick={(event) => onToggle(event)}
        sx={{
          p: 1,
          px: 2,
          mx: 0.5,
          borderRadius: 1,
          color: isOpen ? 'primary.main' : 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {title}
      </Button>
      <NavPopper
        open={isOpen}
        anchorEl={anchorEl}
        onClickAway={onClose}
        placement="bottom"
      >
        <Paper
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: 3,
            minWidth: 200,
          }}
        >
          <List disablePadding>
            {subNav.map((subItem) => (
              <ListItem
                key={subItem.id}
                component={Link}
                href={subItem.path}
                sx={{
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'grey.100',
                  },
                }}
              >
                <ListItemText 
                  primary={subItem.title}
                  sx={{ ml: 1 }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </NavPopper>
    </>
  )
}

// Message Popper Component
const MessagePopper: React.FC<{ activeRoute: boolean }> = ({ activeRoute }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
    setAnchorEl(null)
  }

  return (
    <>
      <PopperButton
        activeRoute={activeRoute}
        tooltip="Messages"
        ariaLabel="show messages"
        onClick={handleToggle}
        isOpen={isOpen}
        icon={<MailIcon />}
        hasNotification
      />
      <NavPopper
        open={isOpen}
        anchorEl={anchorEl}
        onClickAway={handleClose}
      >
        <Paper
          sx={{
            width: 350,
            maxHeight: 400,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Messages
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No new messages
            </Typography>
          </Box>
        </Paper>
      </NavPopper>
    </>
  )
}

// Notification Popper Component
const NotificationPopper: React.FC<{ activeRoute: boolean }> = ({ activeRoute }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
    setAnchorEl(null)
  }

  return (
    <>
      <PopperButton
        activeRoute={activeRoute}
        tooltip="Notifications"
        ariaLabel="show notifications"
        onClick={handleToggle}
        isOpen={isOpen}
        icon={<NotificationsIcon />}
        hasNotification
      />
      <NavPopper
        open={isOpen}
        anchorEl={anchorEl}
        onClickAway={handleClose}
      >
        <Paper
          sx={{
            width: 350,
            maxHeight: 400,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Notifications
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No new notifications
            </Typography>
          </Box>
        </Paper>
      </NavPopper>
    </>
  )
}

// Profile Popper Component
const ProfilePopper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
    setAnchorEl(null)
  }

  return (
    <>
      <Tooltip
        title="Profile Options"
        arrow
        TransitionComponent={Zoom}
      >
        <Button
          onClick={handleToggle}
          aria-label="profile options"
          color="inherit"
          sx={{
            p: 0.5,
            borderRadius: 1,
            backgroundColor: isOpen ? 'primary.light' : 'transparent',
            color: isOpen ? 'primary.main' : 'inherit',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          <Avatar sx={{ width: 32, height: 32, mr: 1 }} />
          <MoreVertIcon sx={{ fontSize: 16 }} />
        </Button>
      </Tooltip>
      <NavPopper
        open={isOpen}
        anchorEl={anchorEl}
        onClickAway={handleClose}
      >
        <Paper
          sx={{
            minWidth: 200,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <List disablePadding>
            <ListItem button sx={{ px: 2, py: 1 }}>
              <ListItemText primary="View Profile" />
            </ListItem>
            <ListItem button sx={{ px: 2, py: 1 }}>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button sx={{ px: 2, py: 1 }}>
              <ListItemText primary="Help" />
            </ListItem>
            <ListItem button sx={{ px: 2, py: 1 }}>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Paper>
      </NavPopper>
    </>
  )
}

/**
 * TopNav Component
 * Main navigation bar for the application
 * Migrated from src_old/components/NavBars/TopNav.jsx
 */
const TopNav: React.FC = () => {
  const pathname = usePathname()
  const [navDropdowns, setNavDropdowns] = useState<{ [key: string]: { isOpen: boolean; anchorEl: HTMLElement | null } }>({})

  // Check if route is active
  const isActiveRoute = (routeName: string) => {
    return pathname === routeName
  }

  // Handle navigation dropdown toggle
  const handleNavToggle = (menuId: string, event: React.MouseEvent<HTMLElement>) => {
    setNavDropdowns(prev => ({
      ...prev,
      [menuId]: {
        isOpen: !prev[menuId]?.isOpen,
        anchorEl: event.currentTarget
      }
    }))
  }

  // Handle navigation dropdown close
  const handleNavClose = (menuId: string) => {
    setNavDropdowns(prev => ({
      ...prev,
      [menuId]: {
        isOpen: false,
        anchorEl: null
      }
    }))
  }

  return (
    <>
      <AppBar 
        position="fixed" 
        color="secondary"
        sx={{ 
          display: { xs: 'none', md: 'block' },
          boxShadow: 3,
          zIndex: 1200
        }}
      >
        <Container maxWidth="lg" sx={{ px: 3, py: 2 }}>
          <Grid container alignItems="center" spacing={2}>
            {/* Logo */}
            <Grid item xs="auto">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Typography variant="h5" component="h1" color="white" fontWeight="bold">
                  JamTalent
                </Typography>
              </Link>
            </Grid>

            {/* Search */}
            <Grid item xs="auto">
              <TextField
                placeholder="Search..."
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'white' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                  },
                }}
                sx={{
                  '& .MuiInputBase-input::placeholder': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    opacity: 1,
                  },
                }}
              />
            </Grid>

            {/* Navigation Menu */}
            <Grid item xs sx={{ textAlign: 'center' }}>
              <Box display="flex" justifyContent="center" alignItems="center">
                {navItems.map((item) => (
                  <NavDropdown
                    key={item.id}
                    title={item.title}
                    subNav={item.subNav}
                    isOpen={navDropdowns[item.menuId]?.isOpen || false}
                    onToggle={(event) => handleNavToggle(item.menuId, event)}
                    onClose={() => handleNavClose(item.menuId)}
                    anchorEl={navDropdowns[item.menuId]?.anchorEl || null}
                  />
                ))}
              </Box>
            </Grid>

            {/* Action Buttons */}
            <Grid item xs="auto">
              <Box display="flex" alignItems="center">
                <MessagePopper activeRoute={isActiveRoute('/messages')} />
                <NotificationPopper activeRoute={isActiveRoute('/notifications')} />
                <ProfilePopper />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      
      {/* Spacer for fixed AppBar */}
      <Toolbar sx={{ display: { xs: 'none', md: 'block' } }} />
    </>
  )
}

export default TopNav
