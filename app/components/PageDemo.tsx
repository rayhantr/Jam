'use client'

import { useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  Alert,
  AlertTitle,
} from '@mui/material'
import {
  Dashboard,
  Assignment,
  Folder,
  BarChart,
  Person,
  Settings,
  AdminPanelSettings,
  Login,
  CheckCircle,
  Schedule,
  Code,
  Rocket,
} from '@mui/icons-material'
import Link from 'next/link'

interface PageRoute {
  path: string
  title: string
  description: string
  icon: React.ReactNode
  status: 'completed' | 'in-progress' | 'planned'
  category: 'dashboard' | 'profile' | 'auth' | 'admin'
}

export function PageDemo() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const pageRoutes: PageRoute[] = [
    // Dashboard Pages
    {
      path: '/(dashboard)/dashboard',
      title: 'Dashboard',
      description: 'Main dashboard with statistics, charts, and project overview',
      icon: <Dashboard />,
      status: 'completed',
      category: 'dashboard',
    },
    {
      path: '/(dashboard)/projects',
      title: 'Projects',
      description: 'Project management with CRUD operations and status tracking',
      icon: <Folder />,
      status: 'completed',
      category: 'dashboard',
    },
    {
      path: '/(dashboard)/tasks',
      title: 'Tasks',
      description: 'Task management with completion tracking and priorities',
      icon: <Assignment />,
      status: 'completed',
      category: 'dashboard',
    },
    {
      path: '/(dashboard)/plans',
      title: 'Plans & Pricing',
      description: 'Subscription plans with pricing cards and transaction history',
      icon: <BarChart />,
      status: 'completed',
      category: 'dashboard',
    },
    {
      path: '/(dashboard)/reports',
      title: 'Reports',
      description: 'Analytics and reporting dashboard with performance metrics',
      icon: <BarChart />,
      status: 'completed',
      category: 'dashboard',
    },
    {
      path: '/(dashboard)/team',
      title: 'Team',
      description: 'Team collaboration and member management',
      icon: <Person />,
      status: 'planned',
      category: 'dashboard',
    },
    {
      path: '/(dashboard)/time-tracker',
      title: 'Time Tracker',
      description: 'Time tracking with project and task integration',
      icon: <Schedule />,
      status: 'planned',
      category: 'dashboard',
    },
    {
      path: '/(dashboard)/support',
      title: 'Support',
      description: 'Help desk and support ticket management',
      icon: <Settings />,
      status: 'planned',
      category: 'dashboard',
    },

    // Profile Pages
    {
      path: '/(profile)/profile',
      title: 'Profile',
      description: 'User profile management and settings',
      icon: <Person />,
      status: 'planned',
      category: 'profile',
    },
    {
      path: '/(profile)/profile/freelancer',
      title: 'Freelancer Profile',
      description: 'Freelancer-specific profile with portfolio and skills',
      icon: <Person />,
      status: 'planned',
      category: 'profile',
    },
    {
      path: '/(profile)/profile/settings',
      title: 'Settings',
      description: 'Account settings and preferences',
      icon: <Settings />,
      status: 'planned',
      category: 'profile',
    },

    // Auth Pages
    {
      path: '/(auth)/login',
      title: 'Login',
      description: 'User authentication and sign-in',
      icon: <Login />,
      status: 'planned',
      category: 'auth',
    },
    {
      path: '/(auth)/register',
      title: 'Register',
      description: 'User registration and account creation',
      icon: <Person />,
      status: 'planned',
      category: 'auth',
    },

    // Admin Pages
    {
      path: '/(admin)/admin',
      title: 'Admin Dashboard',
      description: 'Administrative dashboard and controls',
      icon: <AdminPanelSettings />,
      status: 'planned',
      category: 'admin',
    },
  ]

  const categories = [
    { value: 'all', label: 'All Pages', count: pageRoutes.length },
    { value: 'dashboard', label: 'Dashboard', count: pageRoutes.filter(p => p.category === 'dashboard').length },
    { value: 'profile', label: 'Profile', count: pageRoutes.filter(p => p.category === 'profile').length },
    { value: 'auth', label: 'Authentication', count: pageRoutes.filter(p => p.category === 'auth').length },
    { value: 'admin', label: 'Admin', count: pageRoutes.filter(p => p.category === 'admin').length },
  ]

  const filteredRoutes = selectedCategory === 'all' 
    ? pageRoutes 
    : pageRoutes.filter(route => route.category === selectedCategory)

  const getStatusColor = (status: PageRoute['status']) => {
    switch (status) {
      case 'completed': return 'success'
      case 'in-progress': return 'warning'
      case 'planned': return 'default'
      default: return 'default'
    }
  }

  const getStatusIcon = (status: PageRoute['status']) => {
    switch (status) {
      case 'completed': return <CheckCircle />
      case 'in-progress': return <Schedule />
      case 'planned': return <Code />
      default: return <Code />
    }
  }

  const completedCount = pageRoutes.filter(p => p.status === 'completed').length
  const totalCount = pageRoutes.length
  const progressPercentage = Math.round((completedCount / totalCount) * 100)

  return (
    <Box>
      {/* Migration Progress */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <AlertTitle>Page Migration Progress</AlertTitle>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
          <Typography variant="body2">
            {completedCount} of {totalCount} pages migrated ({progressPercentage}% complete)
          </Typography>
          <Rocket sx={{ color: 'info.main' }} />
        </Box>
      </Alert>

      {/* Category Filter */}
      <Paper elevation={1} sx={{ p: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Page Categories
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <Chip
              key={category.value}
              label={`${category.label} (${category.count})`}
              onClick={() => setSelectedCategory(category.value)}
              color={selectedCategory === category.value ? 'primary' : 'default'}
              variant={selectedCategory === category.value ? 'filled' : 'outlined'}
            />
          ))}
        </Box>
      </Paper>

      {/* Page Routes Grid */}
      <Grid container spacing={3}>
        {filteredRoutes.map((route) => (
          <Grid item xs={12} sm={6} lg={4} key={route.path}>
            <Card 
              elevation={1} 
              sx={{ 
                height: '100%',
                opacity: route.status === 'completed' ? 1 : 0.7,
                border: route.status === 'completed' ? 2 : 0,
                borderColor: route.status === 'completed' ? 'success.main' : 'transparent',
              }}
            >
              <CardContent>
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ mr: 2, color: 'primary.main' }}>
                    {route.icon}
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3">
                      {route.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {route.path}
                    </Typography>
                  </Box>
                  <Chip
                    icon={getStatusIcon(route.status)}
                    label={route.status}
                    color={getStatusColor(route.status)}
                    size="small"
                    variant="outlined"
                  />
                </Box>

                {/* Description */}
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {route.description}
                </Typography>

                {/* Actions */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {route.status === 'completed' ? (
                    <Button
                      component={Link}
                      href={route.path}
                      variant="contained"
                      size="small"
                      fullWidth
                    >
                      View Page
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      size="small"
                      fullWidth
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Migration Status Summary */}
      <Paper elevation={1} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Migration Status Summary
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Completed Pages"
              secondary={`${pageRoutes.filter(p => p.status === 'completed').length} pages fully migrated with TypeScript and Material-UI v5`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Schedule color="warning" />
            </ListItemIcon>
            <ListItemText
              primary="In Progress"
              secondary={`${pageRoutes.filter(p => p.status === 'in-progress').length} pages currently being migrated`}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <Code color="action" />
            </ListItemIcon>
            <ListItemText
              primary="Planned"
              secondary={`${pageRoutes.filter(p => p.status === 'planned').length} pages planned for future migration`}
            />
          </ListItem>
        </List>
      </Paper>

      {/* Technical Features */}
      <Paper elevation={1} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Technical Features Implemented
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Next.js 15 App Router" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="TypeScript conversion" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Material-UI v5 components" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Responsive design patterns" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Nested layout architecture" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="SEO metadata integration" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Error boundary handling" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Form integration" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

