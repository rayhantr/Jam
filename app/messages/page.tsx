'use client'

import { Metadata } from 'next'
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Paper,
  IconButton,
  Badge,
  Chip,
  InputAdornment,
  Fab,
} from '@mui/material'
import {
  Send,
  Search,
  Add,
  AttachFile,
  EmojiEmotions,
  MoreVert,
  Circle,
  Star,
  Archive,
  Delete,
  Reply,
} from '@mui/icons-material'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Messages',
  description: 'Communicate with clients and freelancers',
}

// Types
interface Message {
  id: string
  senderId: string
  senderName: string
  senderAvatar?: string
  content: string
  timestamp: string
  read: boolean
}

interface Conversation {
  id: string
  participantId: string
  participantName: string
  participantAvatar?: string
  participantRole: 'client' | 'freelancer'
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
  isOnline: boolean
  projectTitle?: string
  messages: Message[]
}

// Mock data
const mockConversations: Conversation[] = [
  {
    id: '1',
    participantId: '1',
    participantName: 'Sarah Johnson',
    participantRole: 'client',
    lastMessage: 'Thanks for the update on the project. Looking forward to the next milestone.',
    lastMessageTime: '2024-06-15T10:30:00Z',
    unreadCount: 2,
    isOnline: true,
    projectTitle: 'E-commerce Website',
    messages: [
      {
        id: '1',
        senderId: '1',
        senderName: 'Sarah Johnson',
        content: 'Hi! How is the project progressing?',
        timestamp: '2024-06-15T09:00:00Z',
        read: true,
      },
      {
        id: '2',
        senderId: 'me',
        senderName: 'You',
        content: 'Great! I\'ve completed the homepage design and working on the product catalog now.',
        timestamp: '2024-06-15T09:15:00Z',
        read: true,
      },
      {
        id: '3',
        senderId: '1',
        senderName: 'Sarah Johnson',
        content: 'Thanks for the update on the project. Looking forward to the next milestone.',
        timestamp: '2024-06-15T10:30:00Z',
        read: false,
      },
    ],
  },
  {
    id: '2',
    participantId: '2',
    participantName: 'Mike Chen',
    participantRole: 'client',
    lastMessage: 'Can we schedule a call to discuss the requirements?',
    lastMessageTime: '2024-06-14T16:45:00Z',
    unreadCount: 0,
    isOnline: false,
    projectTitle: 'Mobile App Design',
    messages: [
      {
        id: '4',
        senderId: '2',
        senderName: 'Mike Chen',
        content: 'Can we schedule a call to discuss the requirements?',
        timestamp: '2024-06-14T16:45:00Z',
        read: true,
      },
    ],
  },
  {
    id: '3',
    participantId: '3',
    participantName: 'Emma Davis',
    participantRole: 'freelancer',
    lastMessage: 'I have some questions about the collaboration opportunity.',
    lastMessageTime: '2024-06-14T14:20:00Z',
    unreadCount: 1,
    isOnline: true,
    messages: [
      {
        id: '5',
        senderId: '3',
        senderName: 'Emma Davis',
        content: 'I have some questions about the collaboration opportunity.',
        timestamp: '2024-06-14T14:20:00Z',
        read: false,
      },
    ],
  },
]

function ConversationList({ 
  conversations, 
  selectedConversation, 
  onSelectConversation,
  searchQuery,
  onSearchChange 
}: {
  conversations: Conversation[]
  selectedConversation: string | null
  onSelectConversation: (id: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}) {
  const filteredConversations = conversations.filter(conv =>
    conv.participantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <Card elevation={1} sx={{ height: '100%' }}>
      <CardHeader 
        title="Messages" 
        action={
          <IconButton>
            <Add />
          </IconButton>
        }
      />
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            size="small"
          />
        </Box>
        
        <List sx={{ p: 0 }}>
          {filteredConversations.length === 0 ? (
            <ListItem>
              <ListItemText
                primary="No conversations found"
                secondary="Start a new conversation or adjust your search"
                sx={{ textAlign: 'center' }}
              />
            </ListItem>
          ) : (
            filteredConversations.map((conversation) => (
              <Box key={conversation.id}>
                <ListItem
                  button
                  selected={selectedConversation === conversation.id}
                  onClick={() => onSelectConversation(conversation.id)}
                  sx={{
                    '&.Mui-selected': {
                      backgroundColor: 'primary.50',
                      borderRight: 3,
                      borderRightColor: 'primary.main',
                    },
                  }}
                >
                  <ListItemAvatar>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeContent={
                        conversation.isOnline ? (
                          <Circle sx={{ color: 'success.main', fontSize: 12 }} />
                        ) : null
                      }
                    >
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {conversation.participantName.charAt(0)}
                      </Avatar>
                    </Badge>
                  </ListItemAvatar>
                  
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="subtitle2" fontWeight="bold">
                          {conversation.participantName}
                        </Typography>
                        <Chip
                          label={conversation.participantRole}
                          size="small"
                          variant="outlined"
                          color={conversation.participantRole === 'client' ? 'primary' : 'info'}
                        />
                      </Box>
                    }
                    secondary={
                      <Box>
                        {conversation.projectTitle && (
                          <Typography variant="caption" color="text.secondary">
                            {conversation.projectTitle}
                          </Typography>
                        )}
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          noWrap
                          sx={{ mt: 0.5 }}
                        >
                          {conversation.lastMessage}
                        </Typography>
                      </Box>
                    }
                  />
                  
                  <ListItemSecondaryAction>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="caption" color="text.secondary">
                        {formatTime(conversation.lastMessageTime)}
                      </Typography>
                      {conversation.unreadCount > 0 && (
                        <Badge
                          badgeContent={conversation.unreadCount}
                          color="primary"
                          sx={{ mt: 1, display: 'block' }}
                        />
                      )}
                    </Box>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </Box>
            ))
          )}
        </List>
      </CardContent>
    </Card>
  )
}

function MessageThread({ 
  conversation, 
  newMessage, 
  onNewMessageChange, 
  onSendMessage 
}: {
  conversation: Conversation | null
  newMessage: string
  onNewMessageChange: (message: string) => void
  onSendMessage: () => void
}) {
  if (!conversation) {
    return (
      <Card elevation={1} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center', color: 'text.secondary' }}>
          <Typography variant="h6" gutterBottom>
            Select a conversation
          </Typography>
          <Typography variant="body2">
            Choose a conversation from the list to start messaging
          </Typography>
        </Box>
      </Card>
    )
  }

  const formatMessageTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <Card elevation={1} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Conversation Header */}
      <CardHeader
        avatar={
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              conversation.isOnline ? (
                <Circle sx={{ color: 'success.main', fontSize: 12 }} />
              ) : null
            }
          >
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              {conversation.participantName.charAt(0)}
            </Avatar>
          </Badge>
        }
        title={
          <Box>
            <Typography variant="h6">
              {conversation.participantName}
            </Typography>
            {conversation.projectTitle && (
              <Typography variant="body2" color="text.secondary">
                Project: {conversation.projectTitle}
              </Typography>
            )}
          </Box>
        }
        action={
          <Box>
            <IconButton>
              <Star />
            </IconButton>
            <IconButton>
              <Archive />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </Box>
        }
      />
      
      <Divider />
      
      {/* Messages */}
      <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto', maxHeight: '400px' }}>
        {conversation.messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: 'flex',
              justifyContent: message.senderId === 'me' ? 'flex-end' : 'flex-start',
              mb: 2,
            }}
          >
            <Paper
              elevation={1}
              sx={{
                p: 2,
                maxWidth: '70%',
                backgroundColor: message.senderId === 'me' ? 'primary.main' : 'grey.100',
                color: message.senderId === 'me' ? 'white' : 'text.primary',
              }}
            >
              <Typography variant="body2">
                {message.content}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  mt: 1,
                  opacity: 0.8,
                }}
              >
                {formatMessageTime(message.timestamp)}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
      
      <Divider />
      
      {/* Message Input */}
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
          <TextField
            fullWidth
            multiline
            maxRows={3}
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => onNewMessageChange(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                onSendMessage()
              }
            }}
          />
          <IconButton color="primary">
            <AttachFile />
          </IconButton>
          <IconButton color="primary">
            <EmojiEmotions />
          </IconButton>
          <Button
            variant="contained"
            endIcon={<Send />}
            onClick={onSendMessage}
            disabled={!newMessage.trim()}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Card>
  )
}

export default function MessagesPage() {
  const [conversations, setConversations] = useState<Conversation[]>(mockConversations)
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [newMessage, setNewMessage] = useState('')

  const selectedConv = conversations.find(c => c.id === selectedConversation) || null

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return

    const message: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      senderName: 'You',
      content: newMessage.trim(),
      timestamp: new Date().toISOString(),
      read: true,
    }

    setConversations(prev =>
      prev.map(conv =>
        conv.id === selectedConversation
          ? {
              ...conv,
              messages: [...conv.messages, message],
              lastMessage: message.content,
              lastMessageTime: message.timestamp,
            }
          : conv
      )
    )

    setNewMessage('')
  }

  const totalUnread = conversations.reduce((sum, conv) => sum + conv.unreadCount, 0)

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Messages
            {totalUnread > 0 && (
              <Badge badgeContent={totalUnread} color="primary" sx={{ ml: 2 }} />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Communicate with clients and freelancers
          </Typography>
        </Box>
        
        <Button variant="contained" startIcon={<Add />}>
          New Message
        </Button>
      </Box>

      {/* Messages Interface */}
      <Grid container spacing={3} sx={{ height: '600px' }}>
        <Grid item xs={12} md={4}>
          <ConversationList
            conversations={conversations}
            selectedConversation={selectedConversation}
            onSelectConversation={setSelectedConversation}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </Grid>
        
        <Grid item xs={12} md={8}>
          <MessageThread
            conversation={selectedConv}
            newMessage={newMessage}
            onNewMessageChange={setNewMessage}
            onSendMessage={handleSendMessage}
          />
        </Grid>
      </Grid>

      {/* Floating Action Button for Mobile */}
      <Fab
        color="primary"
        aria-label="new message"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <Add />
      </Fab>
    </Box>
  )
}
