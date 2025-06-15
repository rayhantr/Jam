'use client'

import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material'
import {
  Close as CloseIcon,
  Save as SaveIcon,
  Cancel as CancelIcon
} from '@mui/icons-material'

// Types
export interface FormModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  actions?: React.ReactNode
  primaryAction?: {
    label: string
    onClick: () => void
    loading?: boolean
    disabled?: boolean
    variant?: 'contained' | 'outlined' | 'text'
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    startIcon?: React.ReactNode
  }
  secondaryAction?: {
    label: string
    onClick: () => void
    disabled?: boolean
    variant?: 'contained' | 'outlined' | 'text'
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    startIcon?: React.ReactNode
  }
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  fullScreen?: boolean
  disableBackdropClick?: boolean
  disableEscapeKeyDown?: boolean
  showCloseButton?: boolean
  dividers?: boolean
  sx?: object
}

/**
 * FormModal Component
 * Enhanced modal dialog for forms with Material-UI v5
 * Migrated from src_old/components/Modal/ModalForm.jsx
 */
const FormModal: React.FC<FormModalProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  primaryAction,
  secondaryAction,
  maxWidth = 'sm',
  fullWidth = true,
  fullScreen = false,
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  showCloseButton = true,
  dividers = true,
  sx,
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (disableBackdropClick) {
      event.stopPropagation()
      return
    }
    onClose()
  }

  // Handle escape key
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && !disableEscapeKeyDown) {
      onClose()
    }
  }

  // Default actions
  const defaultActions = (
    <>
      {secondaryAction && (
        <Button
          onClick={secondaryAction.onClick}
          disabled={secondaryAction.disabled}
          variant={secondaryAction.variant || 'outlined'}
          color={secondaryAction.color || 'secondary'}
          startIcon={secondaryAction.startIcon || <CancelIcon />}
          sx={{ mr: 1 }}
        >
          {secondaryAction.label}
        </Button>
      )}
      {primaryAction && (
        <Button
          onClick={primaryAction.onClick}
          disabled={primaryAction.disabled || primaryAction.loading}
          variant={primaryAction.variant || 'contained'}
          color={primaryAction.color || 'primary'}
          startIcon={primaryAction.startIcon || <SaveIcon />}
        >
          {primaryAction.loading ? 'Loading...' : primaryAction.label}
        </Button>
      )}
    </>
  )

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      fullScreen={fullScreen || isMobile}
      onKeyDown={handleKeyDown}
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: fullScreen || isMobile ? 0 : 2,
          ...sx,
        },
      }}
      BackdropProps={{
        onClick: handleBackdropClick,
      }}
    >
      {/* Header */}
      {title && (
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pb: dividers ? 2 : 1,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          {showCloseButton && (
            <IconButton
              onClick={onClose}
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}

      {dividers && title && <Divider />}

      {/* Content */}
      <DialogContent
        sx={{
          py: 3,
          px: 3,
          '&.MuiDialogContent-dividers': {
            borderTop: 'none',
            borderBottom: 'none',
          },
        }}
      >
        {children}
      </DialogContent>

      {/* Actions */}
      {(actions || primaryAction || secondaryAction) && (
        <>
          {dividers && <Divider />}
          <DialogActions
            sx={{
              px: 3,
              py: 2,
              justifyContent: 'flex-end',
            }}
          >
            {actions || defaultActions}
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}

export default FormModal

