import { Metadata } from 'next'
import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
  Divider,
  FormControlLabel,
  Checkbox,
  Alert,
  MenuItem,
  Grid,
} from '@mui/material'
import {
  Google,
  Facebook,
  GitHub,
  PersonAdd,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Create your Jam account and start freelancing',
}

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'freelancer',
    agreeToTerms: false,
    subscribeNewsletter: false,
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: ['agreeToTerms', 'subscribeNewsletter'].includes(name) ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the Terms of Service and Privacy Policy')
      setLoading(false)
      return
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Registration attempt:', formData)
      // Handle successful registration here
    } catch (err) {
      setError('Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Register with ${provider}`)
    // Handle social registration
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      {/* Registration Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>

        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ mt: 2, mb: 2 }}
        />

        <TextField
          fullWidth
          select
          label="I want to"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          sx={{ mb: 2 }}
        >
          <MenuItem value="freelancer">Work as a Freelancer</MenuItem>
          <MenuItem value="client">Hire Freelancers</MenuItem>
          <MenuItem value="both">Both</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          helperText="Must be at least 8 characters long"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
            />
          }
          label={
            <Typography variant="body2">
              I agree to the{' '}
              <MuiLink href="/terms" target="_blank">
                Terms of Service
              </MuiLink>{' '}
              and{' '}
              <MuiLink href="/privacy" target="_blank">
                Privacy Policy
              </MuiLink>
            </Typography>
          }
          sx={{ mb: 1 }}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="subscribeNewsletter"
              checked={formData.subscribeNewsletter}
              onChange={handleChange}
            />
          }
          label="Send me helpful emails to find rewarding work and job leads"
          sx={{ mb: 3 }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={loading}
          startIcon={<PersonAdd />}
          sx={{ mb: 3 }}
        >
          {loading ? 'Creating Account...' : 'Create My Account'}
        </Button>

        {/* Social Registration */}
        <Divider sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Or sign up with
          </Typography>
        </Divider>

        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            onClick={() => handleSocialLogin('Google')}
          >
            Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Facebook />}
            onClick={() => handleSocialLogin('Facebook')}
          >
            Facebook
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GitHub />}
            onClick={() => handleSocialLogin('GitHub')}
          >
            GitHub
          </Button>
        </Box>

        {/* Sign In Link */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Already have an account?{' '}
            <MuiLink component={Link} href="/login" fontWeight="bold">
              Sign in
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

