'use client'

import React, { useState } from 'react'
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
  Paper,
  LinearProgress,
  Chip,
  useTheme,
  useMediaQuery,
  MobileStepper
} from '@mui/material'
import {
  NavigateNext as NextIcon,
  NavigateBefore as BackIcon,
  Check as CheckIcon
} from '@mui/icons-material'
import { Formik, Form } from 'formik'

// Types
export interface FormStep {
  id: string
  label: string
  description?: string
  icon?: React.ReactNode
  component: React.ComponentType<any>
  validationSchema?: any
  optional?: boolean
}

export interface MultiStepFormProps {
  steps: FormStep[]
  initialValues: Record<string, any>
  onSubmit: (values: Record<string, any>) => Promise<void> | void
  onStepChange?: (step: number, values: Record<string, any>) => void
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'mobile'
  showProgress?: boolean
  allowStepSkip?: boolean
  sx?: object
}

/**
 * MultiStepForm Component
 * Multi-step form with navigation and validation
 * Inspired by src_old/pages/RegistrationPage/MultiStepForm.jsx
 */
const MultiStepForm: React.FC<MultiStepFormProps> = ({
  steps,
  initialValues,
  onSubmit,
  onStepChange,
  orientation = 'vertical',
  variant = 'default',
  showProgress = true,
  allowStepSkip = false,
  sx,
}) => {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const shouldUseMobile = variant === 'mobile' || isMobile

  const currentStep = steps[activeStep]
  const isLastStep = activeStep === steps.length - 1
  const isFirstStep = activeStep === 0

  // Calculate progress
  const progress = ((activeStep + 1) / steps.length) * 100

  // Handle step navigation
  const handleNext = async (values: Record<string, any>) => {
    if (onStepChange) {
      onStepChange(activeStep, values)
    }

    // Mark current step as completed
    setCompletedSteps(prev => new Set([...prev, activeStep]))

    if (isLastStep) {
      setIsSubmitting(true)
      try {
        await onSubmit(values)
      } finally {
        setIsSubmitting(false)
      }
    } else {
      setActiveStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setActiveStep(prev => prev - 1)
  }

  const handleStepClick = (step: number) => {
    if (allowStepSkip || completedSteps.has(step) || step < activeStep) {
      setActiveStep(step)
    }
  }

  // Render step icon
  const renderStepIcon = (step: FormStep, index: number) => {
    if (completedSteps.has(index)) {
      return <CheckIcon />
    }
    if (step.icon) {
      return step.icon
    }
    return index + 1
  }

  // Render mobile stepper
  if (shouldUseMobile) {
    return (
      <Box sx={sx}>
        {showProgress && (
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Step {activeStep + 1} of {steps.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {Math.round(progress)}%
              </Typography>
            </Box>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        )}

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            {currentStep.label}
          </Typography>
          {currentStep.description && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {currentStep.description}
            </Typography>
          )}
          {currentStep.optional && (
            <Chip label="Optional" size="small" variant="outlined" sx={{ mb: 2 }} />
          )}
        </Paper>

        <Formik
          initialValues={initialValues}
          validationSchema={currentStep.validationSchema}
          onSubmit={handleNext}
          enableReinitialize
        >
          {({ isValid, values }) => (
            <Form>
              <Box sx={{ mb: 3 }}>
                <currentStep.component />
              </Box>

              <MobileStepper
                variant="dots"
                steps={steps.length}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    type="submit"
                    disabled={isSubmitting || (!isValid && !allowStepSkip)}
                    endIcon={<NextIcon />}
                  >
                    {isLastStep ? 'Submit' : 'Next'}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={isFirstStep || isSubmitting}
                    startIcon={<BackIcon />}
                  >
                    Back
                  </Button>
                }
              />
            </Form>
          )}
        </Formik>
      </Box>
    )
  }

  // Render desktop stepper
  return (
    <Box sx={sx}>
      {showProgress && (
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">
              {currentStep.label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {activeStep + 1} / {steps.length}
            </Typography>
          </Box>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      )}

      <Stepper
        activeStep={activeStep}
        orientation={orientation}
        sx={{ mb: 3 }}
      >
        {steps.map((step, index) => (
          <Step
            key={step.id}
            completed={completedSteps.has(index)}
            onClick={() => handleStepClick(index)}
            sx={{
              cursor: (allowStepSkip || completedSteps.has(index) || index < activeStep) 
                ? 'pointer' 
                : 'default',
            }}
          >
            <StepLabel
              icon={renderStepIcon(step, index)}
              optional={
                step.optional ? (
                  <Typography variant="caption">Optional</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            {orientation === 'vertical' && (
              <StepContent>
                {step.description && (
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {step.description}
                  </Typography>
                )}
                
                {activeStep === index && (
                  <Formik
                    initialValues={initialValues}
                    validationSchema={step.validationSchema}
                    onSubmit={handleNext}
                    enableReinitialize
                  >
                    {({ isValid }) => (
                      <Form>
                        <Box sx={{ mb: 3 }}>
                          <step.component />
                        </Box>

                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button
                            variant="contained"
                            type="submit"
                            disabled={isSubmitting || (!isValid && !allowStepSkip)}
                            startIcon={isLastStep ? <CheckIcon /> : <NextIcon />}
                          >
                            {isLastStep ? 'Submit' : 'Continue'}
                          </Button>
                          
                          {!isFirstStep && (
                            <Button
                              onClick={handleBack}
                              disabled={isSubmitting}
                              startIcon={<BackIcon />}
                            >
                              Back
                            </Button>
                          )}
                        </Box>
                      </Form>
                    )}
                  </Formik>
                )}
              </StepContent>
            )}
          </Step>
        ))}
      </Stepper>

      {orientation === 'horizontal' && (
        <Paper sx={{ p: 3 }}>
          <Formik
            initialValues={initialValues}
            validationSchema={currentStep.validationSchema}
            onSubmit={handleNext}
            enableReinitialize
          >
            {({ isValid }) => (
              <Form>
                <Box sx={{ mb: 3 }}>
                  <currentStep.component />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Button
                    onClick={handleBack}
                    disabled={isFirstStep || isSubmitting}
                    startIcon={<BackIcon />}
                  >
                    Back
                  </Button>
                  
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting || (!isValid && !allowStepSkip)}
                    endIcon={isLastStep ? <CheckIcon /> : <NextIcon />}
                  >
                    {isLastStep ? 'Submit' : 'Next'}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      )}
    </Box>
  )
}

export default MultiStepForm

