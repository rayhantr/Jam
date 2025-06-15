'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
  IconButton,
  Divider
} from '@mui/material'
import {
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  EmojiEmotions as EmojiIcon,
  MoreVert as MoreVertIcon
} from '@mui/icons-material'

// Types
export interface ChatMessage {
  id: string
  body: string
  senderId: string
  senderName: string
  timestamp: Date
  isOwn: boolean
}

interface ChatWindowProps {
  recipientId?: string
  recipientName?: string
  recipientAvatar?: string
  currentUserId?: string
  currentUserName?: string
  onSendMessage?: (message: string) => void
  messages?: ChatMessage[]
  isLoading?: boolean
}

// Mock messages for demo
const mockMessages: ChatMessage[] = [
  {
    id: '1',
    body: 'Hi! I saw your proposal for the React project. Looks great!',
    senderId: 'user2',
    senderName: 'John Doe',
    timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    isOwn: false,
  },
  {
    id: '2',
    body: 'Thank you! I\'m excited to work on this project. When can we start?',
    senderId: 'user1',
    senderName: 'You',
    timestamp: new Date(Date.now() - 240000), // 4 minutes ago
    isOwn: true,
  },
  {
    id: '3',
    body: 'We can start as early as next week. Do you have any questions about the requirements?',
    senderId: 'user2',
    senderName: 'John Doe',
    timestamp: new Date(Date.now() - 180000), // 3 minutes ago
    isOwn: false,
  },
  {
    id: '4',
    body: 'Perfect! I have a few questions about the design system and API integration. Can we schedule a call?',
    senderId: 'user1',
    senderName: 'You',
    timestamp: new Date(Date.now() - 120000), // 2 minutes ago
    isOwn: true,
  },
]

/**
 * ChatWindow Component
 * Real-time chat interface with message history
 * Migrated from src_old/components/MessageList/ChatWindow.jsx
 */
const ChatWindow: React.FC<ChatWindowProps> = ({
  recipientId = 'user2',
  recipientName = 'John Doe',
  recipientAvatar,
  currentUserId = 'user1',
  currentUserName = 'You',
  onSendMessage,
  messages: propMessages,
  isLoading = false
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(propMessages || mockMessages)
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  // Handle sending a message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newMessage.trim()) return

    const messageToSend = newMessage.trim()
    const newChatMessage: ChatMessage = {
      id: Date.now().toString(),
      body: messageToSend,
      senderId: currentUserId,
      senderName: currentUserName,
      timestamp: new Date(),
      isOwn: true,
    }

    setMessages(prev => [...prev, newChatMessage])
    setNewMessage('')

    // Call external handler if provided
    if (onSendMessage) {
      onSendMessage(messageToSend)
    }

    // Focus back to input
    inputRef.current?.focus()
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value)
    
    // Simulate typing indicator (in real app, this would be sent via socket)
    if (!isTyping) {
      setIsTyping(true)
      setTimeout(() => setIsTyping(false), 1000)
    }
  }

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <Paper
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* Chat Header */}
      <Box
        sx={{
          p: 2,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Avatar
          src={recipientAvatar}
          alt={recipientName}
          sx={{ width: 40, height: 40 }}
        >
          {recipientName.charAt(0).toUpperCase()}
        </Avatar>
        
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h2">
            {recipientName}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {isTyping ? 'Typing...' : 'Online'}
          </Typography>
        </Box>

        <IconButton
          size="small"
          sx={{ color: 'primary.contrastText' }}
        >
          <MoreVertIcon />
        </IconButton>
      </Box>

      {/* Messages Area */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflow: 'auto',
          backgroundColor: 'grey.50',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: 'flex',
              justifyContent: message.isOwn ? 'flex-end' : 'flex-start',
              mb: 1,
            }}
          >
            <Paper
              elevation={1}
              sx={{
                p: 1.5,
                maxWidth: '70%',
                backgroundColor: message.isOwn ? 'primary.main' : 'white',
                color: message.isOwn ? 'primary.contrastText' : 'text.primary',
                borderRadius: 2,
                borderTopRightRadius: message.isOwn ? 0.5 : 2,
                borderTopLeftRadius: message.isOwn ? 2 : 0.5,
              }}
            >
              <Typography variant="body1" sx={{ mb: 0.5 }}>
                {message.body}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  opacity: 0.7,
                  display: 'block',
                  textAlign: message.isOwn ? 'right' : 'left',
                }}
              >
                {formatTime(message.timestamp)}
              </Typography>
            </Paper>
          </Box>
        ))}
        
        {/* Scroll anchor */}
        <div ref={messagesEndRef} />
      </Box>

      <Divider />

      {/* Message Input */}
      <Box
        component="form"
        onSubmit={handleSendMessage}
        sx={{
          p: 2,
          display: 'flex',
          gap: 1,
          alignItems: 'flex-end',
          backgroundColor: 'white',
        }}
      >
        <IconButton size="small" color="primary">
          <AttachFileIcon />
        </IconButton>
        
        <IconButton size="small" color="primary">
          <EmojiIcon />
        </IconButton>

        <TextField
          ref={inputRef}
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type a message..."
          variant="outlined"
          size="small"
          multiline
          maxRows={4}
          fullWidth
          disabled={isLoading}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={!newMessage.trim() || isLoading}
          sx={{
            minWidth: 'auto',
            px: 2,
            borderRadius: 3,
          }}
        >
          <SendIcon />
        </Button>
      </Box>
    </Paper>
  )
}

export default ChatWindow

