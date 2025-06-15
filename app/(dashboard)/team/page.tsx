'use client'


import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Breadcrumbs,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  IconButton,
  Button,
  AvatarGroup,
} from '@mui/material'
import {
  People,
  Group,
  Handshake,
  Add,
  MoreVert,
  Email,
  Phone,
} from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'



// Types
interface TeamMember {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  avatar?: string
  joinDate: string
}

interface TeamGroup {
  id: string
  name: string
  description: string
  members: TeamMember[]
  createdDate: string
}

// Mock data
const mockMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Project Manager',
    status: 'active',
    joinDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'Developer',
    status: 'active',
    joinDate: '2024-02-01',
  },
]

const mockGroups: TeamGroup[] = [
  {
    id: '1',
    name: 'Development Team',
    description: 'Core development team for web applications',
    members: mockMembers,
    createdDate: '2024-01-10',
  },
]

function TabPanel({ children, value, index }: { children: React.ReactNode, value: number, index: number }) {
  return (
    <div hidden={value !== index}>
      {value === index && children}
    </div>
  )
}

function MembersTable({ members }: { members: TeamMember[] }) {
  const getStatusColor = (status: TeamMember['status']) => {
    switch (status) {
      case 'active': return 'success'
      case 'inactive': return 'error'
      case 'pending': return 'warning'
      default: return 'default'
    }
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Member</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Join Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                <Box sx={{ color: 'text.secondary' }}>
                  <People sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
                  <Typography variant="body1">
                    No team members yet. Invite your first team member!
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            members.map((member) => (
              <TableRow key={member.id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      {member.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>
                  <Chip
                    label={member.status}
                    color={getStatusColor(member.status)}
                    size="small"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>
                  {new Date(member.joinDate).toLocaleDateString()}
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small">
                    <Email />
                  </IconButton>
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

function GroupsTable({ groups }: { groups: TeamGroup[] }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Group Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Members</TableCell>
            <TableCell>Created</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groups.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                <Box sx={{ color: 'text.secondary' }}>
                  <Group sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
                  <Typography variant="body1">
                    No groups created yet. Create your first team group!
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            groups.map((group) => (
              <TableRow key={group.id} hover>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {group.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {group.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                      {group.members.map((member) => (
                        <Avatar key={member.id} sx={{ bgcolor: 'primary.main' }}>
                          {member.name.charAt(0)}
                        </Avatar>
                      ))}
                    </AvatarGroup>
                    <Typography variant="body2" color="text.secondary">
                      {group.members.length} members
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  {new Date(group.createdDate).toLocaleDateString()}
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

function CollaborationPanel() {
  return (
    <Box sx={{ textAlign: 'center', py: 8, color: 'text.secondary' }}>
      <Handshake sx={{ fontSize: 64, mb: 2, opacity: 0.5 }} />
      <Typography variant="h6" gutterBottom>
        Collaboration Tools
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Team collaboration features will be available here
      </Typography>
      <Button variant="outlined" startIcon={<Add />}>
        Set up Collaboration
      </Button>
    </Box>
  )
}

export default function TeamPage() {
  const [tabValue, setTabValue] = useState(0)
  const [members] = useState<TeamMember[]>(mockMembers)
  const [groups] = useState<TeamGroup[]>(mockGroups)

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Team
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography color="text.primary">Admin</Typography>
            </Link>
            <Typography color="text.secondary">Team</Typography>
          </Breadcrumbs>
        </Box>
        
        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
        >
          Invite Member
        </Button>
      </Box>

      {/* Team Statistics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card elevation={1}>
            <CardContent sx={{ textAlign: 'center' }}>
              <People sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h4" fontWeight="bold">
                {members.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Team Members
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Card elevation={1}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Group sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
              <Typography variant="h4" fontWeight="bold">
                {groups.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active Groups
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Card elevation={1}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Handshake sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
              <Typography variant="h4" fontWeight="bold">
                0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Collaborations
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Team Tabs */}
      <Grid container>
        <Grid item xs={12}>
          <Card elevation={1}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Members" icon={<People />} iconPosition="start" />
                <Tab label="Groups" icon={<Group />} iconPosition="start" />
                <Tab label="Collaboration" icon={<Handshake />} iconPosition="start" />
              </Tabs>
            </Box>
            
            <TabPanel value={tabValue} index={0}>
              <CardContent sx={{ p: 0 }}>
                <MembersTable members={members} />
              </CardContent>
            </TabPanel>
            
            <TabPanel value={tabValue} index={1}>
              <CardContent sx={{ p: 0 }}>
                <GroupsTable groups={groups} />
              </CardContent>
            </TabPanel>
            
            <TabPanel value={tabValue} index={2}>
              <CardContent>
                <CollaborationPanel />
              </CardContent>
            </TabPanel>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
