'use client'

import React from 'react'
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Checkbox,
  Switch,
  Radio,
  RadioGroup,
  Box
} from '@mui/material'
import { useField } from 'formik'

// Types
export interface CheckboxOption {
  value: string | number
  label: string
  disabled?: boolean
}

export interface CheckboxFieldProps {
  name: string
  label?: string
  children?: React.ReactNode
  options?: CheckboxOption[]
  type?: 'checkbox' | 'switch' | 'radio'
  required?: boolean
  disabled?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  size?: 'small' | 'medium'
  row?: boolean
  helperText?: string
  sx?: object
}

/**
 * CheckboxField Component
 * Enhanced checkbox/switch/radio field with Formik integration and Material-UI v5
 * Migrated from src_old/components/FormFields/CheckboxField.jsx
 */
const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  children,
  options = [],
  type = 'checkbox',
  required = false,
  disabled = false,
  color = 'primary',
  size = 'medium',
  row = false,
  helperText,
  sx,
  ...props
}) => {
  const [field, meta, helpers] = useField({ name, type: type === 'radio' ? 'radio' : 'checkbox' })

  // Determine if there's an error
  const hasError = Boolean(meta.touched && meta.error)
  const errorMessage = meta.touched && meta.error ? meta.error : ''

  // Handle single checkbox/switch change
  const handleSingleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    helpers.setValue(checked)
  }

  // Handle multiple checkbox change
  const handleMultipleChange = (optionValue: string | number) => {
    const currentValues = Array.isArray(field.value) ? field.value : []
    const newValues = currentValues.includes(optionValue)
      ? currentValues.filter(val => val !== optionValue)
      : [...currentValues, optionValue]
    helpers.setValue(newValues)
  }

  // Handle radio change
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(event.target.value)
  }

  // Render single checkbox or switch
  if (!options.length && (type === 'checkbox' || type === 'switch')) {
    const Component = type === 'switch' ? Switch : Checkbox

    return (
      <FormControl error={hasError} sx={sx}>
        <FormControlLabel
          control={
            <Component
              {...field}
              {...props}
              checked={Boolean(field.value)}
              onChange={handleSingleChange}
              color={color}
              size={size}
              disabled={disabled}
              required={required}
            />
          }
          label={children || label || ''}
        />
        {(errorMessage || helperText) && (
          <FormHelperText sx={{ ml: 0 }}>
            {errorMessage || helperText}
          </FormHelperText>
        )}
      </FormControl>
    )
  }

  // Render radio group
  if (type === 'radio') {
    return (
      <FormControl error={hasError} sx={sx}>
        {label && (
          <FormLabel component="legend" required={required}>
            {label}
          </FormLabel>
        )}
        <RadioGroup
          {...field}
          row={row}
          onChange={handleRadioChange}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={
                <Radio
                  color={color}
                  size={size}
                  disabled={disabled || option.disabled}
                />
              }
              label={option.label}
              disabled={disabled || option.disabled}
            />
          ))}
        </RadioGroup>
        {(errorMessage || helperText) && (
          <FormHelperText>
            {errorMessage || helperText}
          </FormHelperText>
        )}
      </FormControl>
    )
  }

  // Render checkbox group
  return (
    <FormControl error={hasError} sx={sx}>
      {label && (
        <FormLabel component="legend" required={required}>
          {label}
        </FormLabel>
      )}
      <FormGroup row={row}>
        {options.map((option) => {
          const isChecked = Array.isArray(field.value) 
            ? field.value.includes(option.value)
            : false

          const Component = type === 'switch' ? Switch : Checkbox

          return (
            <FormControlLabel
              key={option.value}
              control={
                <Component
                  checked={isChecked}
                  onChange={() => handleMultipleChange(option.value)}
                  color={color}
                  size={size}
                  disabled={disabled || option.disabled}
                />
              }
              label={option.label}
              disabled={disabled || option.disabled}
            />
          )
        })}
      </FormGroup>
      {(errorMessage || helperText) && (
        <FormHelperText>
          {errorMessage || helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default CheckboxField

