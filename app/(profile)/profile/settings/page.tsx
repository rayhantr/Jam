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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  TextField,
  Divider,
  Avatar,
  IconButton,
  Chip,
  Alert,
} from '@mui/material'
import {
  Person,
  Security,
  Notifications,
  Payment,
  Language,
  Visibility,
  Edit,
  Save,
  Cancel,
  Upload,
  Delete,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Profile Settings',
  description: 'Manage your account settings and preferences',
}

// Types
interface NotificationSettings {
  emailNotifications: boolean
  pushNotifications: boolean
  projectUpdates: boolean
  messageAlerts: boolean
  marketingEmails: boolean
}

interface ProfileSettings {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  timezone: string
  language: string
}

function ProfileSection() {
  const [editing, setEditing] = useState(false)
  const [profileData, setProfileData] = useState<ProfileSettings>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    timezone: 'EST (UTC-5)',
    language: 'English',
  })

  const handleSave = () => {
    setEditing(false)
    console.log('Saving profile:', profileData)
  }

  const handleChange = (field: keyof ProfileSettings, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card elevation={1}>
      <CardHeader
        title="Profile Information"
        action={
          <Box sx={{ display: 'flex', gap: 1 }}>
            {editing && (
              <Button
                startIcon={<Cancel />}
                onClick={() => setEditing(false)}
                variant="outlined"
              >
                Cancel
              </Button>
            )}
            <Button
              startIcon={editing ? <Save /> : <Edit />}
              onClick={editing ? handleSave : () => setEditing(true)}
              variant={editing ? 'contained' : 'outlined'}
            >
              {editing ? 'Save' : 'Edit'}
            </Button>
          </Box>
        }
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Avatar sx={{ width: 80, height: 80, fontSize: '2rem' }}>
              {profileData.firstName.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="h6">
                {profileData.firstName} {profileData.lastName}
              </Typography>
              <Button startIcon={<Upload />} size="small" disabled={!editing}>
                Change Photo
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              value={profileData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              disabled={!editing}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={profileData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              disabled={!editing}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={profileData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              disabled={!editing}
              InputProps={{
                startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              value={profileData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              disabled={!editing}
              InputProps={{
                startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Location"
              value={profileData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              disabled={!editing}
              InputProps={{
                startAdornment: <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Timezone"
              value={profileData.timezone}
              onChange={(e) => handleChange('timezone', e.target.value)}
              disabled={!editing}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

function NotificationSection() {
  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: true,
    projectUpdates: true,
    messageAlerts: true,
    marketingEmails: false,
  })

  const handleNotificationChange = (setting: keyof NotificationSettings) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting],
    }))
  }

  return (
    <Card elevation={1}>
      <CardHeader title="Notification Preferences" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText
              primary="Email Notifications"
              secondary="Receive notifications via email"
            />
            <ListItemSecondaryAction>
              <Switch
                checked={notifications.emailNotifications}
                onChange={() => handleNotificationChange('emailNotifications')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText
              primary="Push Notifications"
              secondary="Receive push notifications in browser"
            />
            <ListItemSecondaryAction>
              <Switch
                checked={notifications.pushNotifications}
                onChange={() => handleNotificationChange('pushNotifications')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText
              primary="Project Updates"
              secondary="Get notified about project status changes"
            />
            <ListItemSecondaryAction>
              <Switch
                checked={notifications.projectUpdates}
                onChange={() => handleNotificationChange('projectUpdates')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText
              primary="Message Alerts"
              secondary="Notifications for new messages"
            />
            <ListItemSecondaryAction>
              <Switch
                checked={notifications.messageAlerts}
                onChange={() => handleNotificationChange('messageAlerts')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText
              primary="Marketing Emails"
              secondary="Receive promotional and marketing emails"
            />
            <ListItemSecondaryAction>
              <Switch
                checked={notifications.marketingEmails}
                onChange={() => handleNotificationChange('marketingEmails')}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

function SecuritySection() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handlePasswordChange = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log('Changing password')
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
  }

  return (
    <Card elevation={1}>
      <CardHeader title="Security Settings" />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Change Password
            </Typography>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Current Password"
              type="password"
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="New Password"
              type="password"
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
              helperText="Must be at least 8 characters"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Confirm New Password"
              type="password"
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handlePasswordChange}
              disabled={!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}
            >
              Update Password
            </Button>
          </Grid>
          
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Two-Factor Authentication
            </Typography>
            <Alert severity="info" sx={{ mb: 2 }}>
              Two-factor authentication is not currently enabled for your account.
            </Alert>
            <Button variant="outlined" startIcon={<Security />}>
              Enable 2FA
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

function PrivacySection() {
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    allowMessages: true,
  })

  return (
    <Card elevation={1}>
      <CardHeader title="Privacy Settings" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <Visibility />
            </ListItemIcon>
            <ListItemText
              primary="Profile Visibility"
              secondary="Control who can see your profile"
            />
            <ListItemSecondaryAction>
              <Chip
                label={privacySettings.profileVisibility}
                color="primary"
                variant="outlined"
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText
              primary="Show Email"
              secondary="Display email address on public profile"
            />
            <ListItemSecondaryAction>
              <Switch
                checked={privacySettings.showEmail}
                onChange={() => setPrivacySettings(prev => ({ ...prev, showEmail: !prev.showEmail }))}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText
              primary="Show Phone"
              secondary="Display phone number on public profile"
            />
            <ListItemSecondaryAction>
              <Switch
                checked={privacySettings.showPhone}
                onChange={() => setPrivacySettings(prev => ({ ...prev, showPhone: !prev.showPhone }))}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <ListItem>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText
              primary="Allow Messages"
              secondary="Allow other users to send you messages"
            />
            <ListItemSecondaryAction>
              <Switch
                checked={privacySettings.allowMessages}
                onChange={() => setPrivacySettings(prev => ({ ...prev, allowMessages: !prev.allowMessages }))}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default function SettingsPage() {
  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile Settings
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography color="text.primary">Profile</Typography>
          </Link>
          <Typography color="text.secondary">Settings</Typography>
        </Breadcrumbs>
      </Box>

      {/* Settings Sections */}
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ProfileSection />
        </Grid>
        
        <Grid item xs={12}>
          <NotificationSection />
        </Grid>
        
        <Grid item xs={12}>
          <SecuritySection />
        </Grid>
        
        <Grid item xs={12}>
          <PrivacySection />
        </Grid>
      </Grid>
    </Box>
  )
}
