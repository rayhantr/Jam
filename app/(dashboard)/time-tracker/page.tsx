import { Metadata } from 'next'
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Breadcrumbs,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
} from '@mui/material'
import {
  PlayArrow,
  Stop,
  Pause,
  Schedule,
  Assignment,
  Folder,
  MoreVert,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export const metadata: Metadata = {
  title: 'Time Tracker',
  description: 'Track time spent on projects and tasks',
}

// Types
interface TimeEntry {
  id: string
  project: string
  task: string
  duration: string
  date: string
  status: 'completed' | 'in-progress'
}

interface Project {
  id: string
  name: string
}

interface Task {
  id: string
  name: string
  projectId: string
}

// Mock data
const mockProjects: Project[] = [
  { id: '1', name: 'E-commerce Website' },
  { id: '2', name: 'Mobile App Design' },
]

const mockTasks: Task[] = [
  { id: '1', name: 'Homepage Design', projectId: '1' },
  { id: '2', name: 'Product Catalog', projectId: '1' },
  { id: '3', name: 'UI Mockups', projectId: '2' },
]

const mockTimeEntries: TimeEntry[] = [
  {
    id: '1',
    project: 'E-commerce Website',
    task: 'Homepage Design',
    duration: '02:30:15',
    date: '2024-06-14',
    status: 'completed',
  },
  {
    id: '2',
    project: 'Mobile App Design',
    task: 'UI Mockups',
    duration: '01:45:30',
    date: '2024-06-13',
    status: 'completed',
  },
]

function TimeTracker() {
  const [selectedProject, setSelectedProject] = useState('')
  const [selectedTask, setSelectedTask] = useState('')
  const [isTracking, setIsTracking] = useState(false)
  const [currentTime, setCurrentTime] = useState('00:00:00')
  const [startTime, setStartTime] = useState<Date | null>(null)

  const availableTasks = mockTasks.filter(task => 
    selectedProject ? task.projectId === selectedProject : true
  )

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    
    if (isTracking && startTime) {
      interval = setInterval(() => {
        const now = new Date()
        const diff = now.getTime() - startTime.getTime()
        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        
        setCurrentTime(
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        )
      }, 1000)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isTracking, startTime])

  const handleStart = () => {
    if (!selectedProject || !selectedTask) {
      alert('Please select a project and task first')
      return
    }
    setIsTracking(true)
    setStartTime(new Date())
  }

  const handleStop = () => {
    setIsTracking(false)
    setStartTime(null)
    // Here you would typically save the time entry
    console.log('Time entry saved:', {
      project: selectedProject,
      task: selectedTask,
      duration: currentTime,
    })
    setCurrentTime('00:00:00')
  }

  return (
    <Card elevation={1}>
      <CardHeader 
        title="Time Tracker" 
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <Grid container spacing={3} alignItems="end">
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Project</InputLabel>
              <Select
                value={selectedProject}
                label="Project"
                onChange={(e) => {
                  setSelectedProject(e.target.value)
                  setSelectedTask('') // Reset task when project changes
                }}
              >
                <MenuItem value="">
                  <em>Select Project</em>
                </MenuItem>
                {mockProjects.map((project) => (
                  <MenuItem key={project.id} value={project.id}>
                    {project.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Task</InputLabel>
              <Select
                value={selectedTask}
                label="Task"
                onChange={(e) => setSelectedTask(e.target.value)}
                disabled={!selectedProject}
              >
                <MenuItem value="">
                  <em>Select Task</em>
                </MenuItem>
                {availableTasks.map((task) => (
                  <MenuItem key={task.id} value={task.id}>
                    {task.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                textAlign: 'center',
                backgroundColor: isTracking ? 'success.50' : 'primary.50',
                border: 1,
                borderColor: isTracking ? 'success.main' : 'primary.main',
              }}
            >
              <Typography variant="h6" fontWeight="bold" color={isTracking ? 'success.main' : 'primary.main'}>
                {currentTime}
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={2}>
            {!isTracking ? (
              <Button
                variant="contained"
                color="success"
                startIcon={<PlayArrow />}
                onClick={handleStart}
                fullWidth
                size="large"
              >
                Start
              </Button>
            ) : (
              <Button
                variant="contained"
                color="error"
                startIcon={<Stop />}
                onClick={handleStop}
                fullWidth
                size="large"
              >
                Stop
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

function WeekReportsTable({ entries }: { entries: TimeEntry[] }) {
  const getStatusColor = (status: TimeEntry['status']) => {
    switch (status) {
      case 'completed': return 'success'
      case 'in-progress': return 'warning'
      default: return 'default'
    }
  }

  const totalDuration = entries.reduce((total, entry) => {
    const [hours, minutes, seconds] = entry.duration.split(':').map(Number)
    return total + hours * 3600 + minutes * 60 + seconds
  }, 0)

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <Box>
      {/* Summary */}
      <Box sx={{ mb: 3, p: 2, backgroundColor: 'grey.50', borderRadius: 1 }}>
        <Typography variant="h6" gutterBottom>
          This Week Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2" color="text.secondary">
              Total Time
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              {formatDuration(totalDuration)}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2" color="text.secondary">
              Entries
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              {entries.length}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2" color="text.secondary">
              Avg/Day
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              {formatDuration(Math.floor(totalDuration / 7))}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2" color="text.secondary">
              Projects
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              {new Set(entries.map(e => e.project)).size}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Time Entries Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                  <Box sx={{ color: 'text.secondary' }}>
                    <Schedule sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
                    <Typography variant="body1">
                      No time entries this week. Start tracking your time!
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              entries.map((entry) => (
                <TableRow key={entry.id} hover>
                  <TableCell>
                    {new Date(entry.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Folder sx={{ fontSize: 16, color: 'primary.main' }} />
                      {entry.project}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Assignment sx={{ fontSize: 16, color: 'secondary.main' }} />
                      {entry.task}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight="bold">
                      {entry.duration}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={entry.status}
                      color={getStatusColor(entry.status)}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small">
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default function TimeTrackerPage() {
  const [timeEntries] = useState<TimeEntry[]>(mockTimeEntries)

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Time Tracker
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography color="text.primary">User</Typography>
          </Link>
          <Typography color="text.secondary">TimeTracker</Typography>
        </Breadcrumbs>
      </Box>

      {/* Time Tracker */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TimeTracker />
        </Grid>
        
        <Grid item xs={12}>
          <Card elevation={1}>
            <CardHeader 
              title="This Week Reports" 
              titleTypographyProps={{ variant: 'h6' }}
            />
            <CardContent sx={{ p: 0 }}>
              <WeekReportsTable entries={timeEntries} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

