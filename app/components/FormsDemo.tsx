'use client'

import React, { useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Grid,
  Alert,
  Stack,
  Button,
  Switch,
  FormControlLabel,
  Divider,
  Tabs,
  Tab,
  Card,
  CardContent
} from '@mui/material'
import {
  Input as InputIcon,
  CheckBox as CheckboxIcon,
  CloudUpload as UploadIcon,
  ViewList as FormIcon,
  Settings as ModalIcon,
  LinearScale as StepperIcon
} from '@mui/icons-material'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
  InputField,
  SelectField,
  CheckboxField,
  FileUploadField,
  FormModal,
  MultiStepForm,
  type SelectOption,
  type CheckboxOption,
  type FormStep
} from './forms'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`forms-tabpanel-${index}`}
      aria-labelledby={`forms-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

// Sample data
const countryOptions: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
]

const skillOptions: SelectOption[] = [
  { value: 'react', label: 'React', group: 'Frontend' },
  { value: 'vue', label: 'Vue.js', group: 'Frontend' },
  { value: 'angular', label: 'Angular', group: 'Frontend' },
  { value: 'node', label: 'Node.js', group: 'Backend' },
  { value: 'python', label: 'Python', group: 'Backend' },
  { value: 'java', label: 'Java', group: 'Backend' },
  { value: 'mysql', label: 'MySQL', group: 'Database' },
  { value: 'mongodb', label: 'MongoDB', group: 'Database' },
]

const hobbyOptions: CheckboxOption[] = [
  { value: 'reading', label: 'Reading' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'sports', label: 'Sports' },
  { value: 'music', label: 'Music' },
  { value: 'travel', label: 'Travel' },
]

// Validation schemas
const basicFormSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  country: Yup.string().required('Country is required'),
  skills: Yup.array().min(1, 'Select at least one skill'),
  hobbies: Yup.array(),
  newsletter: Yup.boolean(),
  bio: Yup.string().max(500, 'Bio must be less than 500 characters'),
})

// Multi-step form components
const PersonalInfoStep: React.FC = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <InputField name="firstName" label="First Name" required />
    </Grid>
    <Grid item xs={12} sm={6}>
      <InputField name="lastName" label="Last Name" required />
    </Grid>
    <Grid item xs={12}>
      <InputField name="email" label="Email" type="email" required />
    </Grid>
    <Grid item xs={12}>
      <SelectField name="country" label="Country" options={countryOptions} required />
    </Grid>
  </Grid>
)

const SkillsStep: React.FC = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <SelectField
        name="skills"
        label="Skills"
        options={skillOptions}
        multiple
        helperText="Select your technical skills"
      />
    </Grid>
    <Grid item xs={12}>
      <CheckboxField
        name="hobbies"
        label="Hobbies"
        options={hobbyOptions}
        helperText="Select your hobbies (optional)"
      />
    </Grid>
  </Grid>
)

const PreferencesStep: React.FC = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <InputField
        name="bio"
        label="Bio"
        multiline
        rows={4}
        helperText="Tell us about yourself"
      />
    </Grid>
    <Grid item xs={12}>
      <CheckboxField
        name="newsletter"
        type="switch"
        label="Subscribe to newsletter"
      />
    </Grid>
    <Grid item xs={12}>
      <FileUploadField
        name="resume"
        label="Upload Resume"
        accept=".pdf,.doc,.docx"
        helperText="Upload your resume (PDF or Word document)"
      />
    </Grid>
  </Grid>
)

/**
 * FormsDemo Component
 * Demonstrates the migrated form components
 */
const FormsDemo: React.FC = () => {
  const [tabValue, setTabValue] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [showValidation, setShowValidation] = useState(true)
  const [formVariant, setFormVariant] = useState<'default' | 'mobile'>('default')

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const handleFormSubmit = async (values: any) => {
    console.log('Form submitted:', values)
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
    alert('Form submitted successfully!')
  }

  const multiStepFormSteps: FormStep[] = [
    {
      id: 'personal',
      label: 'Personal Info',
      description: 'Basic personal information',
      component: PersonalInfoStep,
      validationSchema: Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        country: Yup.string().required('Country is required'),
      }),
    },
    {
      id: 'skills',
      label: 'Skills & Hobbies',
      description: 'Your skills and interests',
      component: SkillsStep,
      validationSchema: Yup.object({
        skills: Yup.array().min(1, 'Select at least one skill'),
      }),
    },
    {
      id: 'preferences',
      label: 'Preferences',
      description: 'Additional preferences and files',
      component: PreferencesStep,
      optional: true,
    },
  ]

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        📝 Forms & Validation Demo
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        ✅ Successfully migrated form components from JSX to TypeScript with Formik integration!
      </Alert>

      {/* Controls */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Demo Controls
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Configure the form components to test different scenarios
        </Typography>
        
        <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={showValidation}
                onChange={(e) => setShowValidation(e.target.checked)}
              />
            }
            label="Show Validation"
          />
          <FormControlLabel
            control={
              <Switch
                checked={formVariant === 'mobile'}
                onChange={(e) => setFormVariant(e.target.checked ? 'mobile' : 'default')}
              />
            }
            label="Mobile Variant"
          />
        </Stack>
      </Paper>

      {/* Component Tabs */}
      <Paper sx={{ mb: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="forms demo tabs">
            <Tab 
              label="Basic Fields" 
              icon={<InputIcon />} 
              iconPosition="start"
            />
            <Tab 
              label="Advanced Fields" 
              icon={<CheckboxIcon />} 
              iconPosition="start"
            />
            <Tab 
              label="File Upload" 
              icon={<UploadIcon />} 
              iconPosition="start"
            />
            <Tab 
              label="Form Modal" 
              icon={<ModalIcon />} 
              iconPosition="start"
            />
            <Tab 
              label="Multi-Step Form" 
              icon={<StepperIcon />} 
              iconPosition="start"
            />
            <Tab 
              label="Overview" 
              icon={<FormIcon />} 
              iconPosition="start"
            />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="h5" gutterBottom>
            Basic Form Fields
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Migrated from: <code>src_old/components/FormFields/</code>
          </Typography>
          
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              bio: '',
            }}
            validationSchema={showValidation ? Yup.object({
              firstName: Yup.string().required('First name is required'),
              lastName: Yup.string().required('Last name is required'),
              email: Yup.string().email('Invalid email').required('Email is required'),
              password: Yup.string().min(6, 'Password must be at least 6 characters'),
            }) : undefined}
            onSubmit={handleFormSubmit}
          >
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <InputField
                    name="firstName"
                    label="First Name"
                    required
                    clearable
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputField
                    name="lastName"
                    label="Last Name"
                    required
                    clearable
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="email"
                    label="Email"
                    type="email"
                    required
                    helperText="We'll never share your email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="password"
                    label="Password"
                    type="password"
                    showPasswordToggle
                    helperText="Minimum 6 characters"
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputField
                    name="bio"
                    label="Bio"
                    multiline
                    rows={4}
                    maxLength={500}
                    helperText="Tell us about yourself (max 500 characters)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Submit Basic Form
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h5" gutterBottom>
            Advanced Form Fields
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Select fields, checkboxes, radio buttons, and switches
          </Typography>
          
          <Formik
            initialValues={{
              country: '',
              skills: [],
              hobbies: [],
              newsletter: false,
              experience: '',
              availability: [],
            }}
            validationSchema={showValidation ? Yup.object({
              country: Yup.string().required('Country is required'),
              skills: Yup.array().min(1, 'Select at least one skill'),
              experience: Yup.string().required('Experience level is required'),
            }) : undefined}
            onSubmit={handleFormSubmit}
          >
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <SelectField
                    name="country"
                    label="Country"
                    options={countryOptions}
                    required
                    placeholder="Select your country"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SelectField
                    name="skills"
                    label="Skills"
                    options={skillOptions}
                    multiple
                    helperText="Select your technical skills"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CheckboxField
                    name="hobbies"
                    label="Hobbies"
                    options={hobbyOptions}
                    row
                    helperText="Select your hobbies"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CheckboxField
                    name="experience"
                    label="Experience Level"
                    type="radio"
                    options={[
                      { value: 'junior', label: 'Junior (0-2 years)' },
                      { value: 'mid', label: 'Mid-level (2-5 years)' },
                      { value: 'senior', label: 'Senior (5+ years)' },
                    ]}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <CheckboxField
                    name="availability"
                    label="Availability"
                    type="switch"
                    options={[
                      { value: 'fulltime', label: 'Full-time' },
                      { value: 'parttime', label: 'Part-time' },
                      { value: 'contract', label: 'Contract' },
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CheckboxField
                    name="newsletter"
                    type="switch"
                    label="Subscribe to newsletter"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Submit Advanced Form
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h5" gutterBottom>
            File Upload Fields
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Drag & drop file upload with validation and preview
          </Typography>
          
          <Formik
            initialValues={{
              resume: [],
              portfolio: [],
              avatar: [],
            }}
            onSubmit={handleFormSubmit}
          >
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FileUploadField
                    name="resume"
                    label="Upload Resume"
                    accept=".pdf,.doc,.docx"
                    maxSize={5 * 1024 * 1024} // 5MB
                    helperText="Upload your resume (PDF or Word document, max 5MB)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FileUploadField
                    name="portfolio"
                    label="Portfolio Files"
                    multiple
                    maxFiles={5}
                    accept="image/*,.pdf"
                    variant="dropzone"
                    showPreview
                    helperText="Upload portfolio images or PDFs (max 5 files)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FileUploadField
                    name="avatar"
                    label="Profile Picture"
                    accept="image/*"
                    maxSize={2 * 1024 * 1024} // 2MB
                    variant="button"
                    showPreview
                    helperText="Upload your profile picture (max 2MB)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" size="large">
                    Submit Files
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="h5" gutterBottom>
            Form Modal
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Modal dialog with form integration
          </Typography>
          
          <Button
            variant="contained"
            onClick={() => setModalOpen(true)}
            size="large"
          >
            Open Form Modal
          </Button>

          <FormModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Edit Profile"
            primaryAction={{
              label: 'Save Changes',
              onClick: () => {
                console.log('Saving changes...')
                setModalOpen(false)
              },
            }}
            secondaryAction={{
              label: 'Cancel',
              onClick: () => setModalOpen(false),
            }}
          >
            <Formik
              initialValues={{
                name: 'John Doe',
                email: 'john@example.com',
                bio: 'Software developer with 5 years of experience.',
              }}
              onSubmit={handleFormSubmit}
            >
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <InputField name="name" label="Full Name" required />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField name="email" label="Email" type="email" required />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      name="bio"
                      label="Bio"
                      multiline
                      rows={4}
                      helperText="Tell us about yourself"
                    />
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </FormModal>
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          <Typography variant="h5" gutterBottom>
            Multi-Step Form
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Complex multi-step form with validation and navigation
          </Typography>
          
          <MultiStepForm
            steps={multiStepFormSteps}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              country: '',
              skills: [],
              hobbies: [],
              bio: '',
              newsletter: false,
              resume: [],
            }}
            onSubmit={handleFormSubmit}
            variant={formVariant}
            showProgress
          />
        </TabPanel>

        <TabPanel value={tabValue} index={5}>
          <Typography variant="h5" gutterBottom>
            Forms Migration Overview
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {/* InputField Features */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="primary">
                    📝 InputField Features
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Material-UI v5 TextField integration</Typography>
                    <Typography variant="body2">• Formik field integration with validation</Typography>
                    <Typography variant="body2">• Password visibility toggle</Typography>
                    <Typography variant="body2">• Clear button functionality</Typography>
                    <Typography variant="body2">• Start/end adornments support</Typography>
                    <Typography variant="body2">• Multiline text areas</Typography>
                    <Typography variant="body2">• Input validation and error display</Typography>
                    <Typography variant="body2">• Auto-focus and accessibility features</Typography>
                    <Typography variant="body2">• TypeScript interfaces for all props</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* SelectField Features */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="secondary">
                    🔽 SelectField Features
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Single and multiple selection</Typography>
                    <Typography variant="body2">• Grouped options support</Typography>
                    <Typography variant="body2">• Custom render values with chips</Typography>
                    <Typography variant="body2">• Checkbox integration for multiple select</Typography>
                    <Typography variant="body2">• Placeholder and helper text</Typography>
                    <Typography variant="body2">• Disabled options support</Typography>
                    <Typography variant="body2">• Formik integration with validation</Typography>
                    <Typography variant="body2">• Material-UI v5 Select component</Typography>
                    <Typography variant="body2">• TypeScript option interfaces</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* CheckboxField Features */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="success.main">
                    ☑️ CheckboxField Features
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Checkbox, switch, and radio button support</Typography>
                    <Typography variant="body2">• Single and multiple option handling</Typography>
                    <Typography variant="body2">• Horizontal and vertical layouts</Typography>
                    <Typography variant="body2">• Color and size customization</Typography>
                    <Typography variant="body2">• Disabled state support</Typography>
                    <Typography variant="body2">• Form validation integration</Typography>
                    <Typography variant="body2">• Accessible form controls</Typography>
                    <Typography variant="body2">• Helper text and error display</Typography>
                    <Typography variant="body2">• TypeScript option interfaces</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* FileUploadField Features */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="info.main">
                    📁 FileUploadField Features
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Drag & drop file upload</Typography>
                    <Typography variant="body2">• File type and size validation</Typography>
                    <Typography variant="body2">• Multiple file support with limits</Typography>
                    <Typography variant="body2">• Image preview functionality</Typography>
                    <Typography variant="body2">• Progress indicator support</Typography>
                    <Typography variant="body2">• File list with remove functionality</Typography>
                    <Typography variant="body2">• Button and dropzone variants</Typography>
                    <Typography variant="body2">• File type icons and formatting</Typography>
                    <Typography variant="body2">• Memory leak prevention</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* FormModal Features */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="warning.main">
                    🪟 FormModal Features
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Material-UI v5 Dialog integration</Typography>
                    <Typography variant="body2">• Responsive design with mobile support</Typography>
                    <Typography variant="body2">• Customizable actions and buttons</Typography>
                    <Typography variant="body2">• Loading states and disabled handling</Typography>
                    <Typography variant="body2">• Backdrop and escape key controls</Typography>
                    <Typography variant="body2">• Close button and dividers</Typography>
                    <Typography variant="body2">• Full-screen mobile support</Typography>
                    <Typography variant="body2">• TypeScript action interfaces</Typography>
                    <Typography variant="body2">• Flexible content and sizing</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* MultiStepForm Features */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="error.main">
                    📊 MultiStepForm Features
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">• Horizontal and vertical stepper layouts</Typography>
                    <Typography variant="body2">• Mobile-optimized stepper variant</Typography>
                    <Typography variant="body2">• Step validation and completion tracking</Typography>
                    <Typography variant="body2">• Optional steps and step skipping</Typography>
                    <Typography variant="body2">• Progress indicator with percentage</Typography>
                    <Typography variant="body2">• Step navigation and click handling</Typography>
                    <Typography variant="body2">• Formik integration per step</Typography>
                    <Typography variant="body2">• Custom step icons and descriptions</Typography>
                    <Typography variant="body2">• TypeScript step interfaces</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Migration Status */}
          <Paper sx={{ p: 3, bgcolor: 'grey.50' }}>
            <Typography variant="h6" gutterBottom>
              📊 Forms Migration Progress
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={2}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">✅</Typography>
                  <Typography variant="body2">InputField</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">✅</Typography>
                  <Typography variant="body2">SelectField</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">✅</Typography>
                  <Typography variant="body2">CheckboxField</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">✅</Typography>
                  <Typography variant="body2">FileUpload</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">✅</Typography>
                  <Typography variant="body2">FormModal</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Box textAlign="center">
                  <Typography variant="h4" color="success.main">✅</Typography>
                  <Typography variant="body2">MultiStep</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </TabPanel>
      </Paper>

      {/* Integration Examples */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          🔗 Integration Examples
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          These form components are now ready to be used throughout your application
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} md={2}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<InputIcon />}
              onClick={() => setTabValue(0)}
            >
              Basic Fields
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<CheckboxIcon />}
              onClick={() => setTabValue(1)}
            >
              Advanced
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<UploadIcon />}
              onClick={() => setTabValue(2)}
            >
              File Upload
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<ModalIcon />}
              onClick={() => setTabValue(3)}
            >
              Modal
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<StepperIcon />}
              onClick={() => setTabValue(4)}
            >
              Multi-Step
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setTabValue(5)}
            >
              Overview
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default FormsDemo

