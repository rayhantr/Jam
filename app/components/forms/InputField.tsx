'use client'

import React from 'react'
import {
  TextField,
  FormControl,
  FormHelperText,
  InputAdornment,
  IconButton
} from '@mui/material'
import {
  Visibility,
  VisibilityOff,
  Clear as ClearIcon
} from '@mui/icons-material'
import { useField } from 'formik'

// Types
export interface InputFieldProps {
  name: string
  label?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  placeholder?: string
  helperText?: string
  required?: boolean
  disabled?: boolean
  multiline?: boolean
  rows?: number
  maxRows?: number
  fullWidth?: boolean
  variant?: 'outlined' | 'filled' | 'standard'
  size?: 'small' | 'medium'
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  clearable?: boolean
  showPasswordToggle?: boolean
  autoComplete?: string
  autoFocus?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string
  step?: string | number
  min?: string | number
  max?: string | number
  onClear?: () => void
  sx?: object
}

/**
 * InputField Component
 * Enhanced input field with Formik integration and Material-UI v5
 * Migrated from src_old/components/FormFields/InputField.jsx
 */
const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
  helperText,
  required = false,
  disabled = false,
  multiline = false,
  rows,
  maxRows,
  fullWidth = true,
  variant = 'outlined',
  size = 'medium',
  startAdornment,
  endAdornment,
  clearable = false,
  showPasswordToggle = false,
  autoComplete,
  autoFocus = false,
  maxLength,
  minLength,
  pattern,
  step,
  min,
  max,
  onClear,
  sx,
  ...props
}) => {
  const [field, meta, helpers] = useField(name)
  const [showPassword, setShowPassword] = React.useState(false)

  // Determine if there's an error
  const hasError = Boolean(meta.touched && meta.error)
  const errorMessage = meta.touched && meta.error ? meta.error : ''

  // Handle password visibility toggle
  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  // Handle clear input
  const handleClear = () => {
    helpers.setValue('')
    if (onClear) {
      onClear()
    }
  }

  // Determine input type
  const inputType = type === 'password' && showPassword ? 'text' : type

  // Build end adornment
  const buildEndAdornment = () => {
    const adornments = []

    // Clear button
    if (clearable && field.value && !disabled) {
      adornments.push(
        <IconButton
          key="clear"
          size="small"
          onClick={handleClear}
          edge="end"
          aria-label="Clear input"
        >
          <ClearIcon />
        </IconButton>
      )
    }

    // Password toggle
    if (type === 'password' && showPasswordToggle && !disabled) {
      adornments.push(
        <IconButton
          key="password-toggle"
          size="small"
          onClick={handleTogglePassword}
          edge="end"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      )
    }

    // Custom end adornment
    if (endAdornment) {
      adornments.push(endAdornment)
    }

    return adornments.length > 0 ? (
      <InputAdornment position="end">
        {adornments}
      </InputAdornment>
    ) : null
  }

  return (
    <FormControl fullWidth={fullWidth} error={hasError} sx={sx}>
      <TextField
        {...field}
        {...props}
        type={inputType}
        label={label}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        error={hasError}
        inputProps={{
          maxLength,
          minLength,
          pattern,
          step,
          min,
          max,
        }}
        InputProps={{
          startAdornment: startAdornment ? (
            <InputAdornment position="start">
              {startAdornment}
            </InputAdornment>
          ) : null,
          endAdornment: buildEndAdornment(),
        }}
        helperText={errorMessage || helperText}
      />
    </FormControl>
  )
}

export default InputField

