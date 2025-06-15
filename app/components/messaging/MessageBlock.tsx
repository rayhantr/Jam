'use client'

import React, { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  IconButton,
  Typography,
  Grid,
  Chip
} from '@mui/material'
import {
  MoreVert as MoreVertIcon,
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  Delete as DeleteIcon,
  Flag as FlagIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material'
import Link from 'next/link'
import { Message } from './MessageList'

interface MessageBlockProps extends Message {
  onClick: () => void
}

/**
 * MessageBlock Component
 * Individual message item with actions
 * Migrated from src_old/components/MessageList/MessageBlock.jsx
 */
const MessageBlock: React.FC<MessageBlockProps> = ({
  id,
  sender,
  message,
  timestamp,
  readStatus,
  avatar,
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

  const handleDelete = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    // TODO: Implement delete functionality
    console.log('Delete message:', id)
    closeActions()
  }

  const handleReport = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    // TODO: Implement report functionality
    console.log('Report message:', id)
    closeActions()
  }

  return (
    <Box sx={{ px: 1 }}>
      <Box
        component={Link}
        href={`/messages/${id}`}
        sx={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
          borderRadius: 1,
          transition: 'background-color 0.2s',
        }}
      >
        <Grid container spacing={2} sx={{ p: 2, alignItems: 'flex-start' }}>
          {/* Avatar */}
          <Grid item xs="auto">
            <Avatar
              src={avatar}
              alt={sender}
              sx={{
                width: 48,
                height: 48,
                bgcolor: readStatus ? 'grey.300' : 'primary.main',
              }}
            >
              {sender.charAt(0).toUpperCase()}
            </Avatar>
          </Grid>

          {/* Message Content */}
          <Grid item xs sx={{ minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <Typography
                variant="subtitle1"
                component="h3"
                sx={{
                  fontWeight: readStatus ? 'normal' : 'bold',
                  color: readStatus ? 'text.secondary' : 'text.primary',
                  mr: 1,
                }}
              >
                {sender}
              </Typography>
              {!readStatus && (
                <Chip
                  size="small"
                  label="New"
                  color="primary"
                  sx={{ height: 20, fontSize: '0.75rem' }}
                />
              )}
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: readStatus ? 'text.secondary' : 'text.primary',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: 1.4,
                mb: 1,
              }}
            >
              {message}
            </Typography>

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

          {/* Actions Menu */}
          <Grid item xs="auto">
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
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Collapse in={actionsOpen} timeout={200} unmountOnExit>
          <ClickAwayListener onClickAway={closeActions}>
            <Box sx={{ px: 2, pb: 2 }}>
              <Grid container spacing={1}>
                {/* Mark Read/Unread */}
                <Grid item xs={12} sm={6}>
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
                </Grid>

                {/* Delete */}
                <Grid item xs={6} sm={3}>
                  <Button
                    onClick={handleDelete}
                    variant="outlined"
                    size="small"
                    color="error"
                    fullWidth
                    sx={{
                      minWidth: 'auto',
                      px: 1,
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </Grid>

                {/* Report */}
                <Grid item xs={6} sm={3}>
                  <Button
                    onClick={handleReport}
                    variant="outlined"
                    size="small"
                    color="warning"
                    fullWidth
                    sx={{
                      minWidth: 'auto',
                      px: 1,
                    }}
                  >
                    <FlagIcon />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </ClickAwayListener>
        </Collapse>
      </Box>
    </Box>
  )
}

export default MessageBlock

