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
  Edit as EditIcon
} from '@mui/icons-material'
import Link from 'next/link'
import MessageBlock from './MessageBlock'

// Types
export interface Message {
  id: number
  readStatus: boolean
  sender: string
  message: string
  timestamp: string
  avatar?: string
}

interface MessageListProps {
  onClick?: () => void
  isPopper?: boolean
  messages?: Message[]
}

// Default mock messages
const defaultMessages: Message[] = [
  {
    id: 1,
    readStatus: false,
    sender: 'John Doe',
    message: 'Hey! I saw your proposal for the React project. Would love to discuss the details with you.',
    timestamp: '2 min ago',
  },
  {
    id: 2,
    readStatus: true,
    sender: 'Sarah Wilson',
    message: 'Thanks for the quick turnaround on the design mockups!',
    timestamp: '3 min ago',
  },
  {
    id: 3,
    readStatus: true,
    sender: 'Mike Johnson',
    message: 'Can we schedule a call to discuss the project requirements?',
    timestamp: '4 min ago',
  },
  {
    id: 4,
    readStatus: false,
    sender: 'Emily Chen',
    message: 'Your portfolio looks impressive. Interested in a long-term collaboration.',
    timestamp: '5 min ago',
  },
  {
    id: 5,
    readStatus: false,
    sender: 'David Brown',
    message: 'The website is live! Great work on the responsive design.',
    timestamp: '6 min ago',
  },
  {
    id: 6,
    readStatus: false,
    sender: 'Lisa Garcia',
    message: 'Quick question about the API integration - when can we expect completion?',
    timestamp: '7 min ago',
  },
]

/**
 * MessageList Component
 * Displays a list of messages with read/unread status
 * Migrated from src_old/components/MessageList/MessageList.jsx
 */
const MessageList: React.FC<MessageListProps> = ({
  onClick,
  isPopper = false,
  messages: propMessages
}) => {
  const [messages, setMessages] = useState<Message[]>(propMessages || defaultMessages)

  // Mark all messages as read
  const handleMarkAllRead = () => {
    setMessages(prevMessages =>
      prevMessages.map(message => ({ ...message, readStatus: true }))
    )
  }

  // Toggle read/unread status for a single message
  const handleSingleRead = (id: number) => {
    setMessages(prevMessages =>
      prevMessages.map(message =>
        message.id === id
          ? { ...message, readStatus: !message.readStatus }
          : message
      )
    )
  }

  // Count unread messages
  const unreadCount = messages.filter(msg => !msg.readStatus).length

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
            Messages
          </Typography>
          {unreadCount > 0 && (
            <Typography variant="body2" color="primary">
              {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
            </Typography>
          )}
        </Box>

        {isPopper && (
          <Button
            component={Link}
            href="/messages"
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
            size="small"
            color="primary"
            title="Compose new message"
          >
            <EditIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Messages List */}
      <Box
        sx={{
          maxHeight: isPopper ? 400 : 'none',
          overflow: 'auto',
        }}
      >
        {messages.length === 0 ? (
          <Box
            sx={{
              p: 4,
              textAlign: 'center',
              color: 'text.secondary',
            }}
          >
            <Typography variant="body1">No messages yet</Typography>
            <Typography variant="body2">
              Your conversations will appear here
            </Typography>
          </Box>
        ) : (
          <Grid container>
            {messages.map((message, index) => (
              <React.Fragment key={message.id}>
                {index > 0 && (
                  <Grid item xs={12}>
                    <Divider sx={{ mx: 2 }} />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <MessageBlock
                    {...message}
                    onClick={() => handleSingleRead(message.id)}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  )
}

export default MessageList

