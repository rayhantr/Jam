'use client'

import React, { useRef, useState } from 'react'
import {
  Box,
  Button,
  Typography,
  LinearProgress,
  IconButton,
  Chip,
  FormControl,
  FormHelperText,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material'
import {
  CloudUpload as UploadIcon,
  AttachFile as FileIcon,
  Delete as DeleteIcon,
  Image as ImageIcon,
  PictureAsPdf as PdfIcon,
  Description as DocIcon
} from '@mui/icons-material'
import { useField } from 'formik'

// Types
export interface FileUploadFieldProps {
  name: string
  label?: string
  accept?: string
  multiple?: boolean
  maxSize?: number // in bytes
  maxFiles?: number
  helperText?: string
  required?: boolean
  disabled?: boolean
  showPreview?: boolean
  variant?: 'button' | 'dropzone'
  sx?: object
  onFileSelect?: (files: File[]) => void
  onFileRemove?: (file: File) => void
}

interface FileWithPreview extends File {
  preview?: string
}

/**
 * FileUploadField Component
 * File upload field with drag & drop, preview, and validation
 */
const FileUploadField: React.FC<FileUploadFieldProps> = ({
  name,
  label = 'Upload Files',
  accept,
  multiple = false,
  maxSize = 5 * 1024 * 1024, // 5MB default
  maxFiles = 5,
  helperText,
  required = false,
  disabled = false,
  showPreview = true,
  variant = 'dropzone',
  sx,
  onFileSelect,
  onFileRemove,
  ...props
}) => {
  const [field, meta, helpers] = useField(name)
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Determine if there's an error
  const hasError = Boolean(meta.touched && meta.error)
  const errorMessage = meta.touched && meta.error ? meta.error : ''

  // Get current files
  const currentFiles: FileWithPreview[] = Array.isArray(field.value) ? field.value : []

  // Validate file
  const validateFile = (file: File): string | null => {
    if (maxSize && file.size > maxSize) {
      return `File size must be less than ${formatFileSize(maxSize)}`
    }
    return null
  }

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Get file icon
  const getFileIcon = (file: File) => {
    const type = file.type.toLowerCase()
    if (type.startsWith('image/')) return <ImageIcon />
    if (type === 'application/pdf') return <PdfIcon />
    if (type.includes('document') || type.includes('text')) return <DocIcon />
    return <FileIcon />
  }

  // Handle file selection
  const handleFileSelect = (files: FileList | null) => {
    if (!files) return

    const fileArray = Array.from(files)
    const validFiles: FileWithPreview[] = []
    const errors: string[] = []

    fileArray.forEach(file => {
      const error = validateFile(file)
      if (error) {
        errors.push(`${file.name}: ${error}`)
      } else {
        const fileWithPreview = file as FileWithPreview
        if (showPreview && file.type.startsWith('image/')) {
          fileWithPreview.preview = URL.createObjectURL(file)
        }
        validFiles.push(fileWithPreview)
      }
    })

    if (errors.length > 0) {
      helpers.setError(errors.join(', '))
      return
    }

    const newFiles = multiple 
      ? [...currentFiles, ...validFiles].slice(0, maxFiles)
      : validFiles.slice(0, 1)

    helpers.setValue(newFiles)
    helpers.setError('')

    if (onFileSelect) {
      onFileSelect(validFiles)
    }
  }

  // Handle file input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(event.target.files)
    // Reset input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Handle file removal
  const handleFileRemove = (fileToRemove: FileWithPreview) => {
    const newFiles = currentFiles.filter(file => file !== fileToRemove)
    helpers.setValue(newFiles)

    // Revoke object URL to prevent memory leaks
    if (fileToRemove.preview) {
      URL.revokeObjectURL(fileToRemove.preview)
    }

    if (onFileRemove) {
      onFileRemove(fileToRemove)
    }
  }

  // Handle drag events
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
    if (!disabled) {
      setIsDragOver(true)
    }
  }

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    setIsDragOver(false)
    if (!disabled) {
      handleFileSelect(event.dataTransfer.files)
    }
  }

  // Handle click to open file dialog
  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  // Render button variant
  if (variant === 'button') {
    return (
      <FormControl error={hasError} sx={sx}>
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleInputChange}
          style={{ display: 'none' }}
          {...props}
        />
        <Button
          variant="outlined"
          startIcon={<UploadIcon />}
          onClick={handleClick}
          disabled={disabled}
          sx={{ mb: 1 }}
        >
          {label}
        </Button>
        
        {currentFiles.length > 0 && (
          <Box sx={{ mt: 1 }}>
            {currentFiles.map((file, index) => (
              <Chip
                key={index}
                label={`${file.name} (${formatFileSize(file.size)})`}
                onDelete={() => handleFileRemove(file)}
                deleteIcon={<DeleteIcon />}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
        )}

        {(errorMessage || helperText) && (
          <FormHelperText>
            {errorMessage || helperText}
          </FormHelperText>
        )}
      </FormControl>
    )
  }

  // Render dropzone variant
  return (
    <FormControl error={hasError} sx={sx}>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleInputChange}
        style={{ display: 'none' }}
        {...props}
      />

      <Paper
        variant="outlined"
        sx={{
          p: 3,
          textAlign: 'center',
          cursor: disabled ? 'default' : 'pointer',
          backgroundColor: isDragOver ? 'action.hover' : 'background.paper',
          borderColor: isDragOver ? 'primary.main' : hasError ? 'error.main' : 'divider',
          borderStyle: 'dashed',
          borderWidth: 2,
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: disabled ? 'background.paper' : 'action.hover',
          },
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <UploadIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          {label}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Drag & drop files here or click to browse
        </Typography>
        {accept && (
          <Typography variant="caption" color="text.secondary">
            Accepted formats: {accept}
          </Typography>
        )}
        {maxSize && (
          <Typography variant="caption" color="text.secondary" display="block">
            Max file size: {formatFileSize(maxSize)}
          </Typography>
        )}
      </Paper>

      {uploadProgress !== null && (
        <Box sx={{ mt: 2 }}>
          <LinearProgress variant="determinate" value={uploadProgress} />
          <Typography variant="caption" color="text.secondary">
            Uploading... {uploadProgress}%
          </Typography>
        </Box>
      )}

      {currentFiles.length > 0 && (
        <List sx={{ mt: 2 }}>
          {currentFiles.map((file, index) => (
            <ListItem key={index} divider>
              <ListItemIcon>
                {getFileIcon(file)}
              </ListItemIcon>
              <ListItemText
                primary={file.name}
                secondary={formatFileSize(file.size)}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  onClick={() => handleFileRemove(file)}
                  disabled={disabled}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}

      {(errorMessage || helperText) && (
        <FormHelperText sx={{ mt: 1 }}>
          {errorMessage || helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default FileUploadField

