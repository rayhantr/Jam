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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  Chip,
  Fab,
} from '@mui/material'
import {
  Add,
  Assignment,
  Schedule,
  MoreVert,
  CheckCircle,
  RadioButtonUnchecked,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'Manage your tasks and track your progress',
}

// Types
interface Task {
  id: string
  title: string
  description: string
  completed: boolean
  priority: 'high' | 'medium' | 'low'
  dueDate: string
  project?: string
}

// Mock data
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design homepage mockup',
    description: 'Create wireframes and high-fidelity mockups for the homepage',
    completed: false,
    priority: 'high',
    dueDate: '2024-06-20',
    project: 'E-commerce Website',
  },
  {
    id: '2',
    title: 'Set up project repository',
    description: 'Initialize Git repository and set up project structure',
    completed: true,
    priority: 'medium',
    dueDate: '2024-06-15',
    project: 'E-commerce Website',
  },
]

function TaskList({ tasks }: { tasks: Task[] }) {
  const [taskList, setTaskList] = useState(tasks)

  const toggleTask = (taskId: string) => {
    setTaskList(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'error'
      case 'medium': return 'warning'
      case 'low': return 'success'
      default: return 'default'
    }
  }

  const completedTasks = taskList.filter(task => task.completed)
  const pendingTasks = taskList.filter(task => !task.completed)

  return (
    <Box>
      {/* Pending Tasks */}
      <Card elevation={1} sx={{ mb: 3 }}>
        <CardHeader 
          title={`Pending Tasks (${pendingTasks.length})`}
          titleTypographyProps={{ variant: 'h6' }}
        />
        <CardContent sx={{ pt: 0 }}>
          {pendingTasks.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
              <CheckCircle sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
              <Typography variant="body1">
                No pending tasks! Great job!
              </Typography>
            </Box>
          ) : (
            <List>
              {pendingTasks.map((task) => (
                <ListItem key={task.id} divider>
                  <ListItemIcon>
                    <Checkbox
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={task.title}
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {task.description}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 1, alignItems: 'center' }}>
                          <Chip
                            label={task.priority}
                            color={getPriorityColor(task.priority)}
                            size="small"
                            variant="outlined"
                          />
                          {task.project && (
                            <Chip
                              label={task.project}
                              size="small"
                              variant="filled"
                              color="primary"
                            />
                          )}
                          <Typography variant="caption" color="text.secondary">
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                          </Typography>
                        </Box>
                      </Box>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton size="small">
                      <MoreVert />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>

      {/* Completed Tasks */}
      <Card elevation={1}>
        <CardHeader 
          title={`Completed Tasks (${completedTasks.length})`}
          titleTypographyProps={{ variant: 'h6' }}
        />
        <CardContent sx={{ pt: 0 }}>
          {completedTasks.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
              <Assignment sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
              <Typography variant="body1">
                No completed tasks yet
              </Typography>
            </Box>
          ) : (
            <List>
              {completedTasks.map((task) => (
                <ListItem key={task.id} divider>
                  <ListItemIcon>
                    <Checkbox
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<CheckCircle />}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography 
                        variant="body1" 
                        sx={{ textDecoration: 'line-through', opacity: 0.7 }}
                      >
                        {task.title}
                      </Typography>
                    }
                    secondary={
                      <Box>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ opacity: 0.7 }}
                        >
                          {task.description}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 1, alignItems: 'center' }}>
                          {task.project && (
                            <Chip
                              label={task.project}
                              size="small"
                              variant="outlined"
                              color="primary"
                            />
                          )}
                          <Typography variant="caption" color="text.secondary">
                            Completed
                          </Typography>
                        </Box>
                      </Box>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton size="small">
                      <MoreVert />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default function TasksPage() {
  const [tasks] = useState<Task[]>(mockTasks)

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const pendingTasks = totalTasks - completedTasks

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Tasks
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography color="text.primary">User</Typography>
            </Link>
            <Typography color="text.secondary">Tasks</Typography>
          </Breadcrumbs>
        </Box>
        
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
        >
          New Task
        </Button>
      </Box>

      {/* Task Statistics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card elevation={1}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Assignment sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h4" fontWeight="bold">
                {totalTasks}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Tasks
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Card elevation={1}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Schedule sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
              <Typography variant="h4" fontWeight="bold">
                {pendingTasks}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pending Tasks
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Card elevation={1}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CheckCircle sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
              <Typography variant="h4" fontWeight="bold">
                {completedTasks}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Completed Tasks
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Task List */}
      <TaskList tasks={tasks} />

      {/* Floating Action Button for Mobile */}
      <Fab
        color="primary"
        aria-label="add task"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: { xs: 'flex', sm: 'none' },
        }}
      >
        <Add />
      </Fab>
    </Box>
  )
}

