'use client'


import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Breadcrumbs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Fab,
} from '@mui/material'
import {
  Add,
  Support as SupportIcon,
  MoreVert,
  Message,
  Schedule,
  CheckCircle,
  Error,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'
import FormModal from '@/components/forms/FormModal'
import InputField from '@/components/forms/InputField'
import SelectField from '@/components/forms/SelectField'



// Types
interface SupportTicket {
  id: string
  title: string
  description: string
  status: 'open' | 'in-progress' | 'resolved' | 'closed'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  category: string
  createdDate: string
  updatedDate: string
}

// Mock data
const mockTickets: SupportTicket[] = [
  {
    id: '1',
    title: 'Unable to upload files',
    description: 'Getting error when trying to upload project files',
    status: 'open',
    priority: 'high',
    category: 'Technical',
    createdDate: '2024-06-14',
    updatedDate: '2024-06-14',
  },
  {
    id: '2',
    title: 'Payment processing issue',
    description: 'Payment failed but amount was deducted',
    status: 'in-progress',
    priority: 'urgent',
    category: 'Billing',
    createdDate: '2024-06-13',
    updatedDate: '2024-06-14',
  },
]

function SupportTable({ tickets }: { tickets: SupportTicket[] }) {
  const getStatusColor = (status: SupportTicket['status']) => {
    switch (status) {
      case 'open': return 'info'
      case 'in-progress': return 'warning'
      case 'resolved': return 'success'
      case 'closed': return 'default'
      default: return 'default'
    }
  }

  const getStatusIcon = (status: SupportTicket['status']) => {
    switch (status) {
      case 'open': return <Message />
      case 'in-progress': return <Schedule />
      case 'resolved': return <CheckCircle />
      case 'closed': return <CheckCircle />
      default: return <Message />
    }
  }

  const getPriorityColor = (priority: SupportTicket['priority']) => {
    switch (priority) {
      case 'low': return 'success'
      case 'medium': return 'warning'
      case 'high': return 'error'
      case 'urgent': return 'error'
      default: return 'default'
    }
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ticket</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Updated</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                <Box sx={{ color: 'text.secondary' }}>
                  <SupportIcon sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
                  <Typography variant="body1">
                    No support tickets yet. Create your first ticket if you need help!
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            tickets.map((ticket) => (
              <TableRow key={ticket.id} hover>
                <TableCell>
                  <Box>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {ticket.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {ticket.description}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      #{ticket.id}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{ticket.category}</TableCell>
                <TableCell>
                  <Chip
                    label={ticket.priority}
                    color={getPriorityColor(ticket.priority)}
                    size="small"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    icon={getStatusIcon(ticket.status)}
                    label={ticket.status}
                    color={getStatusColor(ticket.status)}
                    size="small"
                    variant="filled"
                  />
                </TableCell>
                <TableCell>
                  {new Date(ticket.createdDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(ticket.updatedDate).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function SupportStats({ tickets }: { tickets: SupportTicket[] }) {
  const openTickets = tickets.filter(t => t.status === 'open').length
  const inProgressTickets = tickets.filter(t => t.status === 'in-progress').length
  const resolvedTickets = tickets.filter(t => t.status === 'resolved').length
  const urgentTickets = tickets.filter(t => t.priority === 'urgent').length

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Message sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {openTickets}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Open Tickets
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Schedule sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {inProgressTickets}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In Progress
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <CheckCircle sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {resolvedTickets}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Resolved
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Error sx={{ fontSize: 40, color: 'error.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {urgentTickets}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Urgent
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default function SupportPage() {
  const [tickets] = useState<SupportTicket[]>(mockTickets)
  const [createTicketOpen, setCreateTicketOpen] = useState(false)

  const categoryOptions = [
    { value: 'technical', label: 'Technical Issue' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'account', label: 'Account Management' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'other', label: 'Other' },
  ]

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'urgent', label: 'Urgent' },
  ]

  const handleCreateTicket = (values: any) => {
    console.log('Creating support ticket:', values)
    setCreateTicketOpen(false)
    // Here you would typically call an API to create the ticket
  }

  const handleSubmitTicket = () => {
    // For now, just create a dummy ticket
    const dummyValues = {
      title: 'New Support Ticket',
      description: 'Ticket description',
      category: 'general',
      priority: 'medium',
    }
    handleCreateTicket(dummyValues)
  }

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Support
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography color="text.primary">Admin</Typography>
            </Link>
            <Typography color="text.secondary">Support</Typography>
          </Breadcrumbs>
        </Box>
        
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setCreateTicketOpen(true)}
          size="large"
        >
          Create Ticket
        </Button>
      </Box>

      {/* Support Statistics */}
      <SupportStats tickets={tickets} />

      {/* Support Tickets Table */}
      <Grid container>
        <Grid item xs={12}>
          <Card elevation={1}>
            <CardHeader 
              title="Support History" 
              titleTypographyProps={{ variant: 'h6' }}
            />
            <CardContent sx={{ p: 0 }}>
              <SupportTable tickets={tickets} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Create Ticket Modal */}
      <FormModal
        open={createTicketOpen}
        onClose={() => setCreateTicketOpen(false)}
        title="Create a Support Ticket"
        primaryAction={{
          label: 'Create Ticket',
          onClick: handleSubmitTicket,
        }}
        secondaryAction={{
          label: 'Cancel',
          onClick: () => setCreateTicketOpen(false),
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputField
              name="title"
              label="Title"
              placeholder="Enter your issue title"
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <SelectField
              name="category"
              label="Category"
              options={categoryOptions}
              required
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <SelectField
              name="priority"
              label="Priority"
              options={priorityOptions}
              required
            />
          </Grid>
          
          <Grid item xs={12}>
            <InputField
              name="description"
              label="Description"
              placeholder="Describe your issue in detail"
              multiline
              rows={5}
              required
            />
          </Grid>
        </Grid>
      </FormModal>

      {/* Floating Action Button for Mobile */}
      <Fab
        color="primary"
        aria-label="create ticket"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: { xs: 'flex', sm: 'none' },
        }}
        onClick={() => setCreateTicketOpen(true)}
      >
        <Add />
      </Fab>
    </Box>
  )
}
