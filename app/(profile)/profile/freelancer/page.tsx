'use client'

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
  Tabs,
  Tab,
  TextField,
  Avatar,
  Chip,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Rating,
} from '@mui/material'
import {
  Edit,
  Add,
  Delete,
  Upload,
  Visibility,
  VisibilityOff,
  Save,
  Cancel,
  Work,
  School,
  Language,
  Star,
  VideoLibrary,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Freelancer Profile Editor',
  description: 'Edit your freelancer profile, portfolio, and professional information',
}

// Types
interface Portfolio {
  id: string
  title: string
  description: string
  image?: string
  url?: string
  skills: string[]
}

interface WorkHistory {
  id: string
  title: string
  client: string
  description: string
  duration: string
  status: 'completed' | 'in-progress'
  rating?: number
}

interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  url?: string
}

// Mock data
const mockPortfolio: Portfolio[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with React and Node.js',
    skills: ['React', 'Node.js', 'MongoDB'],
  },
]

const mockWorkHistory: WorkHistory[] = [
  {
    id: '1',
    title: 'Website Redesign',
    client: 'Tech Startup Inc.',
    description: 'Complete redesign of company website with modern UI/UX',
    duration: '3 months',
    status: 'completed',
    rating: 5,
  },
]

function TabPanel({ children, value, index }: { children: React.ReactNode, value: number, index: number }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  )
}

function BasicInfoTab() {
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    title: 'Full Stack Developer',
    bio: 'Experienced developer with 5+ years in web development',
    hourlyRate: 75,
    availability: '30+ hrs/week',
  })

  const handleSave = () => {
    setEditing(false)
    console.log('Saving basic info:', formData)
  }

  return (
    <Card elevation={1}>
      <CardHeader
        title="Basic Information"
        action={
          <Button
            startIcon={editing ? <Save /> : <Edit />}
            onClick={editing ? handleSave : () => setEditing(true)}
            variant={editing ? 'contained' : 'outlined'}
          >
            {editing ? 'Save' : 'Edit'}
          </Button>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Professional Title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Hourly Rate ($)"
              type="number"
              value={formData.hourlyRate}
              onChange={(e) => setFormData(prev => ({ ...prev, hourlyRate: Number(e.target.value) }))}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label="Availability"
              value={formData.availability}
              onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Professional Bio"
              multiline
              rows={4}
              value={formData.bio}
              onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
              disabled={!editing}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

function PortfolioTab() {
  const [portfolio, setPortfolio] = useState<Portfolio[]>(mockPortfolio)
  const [editing, setEditing] = useState<string | null>(null)

  const handleAddPortfolio = () => {
    const newItem: Portfolio = {
      id: Date.now().toString(),
      title: '',
      description: '',
      skills: [],
    }
    setPortfolio(prev => [...prev, newItem])
    setEditing(newItem.id)
  }

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6">Portfolio</Typography>
        <Button startIcon={<Add />} variant="contained" onClick={handleAddPortfolio}>
          Add Project
        </Button>
      </Box>

      <Grid container spacing={3}>
        {portfolio.length === 0 ? (
          <Grid item xs={12}>
            <Paper sx={{ p: 4, textAlign: 'center', color: 'text.secondary' }}>
              <Work sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
              <Typography variant="h6" gutterBottom>
                No portfolio items yet
              </Typography>
              <Typography variant="body2">
                Add your first project to showcase your work
              </Typography>
            </Paper>
          </Grid>
        ) : (
          portfolio.map((item) => (
            <Grid item xs={12} md={6} key={item.id}>
              <Card elevation={1}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      {item.title || 'Untitled Project'}
                    </Typography>
                    <Box>
                      <IconButton size="small" onClick={() => setEditing(item.id)}>
                        <Edit />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <Delete />
                      </IconButton>
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.skills.map((skill) => (
                      <Chip key={skill} label={skill} size="small" variant="outlined" />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  )
}

function WorkHistoryTab() {
  const [workHistory] = useState<WorkHistory[]>(mockWorkHistory)

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Work History
      </Typography>
      
      <Grid container spacing={3}>
        {workHistory.length === 0 ? (
          <Grid item xs={12}>
            <Paper sx={{ p: 4, textAlign: 'center', color: 'text.secondary' }}>
              <Work sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
              <Typography variant="h6" gutterBottom>
                No work history yet
              </Typography>
              <Typography variant="body2">
                Complete your first project to build your work history
              </Typography>
            </Paper>
          </Grid>
        ) : (
          workHistory.map((work) => (
            <Grid item xs={12} key={work.id}>
              <Card elevation={1}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {work.title}
                      </Typography>
                      <Typography variant="subtitle2" color="primary">
                        {work.client}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Chip
                        label={work.status}
                        color={work.status === 'completed' ? 'success' : 'warning'}
                        size="small"
                      />
                      {work.rating && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                          <Rating value={work.rating} size="small" readOnly />
                          <Typography variant="body2" sx={{ ml: 1 }}>
                            {work.rating}/5
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {work.description}
                  </Typography>
                  
                  <Typography variant="caption" color="text.secondary">
                    Duration: {work.duration}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  )
}

function SkillsTab() {
  const [skills, setSkills] = useState(['React', 'Node.js', 'TypeScript', 'Python'])
  const [newSkill, setNewSkill] = useState('')

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills(prev => [...prev, newSkill.trim()])
      setNewSkill('')
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(prev => prev.filter(skill => skill !== skillToRemove))
  }

  return (
    <Card elevation={1}>
      <CardHeader title="Skills & Expertise" />
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              label="Add Skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
            />
            <Button variant="contained" onClick={handleAddSkill} startIcon={<Add />}>
              Add
            </Button>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              onDelete={() => handleRemoveSkill(skill)}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default function FreelancerProfilePage() {
  const [tabValue, setTabValue] = useState(0)
  const [publicView, setPublicView] = useState(false)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Freelancer Profile Editor
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography color="text.primary">Profile</Typography>
            </Link>
            <Typography color="text.secondary">Freelancer</Typography>
          </Breadcrumbs>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            href="/profile/settings"
            variant="outlined"
            startIcon={<Edit />}
          >
            Settings
          </Button>
          <Button
            variant="contained"
            startIcon={publicView ? <VisibilityOff /> : <Visibility />}
            onClick={() => setPublicView(!publicView)}
          >
            {publicView ? 'Close' : 'Preview'} Public View
          </Button>
        </Box>
      </Box>

      {/* Profile Editor Tabs */}
      <Card elevation={1}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Basic Info" />
            <Tab label="Portfolio" />
            <Tab label="Work History" />
            <Tab label="Skills" />
          </Tabs>
        </Box>
        
        <TabPanel value={tabValue} index={0}>
          <BasicInfoTab />
        </TabPanel>
        
        <TabPanel value={tabValue} index={1}>
          <PortfolioTab />
        </TabPanel>
        
        <TabPanel value={tabValue} index={2}>
          <WorkHistoryTab />
        </TabPanel>
        
        <TabPanel value={tabValue} index={3}>
          <SkillsTab />
        </TabPanel>
      </Card>
    </Box>
  )
}
