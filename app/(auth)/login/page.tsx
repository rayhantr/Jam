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
} from '@mui/material'
import {
  Google,
  Facebook,
  GitHub,
  Login,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your Jam account',
}

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Login attempt:', formData)
      // Handle successful login here
    } catch (err) {
      setError('Invalid email or password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`)
    // Handle social login
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 400 }}>
      {/* Login Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
            }
            label="Remember me"
          />
          <MuiLink component={Link} href="/forgot-password" variant="body2">
            Forgot password?
          </MuiLink>
        </Box>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={loading}
          startIcon={<Login />}
          sx={{ mb: 3 }}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </Button>

        {/* Social Login */}
        <Divider sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Or continue with
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

        {/* Sign Up Link */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Don't have an account?{' '}
            <MuiLink component={Link} href="/register" fontWeight="bold">
              Sign up for free
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

