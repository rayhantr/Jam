'use client'

import React from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Chip,
  Box,
  OutlinedInput,
  ListItemText,
  Checkbox
} from '@mui/material'
import { useField } from 'formik'

// Types
export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
  group?: string
}

export interface SelectFieldProps {
  name: string
  label?: string
  options: SelectOption[]
  placeholder?: string
  helperText?: string
  required?: boolean
  disabled?: boolean
  multiple?: boolean
  fullWidth?: boolean
  variant?: 'outlined' | 'filled' | 'standard'
  size?: 'small' | 'medium'
  displayEmpty?: boolean
  renderValue?: (selected: any) => React.ReactNode
  sx?: object
}

/**
 * SelectField Component
 * Enhanced select field with Formik integration and Material-UI v5
 * Migrated from src_old/components/FormFields/SelectField.jsx
 */
const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  options = [],
  placeholder,
  helperText,
  required = false,
  disabled = false,
  multiple = false,
  fullWidth = true,
  variant = 'outlined',
  size = 'medium',
  displayEmpty = false,
  renderValue,
  sx,
  ...props
}) => {
  const [field, meta, helpers] = useField(name)

  // Determine if there's an error
  const hasError = Boolean(meta.touched && meta.error)
  const errorMessage = meta.touched && meta.error ? meta.error : ''

  // Handle change
  const handleChange = (event: any) => {
    const value = event.target.value
    helpers.setValue(value)
  }

  // Default render value for multiple select
  const defaultRenderValue = (selected: any) => {
    if (!selected || (Array.isArray(selected) && selected.length === 0)) {
      return placeholder || ''
    }

    if (multiple && Array.isArray(selected)) {
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value) => {
            const option = options.find(opt => opt.value === value)
            return (
              <Chip
                key={value}
                label={option?.label || value}
                size="small"
                variant="outlined"
              />
            )
          })}
        </Box>
      )
    }

    const option = options.find(opt => opt.value === selected)
    return option?.label || selected
  }

  // Group options by group property
  const groupedOptions = options.reduce((acc, option) => {
    const group = option.group || 'default'
    if (!acc[group]) {
      acc[group] = []
    }
    acc[group].push(option)
    return acc
  }, {} as Record<string, SelectOption[]>)

  const hasGroups = Object.keys(groupedOptions).length > 1 || 
    (Object.keys(groupedOptions).length === 1 && !groupedOptions.default)

  // Render options
  const renderOptions = () => {
    if (hasGroups) {
      return Object.entries(groupedOptions).map(([groupName, groupOptions]) => [
        groupName !== 'default' && (
          <MenuItem key={`group-${groupName}`} disabled sx={{ fontWeight: 'bold' }}>
            {groupName}
          </MenuItem>
        ),
        ...groupOptions.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            sx={groupName !== 'default' ? { pl: 4 } : {}}
          >
            {multiple && (
              <Checkbox 
                checked={Array.isArray(field.value) && field.value.includes(option.value)}
                size="small"
              />
            )}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))
      ]).flat().filter(Boolean)
    }

    return options.map((option) => (
      <MenuItem
        key={option.value}
        value={option.value}
        disabled={option.disabled}
      >
        {multiple && (
          <Checkbox 
            checked={Array.isArray(field.value) && field.value.includes(option.value)}
            size="small"
          />
        )}
        <ListItemText primary={option.label} />
      </MenuItem>
    ))
  }

  return (
    <FormControl 
      fullWidth={fullWidth} 
      error={hasError} 
      variant={variant}
      size={size}
      sx={sx}
    >
      {label && (
        <InputLabel required={required}>
          {label}
        </InputLabel>
      )}
      <Select
        {...field}
        {...props}
        multiple={multiple}
        displayEmpty={displayEmpty}
        disabled={disabled}
        onChange={handleChange}
        input={variant === 'outlined' ? <OutlinedInput label={label} /> : undefined}
        renderValue={renderValue || (multiple ? defaultRenderValue : undefined)}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 300,
            },
          },
        }}
      >
        {displayEmpty && placeholder && (
          <MenuItem value="" disabled>
            <em>{placeholder}</em>
          </MenuItem>
        )}
        {renderOptions()}
      </Select>
      {(errorMessage || helperText) && (
        <FormHelperText>
          {errorMessage || helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default SelectField
