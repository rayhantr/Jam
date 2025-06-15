'use client'

import { useState } from 'react'
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Switch, 
  FormControlLabel,
  Divider,
  Chip,
  Stack
} from '@mui/material'
import { 
  useProcess, 
  useProcessActions, 
  useUI, 
  useUIActions,
  useSelector,
  useDispatch 
} from '../store/hooks'
import { process } from '../store/actions'

/**
 * Demo component to showcase Zustand store functionality
 * This demonstrates both modern Zustand hooks and Redux-compatible hooks
 */
export function StoreDemo() {
  // Local state for form inputs
  const [textInput, setTextInput] = useState('')
  const [cypherInput, setCypherInput] = useState('')
  
  // Modern Zustand hooks
  const processState = useProcess()
  const { setProcess, resetProcess } = useProcessActions()
  const uiState = useUI()
  const { toggleSidebar, setTheme, setLoading } = useUIActions()
  
  // Redux-compatible hooks (for backward compatibility)
  const reduxProcessState = useSelector((state: any) => state.ProcessReducer)
  const dispatch = useDispatch()
  
  const handleModernUpdate = () => {
    setProcess(true, textInput, cypherInput)
  }
  
  const handleReduxUpdate = () => {
    dispatch(process(false, textInput, cypherInput))
  }
  
  const handleReset = () => {
    resetProcess()
    setTextInput('')
    setCypherInput('')
  }
  
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        🏪 Zustand Store Demo
      </Typography>
      
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        This demo shows the new Zustand store working alongside Redux-compatible hooks
        for seamless migration from the old Redux setup.
      </Typography>
      
      {/* Input Form */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Test Store Updates
          </Typography>
          
          <Stack spacing={2}>
            <TextField
              label="Text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              fullWidth
            />
            
            <TextField
              label="Cypher"
              value={cypherInput}
              onChange={(e) => setCypherInput(e.target.value)}
              fullWidth
            />
            
            <Stack direction="row" spacing={2}>
              <Button 
                variant="contained" 
                onClick={handleModernUpdate}
                color="primary"
              >
                Update (Modern Zustand)
              </Button>
              
              <Button 
                variant="outlined" 
                onClick={handleReduxUpdate}
                color="secondary"
              >
                Update (Redux Compatible)
              </Button>
              
              <Button 
                variant="text" 
                onClick={handleReset}
                color="error"
              >
                Reset
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      
      {/* Store State Display */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Current Store State
          </Typography>
          
          <Stack spacing={2}>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Modern Zustand State:
              </Typography>
              <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: 1 }}>
                <Typography variant="body2" component="pre">
                  {JSON.stringify(processState, null, 2)}
                </Typography>
              </Box>
            </Box>
            
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Redux-Compatible State:
              </Typography>
              <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
                <Typography variant="body2" component="pre">
                  {JSON.stringify(reduxProcessState, null, 2)}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </CardContent>
      </Card>
      
      {/* UI Controls */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            UI State Controls
          </Typography>
          
          <Stack spacing={2}>
            <FormControlLabel
              control={
                <Switch
                  checked={uiState.sidebarOpen}
                  onChange={toggleSidebar}
                />
              }
              label="Sidebar Open"
            />
            
            <FormControlLabel
              control={
                <Switch
                  checked={uiState.theme === 'dark'}
                  onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                />
              }
              label="Dark Theme"
            />
            
            <FormControlLabel
              control={
                <Switch
                  checked={uiState.loading}
                  onChange={(e) => setLoading(e.target.checked)}
                />
              }
              label="Loading State"
            />
            
            <Divider />
            
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Current UI State:
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip 
                  label={`Theme: ${uiState.theme}`} 
                  color={uiState.theme === 'dark' ? 'secondary' : 'primary'}
                />
                <Chip 
                  label={`Sidebar: ${uiState.sidebarOpen ? 'Open' : 'Closed'}`}
                  variant="outlined"
                />
                <Chip 
                  label={`Loading: ${uiState.loading ? 'Yes' : 'No'}`}
                  color={uiState.loading ? 'warning' : 'success'}
                />
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}

