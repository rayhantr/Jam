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
  Tabs,
  Tab,
  LinearProgress,
  Avatar,
  Divider,
} from '@mui/material'
import {
  Add,
  Edit,
  Delete,
  Visibility,
  Schedule,
  CheckCircle,
  Cancel,
  AttachMoney,
  Assignment,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'

// Types
interface Proposal {
  id: string
  projectTitle: string
  client: string
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn'
  submittedDate: string
  budget: number
  timeline: string
  coverLetter: string
  attachments?: string[]
}

// Mock data
const mockProposals: Proposal[] = [
  {
    id: '1',
    projectTitle: 'E-commerce Website Development',
    client: 'TechCorp Inc.',
    status: 'pending',
    submittedDate: '2024-06-10',
    budget: 5000,
    timeline: '6 weeks',
    coverLetter: 'I am excited to work on your e-commerce project...',
  },
  {
    id: '2',
    projectTitle: 'Mobile App UI/UX Design',
    client: 'StartupXYZ',
    status: 'accepted',
    submittedDate: '2024-06-05',
    budget: 3000,
    timeline: '4 weeks',
    coverLetter: 'With my experience in mobile design...',
  },
  {
    id: '3',
    projectTitle: 'Website Redesign',
    client: 'Local Business',
    status: 'rejected',
    submittedDate: '2024-06-01',
    budget: 2000,
    timeline: '3 weeks',
    coverLetter: 'I would love to help redesign your website...',
  },
]

function TabPanel({ children, value, index }: { children: React.ReactNode, value: number, index: number }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  )
}

function ProposalsTable({ proposals, status }: { proposals: Proposal[], status?: string }) {
  const filteredProposals = status ? proposals.filter(p => p.status === status) : proposals

  const getStatusColor = (status: Proposal['status']) => {
    switch (status) {
      case 'pending': return 'warning'
      case 'accepted': return 'success'
      case 'rejected': return 'error'
      case 'withdrawn': return 'default'
      default: return 'default'
    }
  }

  const getStatusIcon = (status: Proposal['status']) => {
    switch (status) {
      case 'pending': return <Schedule />
      case 'accepted': return <CheckCircle />
      case 'rejected': return <Cancel />
      case 'withdrawn': return <Cancel />
      default: return <Schedule />
    }
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Budget</TableCell>
            <TableCell>Timeline</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Submitted</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProposals.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                <Box sx={{ color: 'text.secondary' }}>
                  <Assignment sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
                  <Typography variant="body1">
                    {status ? `No ${status} proposals` : 'No proposals yet'}
                  </Typography>
                  <Typography variant="body2">
                    Start applying to projects to build your proposal history
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            filteredProposals.map((proposal) => (
              <TableRow key={proposal.id} hover>
                <TableCell>
                  <Box>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {proposal.projectTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {proposal.coverLetter.substring(0, 50)}...
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                      {proposal.client.charAt(0)}
                    </Avatar>
                    {proposal.client}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AttachMoney sx={{ fontSize: 16, color: 'success.main' }} />
                    <Typography variant="body2" fontWeight="bold">
                      ${proposal.budget.toLocaleString()}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{proposal.timeline}</TableCell>
                <TableCell>
                  <Chip
                    icon={getStatusIcon(proposal.status)}
                    label={proposal.status}
                    color={getStatusColor(proposal.status)}
                    size="small"
                    variant="filled"
                  />
                </TableCell>
                <TableCell>
                  {new Date(proposal.submittedDate).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small" title="View Details">
                    <Visibility />
                  </IconButton>
                  {proposal.status === 'pending' && (
                    <IconButton size="small" title="Edit Proposal">
                      <Edit />
                    </IconButton>
                  )}
                  <IconButton size="small" title="Delete" color="error">
                    <Delete />
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

function ProposalStats({ proposals }: { proposals: Proposal[] }) {
  const totalProposals = proposals.length
  const pendingProposals = proposals.filter(p => p.status === 'pending').length
  const acceptedProposals = proposals.filter(p => p.status === 'accepted').length
  const rejectedProposals = proposals.filter(p => p.status === 'rejected').length
  
  const successRate = totalProposals > 0 ? (acceptedProposals / totalProposals) * 100 : 0
  const totalValue = proposals.filter(p => p.status === 'accepted').reduce((sum, p) => sum + p.budget, 0)

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Assignment sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {totalProposals}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Proposals
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Schedule sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {pendingProposals}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pending
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <CheckCircle sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              {successRate.toFixed(0)}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Success Rate
            </Typography>
            <LinearProgress
              variant="determinate"
              value={successRate}
              sx={{ mt: 1, height: 6, borderRadius: 3 }}
              color="success"
            />
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Card elevation={1}>
          <CardContent sx={{ textAlign: 'center' }}>
            <AttachMoney sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
            <Typography variant="h4" fontWeight="bold">
              ${totalValue.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Value Won
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default function ProposalsPage() {
  const [tabValue, setTabValue] = useState(0)
  const [proposals] = useState<Proposal[]>(mockProposals)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            My Proposals
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography color="text.primary">Profile</Typography>
            </Link>
            <Typography color="text.secondary">Proposals</Typography>
          </Breadcrumbs>
        </Box>
        
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
        >
          Browse Projects
        </Button>
      </Box>

      {/* Proposal Statistics */}
      <ProposalStats proposals={proposals} />

      {/* Proposals Table with Tabs */}
      <Card elevation={1}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="All Proposals" />
            <Tab label="Pending" />
            <Tab label="Accepted" />
            <Tab label="Rejected" />
          </Tabs>
        </Box>
        
        <TabPanel value={tabValue} index={0}>
          <ProposalsTable proposals={proposals} />
        </TabPanel>
        
        <TabPanel value={tabValue} index={1}>
          <ProposalsTable proposals={proposals} status="pending" />
        </TabPanel>
        
        <TabPanel value={tabValue} index={2}>
          <ProposalsTable proposals={proposals} status="accepted" />
        </TabPanel>
        
        <TabPanel value={tabValue} index={3}>
          <ProposalsTable proposals={proposals} status="rejected" />
        </TabPanel>
      </Card>
    </Box>
  )
}
