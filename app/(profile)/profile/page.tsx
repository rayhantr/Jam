import { Metadata } from 'next'
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
  Paper,
} from '@mui/material'
import {
  Edit,
  Visibility,
  Star,
  Work,
  School,
  Language,
  LocationOn,
  Email,
  Phone,
  LinkedIn,
  GitHub,
} from '@mui/icons-material'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Your freelancer profile and information',
}

// Types
interface UserProfile {
  name: string
  title: string
  location: string
  email: string
  phone?: string
  avatar?: string
  bio: string
  hourlyRate: number
  availability: string
  completionRate: number
  totalJobs: number
  skills: string[]
  languages: Array<{ name: string; level: string }>
  education: Array<{ degree: string; school: string; year: string }>
  certifications: Array<{ name: string; issuer: string; year: string }>
}

// Mock data
const mockProfile: UserProfile = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  location: 'New York, USA',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  bio: 'Experienced full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies. Passionate about creating scalable web applications and delivering high-quality solutions.',
  hourlyRate: 75,
  availability: '30+ hrs/week',
  completionRate: 98,
  totalJobs: 47,
  skills: ['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'Docker'],
  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Spanish', level: 'Conversational' },
    { name: 'French', level: 'Basic' },
  ],
  education: [
    { degree: 'Bachelor of Computer Science', school: 'MIT', year: '2018' },
    { degree: 'Master of Software Engineering', school: 'Stanford', year: '2020' },
  ],
  certifications: [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon', year: '2023' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2022' },
  ],
}

function ProfileHeader({ profile }: { profile: UserProfile }) {
  return (
    <Card elevation={1} sx={{ mb: 3 }}>
      <CardContent sx={{ p: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              sx={{ width: 120, height: 120, fontSize: '3rem' }}
              src={profile.avatar}
            >
              {profile.name.charAt(0)}
            </Avatar>
          </Grid>
          
          <Grid item xs>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {profile.name}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                {profile.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {profile.location}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Star sx={{ fontSize: 16, color: 'warning.main' }} />
                  <Typography variant="body2" color="text.secondary">
                    {profile.completionRate}% Job Success
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {profile.bio}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href="/profile/freelancer"
                variant="contained"
                startIcon={<Edit />}
              >
                Edit Profile
              </Button>
              <Button
                variant="outlined"
                startIcon={<Visibility />}
              >
                Preview Public Profile
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

function ProfileStats({ profile }: { profile: UserProfile }) {
  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="primary">
              ${profile.hourlyRate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hourly Rate
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="success.main">
              {profile.totalJobs}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Jobs Completed
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="info.main">
              {profile.completionRate}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Success Rate
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" fontWeight="bold" color="warning.main">
              {profile.availability}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Availability
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

function ContactInfo({ profile }: { profile: UserProfile }) {
  return (
    <Card elevation={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Contact Information
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary={profile.email} secondary="Email" />
          </ListItem>
          {profile.phone && (
            <ListItem>
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <ListItemText primary={profile.phone} secondary="Phone" />
            </ListItem>
          )}
          <ListItem>
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
            <ListItemText primary="linkedin.com/in/johndoe" secondary="LinkedIn" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText primary="github.com/johndoe" secondary="GitHub" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

function SkillsSection({ skills }: { skills: string[] }) {
  return (
    <Card elevation={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Skills & Expertise
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              variant="outlined"
              color="primary"
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

function LanguagesSection({ languages }: { languages: Array<{ name: string; level: string }> }) {
  return (
    <Card elevation={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Languages
        </Typography>
        <List>
          {languages.map((lang, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Language />
              </ListItemIcon>
              <ListItemText
                primary={lang.name}
                secondary={lang.level}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

function EducationSection({ education }: { education: Array<{ degree: string; school: string; year: string }> }) {
  return (
    <Card elevation={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Education
        </Typography>
        <List>
          {education.map((edu, index) => (
            <Box key={index}>
              <ListItem>
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText
                  primary={edu.degree}
                  secondary={`${edu.school} • ${edu.year}`}
                />
              </ListItem>
              {index < education.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default function ProfilePage() {
  const profile = mockProfile

  return (
    <Box>
      {/* Profile Header */}
      <ProfileHeader profile={profile} />
      
      {/* Profile Statistics */}
      <ProfileStats profile={profile} />
      
      {/* Profile Details */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <SkillsSection skills={profile.skills} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LanguagesSection languages={profile.languages} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <EducationSection education={profile.education} />
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <ContactInfo profile={profile} />
        </Grid>
      </Grid>
      
      {/* Quick Actions */}
      <Paper elevation={1} sx={{ p: 3, mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Profile Management
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component={Link}
            href="/profile/freelancer"
            variant="outlined"
            startIcon={<Edit />}
          >
            Edit Details
          </Button>
          <Button
            component={Link}
            href="/profile/proposals"
            variant="outlined"
            startIcon={<Work />}
          >
            My Proposals
          </Button>
          <Button
            component={Link}
            href="/profile/settings"
            variant="outlined"
            startIcon={<Edit />}
          >
            Settings
          </Button>
        </Box>
      </Paper>
    </Box>
  )
}

