'use client'

import React, { useState } from 'react'
import {
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  IconButton,
  Typography,
  Grid,
  Chip,
  Avatar
} from '@mui/material'
import {
  MoreVert as MoreVertIcon,
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  Schedule as ScheduleIcon,
  Warning as SystemIcon,
  CalendarToday as ClientIcon,
  Description as GigIcon,
  AttachMoney as PaymentIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material'
import Link from 'next/link'
import { Notification, NotificationCategory } from './NotificationList'

interface NotificationBlockProps extends Notification {
  onClick: () => void
}

// Notification type configurations
const notificationTypes: Record<NotificationCategory, {
  icon: React.ReactNode
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  bgColor: string
}> = {
  system: {
    icon: <NotificationsIcon />,
    color: 'warning',
    bgColor: '#fff3e0',
  },
  client: {
    icon: <ClientIcon />,
    color: 'primary',
    bgColor: '#e3f2fd',
  },
  gig: {
    icon: <GigIcon />,
    color: 'success',
    bgColor: '#e8f5e8',
  },
  payment: {
    icon: <PaymentIcon />,
    color: 'info',
    bgColor: '#e1f5fe',
  },
}

/**
 * NotificationBlock Component
 * Individual notification item with category-specific styling
 * Migrated from src_old/components/NotificationList/NotificationBlock.jsx
 */
const NotificationBlock: React.FC<NotificationBlockProps> = ({
  id,
  category,
  title,
  description,
  timestamp,
  readStatus,
  actionUrl,
  onClick
}) => {
  const [actionsOpen, setActionsOpen] = useState(false)

  const toggleActions = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    setActionsOpen(!actionsOpen)
  }

  const closeActions = () => {
    setActionsOpen(false)
  }

  const handleMarkRead = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    onClick()
    closeActions()
  }

  const notificationConfig = notificationTypes[category]
  const linkHref = actionUrl || '#'

  return (
    <Box sx={{ px: 1 }}>
      <Box
        component={actionUrl ? Link : 'div'}
        href={linkHref}
        sx={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
          borderRadius: 1,
          transition: 'background-color 0.2s',
          cursor: actionUrl ? 'pointer' : 'default',
        }}
      >
        <Grid container spacing={2} sx={{ p: 2, alignItems: 'flex-start' }}>
          {/* Category Icon */}
          <Grid item xs="auto">
            <Avatar
              sx={{
                width: 48,
                height: 48,
                backgroundColor: notificationConfig.bgColor,
                color: `${notificationConfig.color}.main`,
              }}
            >
              {notificationConfig.icon}
            </Avatar>
          </Grid>

          {/* Notification Content */}
          <Grid item xs sx={{ minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 0.5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle1"
                  component="h3"
                  sx={{
                    fontWeight: readStatus ? 'normal' : 'bold',
                    color: readStatus ? 'text.secondary' : 'text.primary',
                    mb: 0.5,
                  }}
                >
                  {title}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Chip
                    label={category.charAt(0).toUpperCase() + category.slice(1)}
                    size="small"
                    color={notificationConfig.color}
                    variant={readStatus ? 'outlined' : 'filled'}
                    sx={{ height: 20, fontSize: '0.75rem' }}
                  />
                  {!readStatus && (
                    <Chip
                      size="small"
                      label="New"
                      color="error"
                      sx={{ height: 20, fontSize: '0.75rem' }}
                    />
                  )}
                </Box>
              </Box>

              {/* Actions Menu */}
              <IconButton
                size="small"
                onClick={toggleActions}
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <MoreVertIcon />
              </IconButton>
            </Box>

            {description && (
              <Typography
                variant="body2"
                sx={{
                  color: readStatus ? 'text.secondary' : 'text.primary',
                  mb: 1,
                  lineHeight: 1.4,
                }}
              >
                {description}
              </Typography>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ScheduleIcon
                sx={{
                  fontSize: 16,
                  color: readStatus ? 'text.disabled' : 'primary.main',
                  mr: 0.5,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: readStatus ? 'text.disabled' : 'primary.main',
                  fontWeight: readStatus ? 'normal' : 'medium',
                }}
              >
                {timestamp}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Action Button */}
        <Collapse in={actionsOpen} timeout={200} unmountOnExit>
          <ClickAwayListener onClickAway={closeActions}>
            <Box sx={{ px: 2, pb: 2 }}>
              <Button
                onClick={handleMarkRead}
                startIcon={
                  readStatus ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />
                }
                variant="outlined"
                size="small"
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
              >
                Mark as {readStatus ? 'unread' : 'read'}
              </Button>
            </Box>
          </ClickAwayListener>
        </Collapse>
      </Box>
    </Box>
  )
}

export default NotificationBlock
