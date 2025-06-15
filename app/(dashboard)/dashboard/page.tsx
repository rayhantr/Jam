import { Metadata } from 'next'
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  LinearProgress,
  Chip,
  Breadcrumbs,
  Divider,
  Avatar,
} from '@mui/material'
import {
  Assignment,
  Schedule,
  AttachMoney,
  Folder,
  Storage,
  TrendingUp,
} from '@mui/icons-material'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Overview of your tasks, projects, and performance metrics',
}

// Types
interface StatisticItem {
  title: string
  value: string | number | React.ReactNode
  icon: React.ReactNode
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
}

// Components
function LinearProgressWithLabel({ value, max = 1000 }: { value: number; max?: number }) {
  const normalize = (value: number) => ((value - 0) * 100) / (max - 0)

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {`${value}/${max} MB`}
      </Typography>
      <LinearProgress 
        variant="determinate" 
        value={normalize(value)} 
        sx={{ height: 8, borderRadius: 4 }}
      />
    </Box>
  )
}

function StatisticCard({ title, value, icon, color }: StatisticItem) {
  return (
    <Card elevation={1} sx={{ height: '100%' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
        <Avatar
          sx={{
            bgcolor: `${color}.main`,
            width: 56,
            height: 56,
            mr: 2,
          }}
        >
          {icon}
        </Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" component="div" fontWeight="bold">
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

function PlanInfoCard() {
  return (
    <Card elevation={1} sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            User Plan Type
          </Typography>
          <Typography variant="h4" color="text.secondary" fontWeight="bold">
            Free
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Valid till: <strong>Unlimited</strong>
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1">User Limit</Typography>
          <Chip label="0/0" color="primary" variant="outlined" size="small" />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1">Project Limit</Typography>
          <Chip label="0/0" color="primary" variant="outlined" size="small" />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1">Group Limit</Typography>
          <Chip label="0/0" color="primary" variant="outlined" size="small" />
        </Box>
      </CardContent>
    </Card>
  )
}

function RunningProjectsCard() {
  return (
    <Card elevation={1}>
      <CardHeader 
        title="Running Projects" 
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 200,
            color: 'text.secondary',
          }}
        >
          <Typography variant="body1">
            No running projects at the moment
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

function WorkloadChart() {
  return (
    <Card elevation={1} sx={{ height: '100%' }}>
      <CardHeader 
        title="Last 7 days workload" 
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 200,
            backgroundColor: 'grey.50',
            borderRadius: 1,
            color: 'text.secondary',
          }}
        >
          <Typography variant="body1">
            Chart will be implemented here
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  const statistics: StatisticItem[] = [
    {
      title: 'Total Tasks',
      value: 0,
      icon: <Assignment />,
      color: 'info',
    },
    {
      title: 'Pending Tasks',
      value: 0,
      icon: <Assignment />,
      color: 'warning',
    },
    {
      title: 'Completed Tasks',
      value: 0,
      icon: <Assignment />,
      color: 'success',
    },
    {
      title: 'Total Hours',
      value: '00:00:00',
      icon: <Schedule />,
      color: 'info',
    },
    {
      title: 'Total Earn',
      value: '$0',
      icon: <AttachMoney />,
      color: 'info',
    },
    {
      title: 'Running Projects',
      value: 0,
      icon: <Folder />,
      color: 'primary',
    },
    {
      title: 'Completed Projects',
      value: 0,
      icon: <Folder />,
      color: 'success',
    },
    {
      title: 'Storage Used',
      value: <LinearProgressWithLabel value={900} />,
      icon: <Storage />,
      color: 'warning',
    },
  ]

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography color="text.primary">User</Typography>
          </Link>
          <Typography color="text.secondary">Dashboard</Typography>
        </Breadcrumbs>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statistics.map((stat) => (
          <Grid item xs={12} sm={6} lg={3} key={stat.title}>
            <StatisticCard {...stat} />
          </Grid>
        ))}
      </Grid>

      {/* Charts and Plan Info */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} lg={8}>
          <WorkloadChart />
        </Grid>
        <Grid item xs={12} lg={4}>
          <PlanInfoCard />
        </Grid>
      </Grid>

      {/* Running Projects */}
      <Grid container>
        <Grid item xs={12}>
          <RunningProjectsCard />
        </Grid>
      </Grid>
    </Box>
  )
}

