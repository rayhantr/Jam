import { Metadata } from 'next'
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Breadcrumbs,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'
import {
  BarChart,
  TrendingUp,
  Assessment,
  Schedule,
  AttachMoney,
  Assignment,
} from '@mui/icons-material'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reports',
  description: 'View your performance reports and analytics',
}

function ReportCard({ 
  title, 
  icon, 
  description 
}: { 
  title: string
  icon: React.ReactNode
  description: string 
}) {
  return (
    <Card elevation={1} sx={{ height: '100%', cursor: 'pointer', '&:hover': { elevation: 3 } }}>
      <CardContent sx={{ textAlign: 'center', p: 3 }}>
        <Box sx={{ mb: 2 }}>
          {icon}
        </Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

function QuickStats() {
  const stats = [
    { label: 'This Week', value: '32 hours', change: '+12%' },
    { label: 'This Month', value: '$2,450', change: '+8%' },
    { label: 'Tasks Completed', value: '24', change: '+15%' },
    { label: 'Projects Active', value: '3', change: '0%' },
  ]

  return (
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Quick Stats
      </Typography>
      <List>
        {stats.map((stat, index) => (
          <Box key={stat.label}>
            <ListItem sx={{ px: 0 }}>
              <ListItemText
                primary={stat.label}
                secondary={stat.value}
              />
              <Typography 
                variant="body2" 
                color={stat.change.startsWith('+') ? 'success.main' : 'text.secondary'}
                fontWeight="bold"
              >
                {stat.change}
              </Typography>
            </ListItem>
            {index < stats.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Paper>
  )
}

export default function ReportsPage() {
  const reportTypes = [
    {
      title: 'Time Tracking Report',
      icon: <Schedule sx={{ fontSize: 48, color: 'primary.main' }} />,
      description: 'Detailed breakdown of time spent on projects and tasks',
    },
    {
      title: 'Earnings Report',
      icon: <AttachMoney sx={{ fontSize: 48, color: 'success.main' }} />,
      description: 'Track your earnings, payments, and financial performance',
    },
    {
      title: 'Project Performance',
      icon: <BarChart sx={{ fontSize: 48, color: 'info.main' }} />,
      description: 'Analyze project completion rates and efficiency metrics',
    },
    {
      title: 'Task Analytics',
      icon: <Assignment sx={{ fontSize: 48, color: 'warning.main' }} />,
      description: 'Monitor task completion patterns and productivity trends',
    },
    {
      title: 'Client Reports',
      icon: <Assessment sx={{ fontSize: 48, color: 'secondary.main' }} />,
      description: 'Generate professional reports for your clients',
    },
    {
      title: 'Performance Trends',
      icon: <TrendingUp sx={{ fontSize: 48, color: 'error.main' }} />,
      description: 'Long-term performance analysis and growth tracking',
    },
  ]

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reports & Analytics
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography color="text.primary">User</Typography>
          </Link>
          <Typography color="text.secondary">Reports</Typography>
        </Breadcrumbs>
      </Box>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Card elevation={1}>
            <CardHeader 
              title="Performance Overview" 
              titleTypographyProps={{ variant: 'h6' }}
            />
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 300,
                  backgroundColor: 'grey.50',
                  borderRadius: 1,
                  color: 'text.secondary',
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <BarChart sx={{ fontSize: 64, mb: 2, opacity: 0.5 }} />
                  <Typography variant="h6" gutterBottom>
                    Charts Coming Soon
                  </Typography>
                  <Typography variant="body2">
                    Interactive charts and graphs will be available here
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <QuickStats />
        </Grid>
      </Grid>

      {/* Report Types */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Available Reports
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Choose from various report types to analyze your performance
        </Typography>
        
        <Grid container spacing={3}>
          {reportTypes.map((report) => (
            <Grid item xs={12} sm={6} lg={4} key={report.title}>
              <ReportCard {...report} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Recent Activity */}
      <Card elevation={1}>
        <CardHeader 
          title="Recent Report Activity" 
          titleTypographyProps={{ variant: 'h6' }}
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 150,
              color: 'text.secondary',
            }}
          >
            <Typography variant="body1">
              No recent report activity
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

