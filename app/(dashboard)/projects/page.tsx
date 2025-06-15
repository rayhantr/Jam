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
  Fab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material'
import {
  Add,
  MoreVert,
  Edit,
  Delete,
  Visibility,
  FolderOpen,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'
import { FormModal } from '@/app/components/forms/FormModal'
import { InputField } from '@/app/components/forms/InputField'
import { SelectField } from '@/app/components/forms/SelectField'
import { CheckboxField } from '@/app/components/forms/CheckboxField'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Manage your freelance projects and collaborations',
}

// Types
interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'completed' | 'paused' | 'cancelled'
  timeline: string
  visibility: 'public' | 'private' | 'team'
  createdAt: string
}

// Mock data
const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Website',
    description: 'Modern React-based e-commerce platform',
    status: 'active',
    timeline: '3 months',
    visibility: 'private',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Mobile App Design',
    description: 'UI/UX design for fitness tracking app',
    status: 'completed',
    timeline: '6 weeks',
    visibility: 'public',
    createdAt: '2024-02-01',
  },
]

function ProjectsTable({ projects }: { projects: Project[] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, projectId: string) => {
    setAnchorEl(event.currentTarget)
    setSelectedProject(projectId)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setSelectedProject(null)
  }

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active': return 'success'
      case 'completed': return 'primary'
      case 'paused': return 'warning'
      case 'cancelled': return 'error'
      default: return 'default'
    }
  }

  const getVisibilityColor = (visibility: Project['visibility']) => {
    switch (visibility) {
      case 'public': return 'success'
      case 'private': return 'error'
      case 'team': return 'warning'
      default: return 'default'
    }
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Timeline</TableCell>
              <TableCell>Visibility</TableCell>
              <TableCell>Created</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                  <Box sx={{ color: 'text.secondary' }}>
                    <FolderOpen sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
                    <Typography variant="body1">
                      No projects found. Create your first project to get started!
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              projects.map((project) => (
                <TableRow key={project.id} hover>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {project.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={project.status}
                      color={getStatusColor(project.status)}
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{project.timeline}</TableCell>
                  <TableCell>
                    <Chip
                      label={project.visibility}
                      color={getVisibilityColor(project.visibility)}
                      size="small"
                      variant="filled"
                    />
                  </TableCell>
                  <TableCell>
                    {new Date(project.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={(e) => handleMenuClick(e, project.id)}
                      size="small"
                    >
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Visibility sx={{ mr: 1 }} fontSize="small" />
          View
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Edit sx={{ mr: 1 }} fontSize="small" />
          Edit
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          <Delete sx={{ mr: 1 }} fontSize="small" />
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

export default function ProjectsPage() {
  const [projects] = useState<Project[]>(mockProjects)
  const [addModalOpen, setAddModalOpen] = useState(false)

  const visibilityOptions = [
    { value: 'public', label: 'Public - Anyone can see' },
    { value: 'private', label: 'Private - Only me' },
    { value: 'team', label: 'Team - Team members only' },
  ]

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'paused', label: 'Paused' },
    { value: 'completed', label: 'Completed' },
  ]

  const handleAddProject = (values: any) => {
    console.log('Adding project:', values)
    setAddModalOpen(false)
    // Here you would typically call an API to create the project
  }

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Projects
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography color="text.primary">User</Typography>
            </Link>
            <Typography color="text.secondary">Projects</Typography>
          </Breadcrumbs>
        </Box>
        
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setAddModalOpen(true)}
          size="large"
        >
          New Project
        </Button>
      </Box>

      {/* Projects Table */}
      <Grid container>
        <Grid item xs={12}>
          <Card elevation={1}>
            <CardHeader 
              title="All Projects" 
              titleTypographyProps={{ variant: 'h6' }}
            />
            <CardContent sx={{ p: 0 }}>
              <ProjectsTable projects={projects} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add Project Modal */}
      <FormModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        title="Create New Project"
        onSubmit={handleAddProject}
        initialValues={{
          projectName: '',
          description: '',
          timeline: '',
          visibility: 'private',
          status: 'active',
          features: [],
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputField
              name="projectName"
              label="Project Name"
              placeholder="Enter project name"
              required
            />
          </Grid>
          
          <Grid item xs={12}>
            <InputField
              name="description"
              label="Project Description"
              placeholder="Describe your project"
              multiline
              rows={3}
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <InputField
              name="timeline"
              label="Timeline"
              placeholder="e.g., 3 months, 6 weeks"
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <SelectField
              name="visibility"
              label="Project Visibility"
              options={visibilityOptions}
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <SelectField
              name="status"
              label="Initial Status"
              options={statusOptions}
              required
            />
          </Grid>
          
          <Grid item xs={12}>
            <CheckboxField
              name="features"
              label="Project Features"
              options={[
                { value: 'gps', label: 'GPS Tracking' },
                { value: 'screenshots', label: 'Screenshot Capture' },
                { value: 'multiAdmin', label: 'Multi Admin Access' },
                { value: 'mailActivity', label: 'Mail Activity' },
              ]}
              layout="horizontal"
            />
          </Grid>
        </Grid>
      </FormModal>

      {/* Floating Action Button for Mobile */}
      <Fab
        color="primary"
        aria-label="add project"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: { xs: 'flex', sm: 'none' },
        }}
        onClick={() => setAddModalOpen(true)}
      >
        <Add />
      </Fab>
    </Box>
  )
}

