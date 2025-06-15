'use client'

import React, { useState } from 'react'
import {
  Box,
  Button,
  IconButton,
  Typography,
  Grid,
  Divider
} from '@mui/material'
import {
  CheckBox as CheckBoxIcon,
  Settings as SettingsIcon
} from '@mui/icons-material'
import Link from 'next/link'
import NotificationBlock from './NotificationBlock'

// Types
export type NotificationCategory = 'system' | 'client' | 'gig' | 'payment'

export interface Notification {
  id: number
  category: NotificationCategory
  readStatus: boolean
  title: string
  timestamp: string
  description?: string
  actionUrl?: string
}

interface NotificationListProps {
  onClick?: () => void
  isPopper?: boolean
  notifications?: Notification[]
}

// Default mock notifications
const defaultNotifications: Notification[] = [
  {
    id: 1,
    category: 'client',
    readStatus: false,
    title: 'New project proposal received',
    description: 'John Doe sent you a proposal for "E-commerce Website Development"',
    timestamp: '2 min ago',
    actionUrl: '/proposals/123',
  },
  {
    id: 2,
    category: 'payment',
    readStatus: true,
    title: 'Payment received',
    description: 'You received $500 for "React Dashboard Project"',
    timestamp: '3 min ago',
    actionUrl: '/payments/456',
  },
  {
    id: 3,
    category: 'gig',
    readStatus: true,
    title: 'Project milestone completed',
    description: 'Client approved milestone 2 of "Mobile App UI Design"',
    timestamp: '4 min ago',
    actionUrl: '/projects/789',
  },
  {
    id: 4,
    category: 'system',
    readStatus: false,
    title: 'Profile verification required',
    description: 'Please verify your identity to continue using premium features',
    timestamp: '5 min ago',
    actionUrl: '/profile/verification',
  },
  {
    id: 5,
    category: 'client',
    readStatus: false,
    title: 'New message from Sarah Wilson',
    description: 'Sarah sent you a message about the ongoing project timeline',
    timestamp: '6 min ago',
    actionUrl: '/messages/sarah-wilson',
  },
  {
    id: 6,
    category: 'gig',
    readStatus: false,
    title: 'Contract extension offer',
    description: 'Mike Johnson wants to extend your contract for 3 more months with increased budget',
    timestamp: '7 min ago',
    actionUrl: '/contracts/extension/101',
  },
]

/**
 * NotificationList Component
 * Displays a list of notifications with different categories
 * Migrated from src_old/components/NotificationList/NotificationList.jsx
 */
const NotificationList: React.FC<NotificationListProps> = ({
  onClick,
  isPopper = false,
  notifications: propNotifications
}) => {
  const [notifications, setNotifications] = useState<Notification[]>(
    propNotifications || defaultNotifications
  )

  // Mark all notifications as read
  const handleMarkAllRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, readStatus: true }))
    )
  }

  // Toggle read/unread status for a single notification
  const handleSingleRead = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id
          ? { ...notification, readStatus: !notification.readStatus }
          : notification
      )
    )
  }

  // Count unread notifications
  const unreadCount = notifications.filter(notif => !notif.readStatus).length

  // Group notifications by category for better organization
  const groupedNotifications = notifications.reduce((acc, notification) => {
    if (!acc[notification.category]) {
      acc[notification.category] = []
    }
    acc[notification.category].push(notification)
    return acc
  }, {} as Record<NotificationCategory, Notification[]>)

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h2" fontWeight="bold">
            Notifications
          </Typography>
          {unreadCount > 0 && (
            <Typography variant="body2" color="primary">
              {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </Typography>
          )}
        </Box>

        {isPopper && (
          <Button
            component={Link}
            href="/notifications"
            onClick={onClick}
            color="primary"
            size="small"
            sx={{ mr: 1 }}
          >
            See All
          </Button>
        )}

        {/* Action buttons */}
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton
            onClick={handleMarkAllRead}
            size="small"
            color="primary"
            title="Mark all as read"
            disabled={unreadCount === 0}
          >
            <CheckBoxIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="/profile/settings/notifications"
            onClick={onClick}
            size="small"
            color="primary"
            title="Notification settings"
          >
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Notifications List */}
      <Box
        sx={{
          maxHeight: isPopper ? 400 : 'none',
          overflow: 'auto',
        }}
      >
        {notifications.length === 0 ? (
          <Box
            sx={{
              p: 4,
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            <Typography variant="body1">No notifications</Typography>
            <Typography variant="body2">
              You're all caught up!
            </Typography>
          </Box>
        ) : (
          <Grid container>
            {notifications.map((notification, index) => (
              <React.Fragment key={notification.id}>
                {index > 0 && (
                  <Grid item xs={12}>
                    <Divider sx={{ mx: 2 }} />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <NotificationBlock
                    {...notification}
                    onClick={() => handleSingleRead(notification.id)}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        )}
      </Box>

      {/* Category Summary (for full page view) */}
      {!isPopper && notifications.length > 0 && (
        <Box sx={{ p: 2, backgroundColor: 'grey.50' }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Notification Summary
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {Object.entries(groupedNotifications).map(([category, items]) => (
              <Typography key={category} variant="caption" color="text.secondary">
                {category.charAt(0).toUpperCase() + category.slice(1)}: {items.length}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default NotificationList

