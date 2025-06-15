'use client'

import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Breadcrumbs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Avatar,
  LinearProgress,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
} from '@mui/material'
import {
  Dashboard,
  People,
  Work,
  AttachMoney,
  TrendingUp,
  Warning,
  CheckCircle,
  Block,
  MoreVert,
  Visibility,
  Edit,
  Delete,
  Security,
  Analytics,
  Settings,
  Notifications,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'

// Types
interface SystemMetrics {
  totalUsers: number
  activeUsers: number
  totalProjects: number
  activeProjects: number
  totalRevenue: number
  monthlyRevenue: number
  systemHealth: number
  serverUptime: string
}

interface User {
  id: string
  name: string
  email: string
  role: 'freelancer' | 'client' | 'admin'
  status: 'active' | 'suspended' | 'pending'
  joinDate: string
  lastActive: string
  totalProjects: number
}

interface Project {
  id: string
  title: string
  client: string
  freelancer: string
  status: 'active' | 'completed' | 'cancelled' | 'disputed'
  budget: number
  startDate: string
  progress: number
}

interface SystemAlert {
  id: string
  type: 'error' | 'warning' | 'info'
  message: string
  timestamp: string
  resolved: boolean
}

// Mock data
const mockMetrics: SystemMetrics = {
  totalUsers: 12847,
  activeUsers: 8934,
  totalProjects: 5632,
  activeProjects: 1247,
  totalRevenue: 2847392,
  monthlyRevenue: 234567,
  systemHealth: 98.5,
  serverUptime: '99.9%',
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'freelancer',
    status: 'active',
    joinDate: '2024-01-15',
    lastActive: '2024-06-15',
    totalProjects: 23,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'client',
    status: 'active',
    joinDate: '2024-02-01',
    lastActive: '2024-06-14',
    totalProjects: 8,
  },
]

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Website Development',
    client: 'TechCorp Inc.',
    freelancer: 'John Doe',
    status: 'active',
    budget: 5000,
    startDate: '2024-06-01',
    progress: 65,
  },
]

const mockAlerts: SystemAlert[] = [
  {
    id: '1',
    type: 'warning',
    message: 'High server load detected on payment processing service',
    timestamp: '2024-06-15T10:30:00Z',
    resolved: false,
  },
  {
    id: '2',
    type: 'info',
    message: 'Scheduled maintenance completed successfully',
    timestamp: '2024-06-15T09:00:00Z',
    resolved: true,
  },
]

function SystemOverview({ metrics }: { metrics: SystemMetrics }) {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <People sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {metrics.totalUsers.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Users
            </Typography>
            <Typography variant="caption" color="success.main">
              {metrics.activeUsers.toLocaleString()} active
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Work sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {metrics.totalProjects.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Projects
            </Typography>
            <Typography variant="caption" color="warning.main">
              {metrics.activeProjects.toLocaleString()} active
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <AttachMoney sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              ${(metrics.totalRevenue / 1000000).toFixed(1)}M
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Revenue
            </Typography>
            <Typography variant="caption" color="success.main">
              ${(metrics.monthlyRevenue / 1000).toFixed(0)}K this month
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <TrendingUp sx={{ fontSize: 40, color: 'error.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {metrics.systemHealth}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              System Health
            </Typography>
            <Typography variant="caption" color="success.main">
              {metrics.serverUptime} uptime
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

function RecentUsers({ users }: { users: User[] }) {
  const getStatusColor = (status: User['status']) => {
    switch (status) {
      case 'active': return 'success'
      case 'suspended': return 'error'
      case 'pending': return 'warning'
      default: return 'default'
    }
  }

  const getRoleColor = (role: User['role']) => {
    switch (role) {
      case 'admin': return 'error'
      case 'client': return 'primary'
      case 'freelancer': return 'info'
      default: return 'default'
    }
  }

  return (
    <Card elevation={1}>
      <CardHeader 
        title="Recent Users" 
        action={
          <Button size="small" endIcon={<Visibility />}>
            View All
          </Button>
        }
      />
      <CardContent sx={{ p: 0 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Projects</TableCell>
                <TableCell>Last Active</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {user.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.email}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={user.role}
                      color={getRoleColor(user.role)}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={user.status}
                      color={getStatusColor(user.status)}
                      size="small"
                      variant="filled"
                    />
                  </TableCell>
                  <TableCell>{user.totalProjects}</TableCell>
                  <TableCell>
                    {new Date(user.lastActive).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small">
                      <Edit />
                    </IconButton>
                    <IconButton size="small">
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

function ActiveProjects({ projects }: { projects: Project[] }) {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active': return 'success'
      case 'completed': return 'info'
      case 'cancelled': return 'error'
      case 'disputed': return 'warning'
      default: return 'default'
    }
  }

  return (
    <Card elevation={1}>
      <CardHeader 
        title="Active Projects" 
        action={
          <Button size="small" endIcon={<Visibility />}>
            View All
          </Button>
        }
      />
      <CardContent sx={{ p: 0 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Project</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Freelancer</TableCell>
                <TableCell>Budget</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} hover>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {project.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Started: {new Date(project.startDate).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>{project.freelancer}</TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="bold">
                      ${project.budget.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={project.progress}
                        sx={{ flexGrow: 1, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2">
                        {project.progress}%
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={project.status}
                      color={getStatusColor(project.status)}
                      size="small"
                      variant="filled"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small">
                      <Visibility />
                    </IconButton>
                    <IconButton size="small">
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  )
}

function SystemAlerts({ alerts }: { alerts: SystemAlert[] }) {
  const getAlertIcon = (type: SystemAlert['type']) => {
    switch (type) {
      case 'error': return <Warning color="error" />
      case 'warning': return <Warning color="warning" />
      case 'info': return <CheckCircle color="info" />
      default: return <CheckCircle />
    }
  }

  const getAlertSeverity = (type: SystemAlert['type']) => {
    switch (type) {
      case 'error': return 'error' as const
      case 'warning': return 'warning' as const
      case 'info': return 'info' as const
      default: return 'info' as const
    }
  }

  return (
    <Card elevation={1}>
      <CardHeader title="System Alerts" />
      <CardContent>
        {alerts.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
            <CheckCircle sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
            <Typography variant="body1">
              No active alerts. System running smoothly!
            </Typography>
          </Box>
        ) : (
          <List>
            {alerts.map((alert, index) => (
              <Box key={alert.id}>
                <ListItem>
                  <ListItemIcon>
                    {getAlertIcon(alert.type)}
                  </ListItemIcon>
                  <ListItemText
                    primary={alert.message}
                    secondary={new Date(alert.timestamp).toLocaleString()}
                  />
                  {!alert.resolved && (
                    <Button size="small" variant="outlined">
                      Resolve
                    </Button>
                  )}
                </ListItem>
                {index < alerts.length - 1 && <Divider />}
              </Box>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  )
}

function QuickActions() {
  const actions = [
    { icon: <People />, label: 'Manage Users', color: 'primary' as const },
    { icon: <Work />, label: 'Review Projects', color: 'info' as const },
    { icon: <Security />, label: 'Security Settings', color: 'warning' as const },
    { icon: <Analytics />, label: 'View Analytics', color: 'success' as const },
    { icon: <Settings />, label: 'System Settings', color: 'secondary' as const },
    { icon: <Notifications />, label: 'Send Notifications', color: 'error' as const },
  ]

  return (
    <Card elevation={1}>
      <CardHeader title="Quick Actions" />
      <CardContent>
        <Grid container spacing={2}>
          {actions.map((action, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={action.icon}
                color={action.color}
                sx={{ py: 1.5, justifyContent: 'flex-start' }}
              >
                {action.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default function AdminDashboard() {
  const [metrics] = useState<SystemMetrics>(mockMetrics)
  const [users] = useState<User[]>(mockUsers)
  const [projects] = useState<Project[]>(mockProjects)
  const [alerts] = useState<SystemAlert[]>(mockAlerts)

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.primary">Admin</Typography>
          <Typography color="text.secondary">Dashboard</Typography>
        </Breadcrumbs>
      </Box>

      {/* System Overview */}
      <SystemOverview metrics={metrics} />

      {/* Main Content */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <RecentUsers users={users} />
            </Grid>
            <Grid item xs={12}>
              <ActiveProjects projects={projects} />
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SystemAlerts alerts={alerts} />
            </Grid>
            <Grid item xs={12}>
              <QuickActions />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
