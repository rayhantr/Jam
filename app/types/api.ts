/**
 * API-specific TypeScript type definitions
 * These types define the structure of API requests and responses
 */

import { User, Job, Message, Proposal, NotificationItem } from './index'

// ============================================================================
// BASE API TYPES
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  errors?: Record<string, string[]>
  timestamp?: string
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export interface ApiError {
  message: string
  status: number
  code?: string
  details?: any
}

// ============================================================================
// AUTHENTICATION API TYPES
// ============================================================================

export interface LoginRequest {
  email: string
  password: string
  rememberMe?: boolean
}

export interface LoginResponse extends ApiResponse<{
  user: User
  token: string
  refreshToken: string
  expiresIn: number
}> {}

export interface RegisterRequest {
  email: string
  password: string
  confirmPassword: string
  firstName: string
  lastName: string
  role: 'freelancer' | 'client'
  agreeToTerms: boolean
}

export interface RegisterResponse extends ApiResponse<{
  user: User
  token: string
  refreshToken: string
}> {}

export interface RefreshTokenRequest {
  refreshToken: string
}

export interface RefreshTokenResponse extends ApiResponse<{
  token: string
  refreshToken: string
  expiresIn: number
}> {}

export interface ForgotPasswordRequest {
  email: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
  confirmPassword: string
}

// ============================================================================
// USER API TYPES
// ============================================================================

export interface GetUserResponse extends ApiResponse<User> {}

export interface UpdateUserRequest {
  firstName?: string
  lastName?: string
  bio?: string
  location?: string
  skills?: string[]
  hourlyRate?: number
  avatar?: File
}

export interface UpdateUserResponse extends ApiResponse<User> {}

export interface GetUsersRequest {
  page?: number
  limit?: number
  search?: string
  role?: 'freelancer' | 'client' | 'admin'
  skills?: string[]
  location?: string
  minRate?: number
  maxRate?: number
  sortBy?: 'name' | 'rating' | 'hourlyRate' | 'createdAt'
  sortOrder?: 'asc' | 'desc'
}

export interface GetUsersResponse extends PaginatedResponse<User> {}

// ============================================================================
// JOB API TYPES
// ============================================================================

export interface CreateJobRequest {
  title: string
  description: string
  budget: {
    min: number
    max: number
    type: 'fixed' | 'hourly'
  }
  skills: string[]
  deadline?: string
  attachments?: File[]
}

export interface CreateJobResponse extends ApiResponse<Job> {}

export interface UpdateJobRequest extends Partial<CreateJobRequest> {
  status?: 'open' | 'in_progress' | 'completed' | 'cancelled'
}

export interface UpdateJobResponse extends ApiResponse<Job> {}

export interface GetJobsRequest {
  page?: number
  limit?: number
  search?: string
  skills?: string[]
  budgetMin?: number
  budgetMax?: number
  budgetType?: 'fixed' | 'hourly'
  status?: 'open' | 'in_progress' | 'completed' | 'cancelled'
  clientId?: string
  sortBy?: 'createdAt' | 'budget' | 'deadline' | 'title'
  sortOrder?: 'asc' | 'desc'
}

export interface GetJobsResponse extends PaginatedResponse<Job> {}

export interface GetJobResponse extends ApiResponse<Job> {}

// ============================================================================
// PROPOSAL API TYPES
// ============================================================================

export interface CreateProposalRequest {
  jobId: string
  coverLetter: string
  proposedRate: number
  estimatedDuration: string
  attachments?: File[]
}

export interface CreateProposalResponse extends ApiResponse<Proposal> {}

export interface UpdateProposalRequest {
  coverLetter?: string
  proposedRate?: number
  estimatedDuration?: string
  status?: 'pending' | 'accepted' | 'rejected'
}

export interface UpdateProposalResponse extends ApiResponse<Proposal> {}

export interface GetProposalsRequest {
  page?: number
  limit?: number
  jobId?: string
  freelancerId?: string
  status?: 'pending' | 'accepted' | 'rejected'
  sortBy?: 'createdAt' | 'proposedRate'
  sortOrder?: 'asc' | 'desc'
}

export interface GetProposalsResponse extends PaginatedResponse<Proposal> {}

// ============================================================================
// MESSAGE API TYPES
// ============================================================================

export interface SendMessageRequest {
  roomname: string
  text: string
  messageType?: 'text' | 'file' | 'image'
  attachments?: File[]
}

export interface SendMessageResponse extends ApiResponse<Message> {}

export interface GetMessagesRequest {
  roomname: string
  page?: number
  limit?: number
  before?: string // timestamp
  after?: string // timestamp
}

export interface GetMessagesResponse extends PaginatedResponse<Message> {}

export interface GetChatRoomsRequest {
  page?: number
  limit?: number
  search?: string
}

export interface GetChatRoomsResponse extends PaginatedResponse<{
  id: string
  name: string
  participants: User[]
  lastMessage?: Message
  unreadCount: number
  createdAt: string
  updatedAt: string
}> {}

export interface CreateChatRoomRequest {
  name?: string
  participantIds: string[]
}

export interface CreateChatRoomResponse extends ApiResponse<{
  id: string
  name: string
  participants: User[]
  createdAt: string
}> {}

// ============================================================================
// NOTIFICATION API TYPES
// ============================================================================

export interface GetNotificationsRequest {
  page?: number
  limit?: number
  read?: boolean
  type?: 'job' | 'message' | 'proposal' | 'system'
}

export interface GetNotificationsResponse extends PaginatedResponse<NotificationItem> {}

export interface MarkNotificationReadRequest {
  notificationId: string
}

export interface MarkNotificationReadResponse extends ApiResponse<NotificationItem> {}

export interface MarkAllNotificationsReadResponse extends ApiResponse<{
  updatedCount: number
}> {}

// ============================================================================
// FILE UPLOAD API TYPES
// ============================================================================

export interface UploadFileRequest {
  file: File
  type: 'avatar' | 'attachment' | 'portfolio' | 'document'
}

export interface UploadFileResponse extends ApiResponse<{
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  thumbnailUrl?: string
  uploadedAt: string
}> {}

export interface UploadMultipleFilesRequest {
  files: File[]
  type: 'avatar' | 'attachment' | 'portfolio' | 'document'
}

export interface UploadMultipleFilesResponse extends ApiResponse<Array<{
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  thumbnailUrl?: string
  uploadedAt: string
}>> {}

// ============================================================================
// ADMIN API TYPES
// ============================================================================

export interface GetDashboardStatsResponse extends ApiResponse<{
  totalUsers: number
  totalJobs: number
  totalProposals: number
  activeUsers: number
  revenueThisMonth: number
  userGrowth: {
    value: number
    direction: 'up' | 'down'
    period: string
  }
  jobGrowth: {
    value: number
    direction: 'up' | 'down'
    period: string
  }
}> {}

export interface GetSystemInfoResponse extends ApiResponse<{
  version: string
  environment: string
  uptime: number
  memoryUsage: {
    used: number
    total: number
    percentage: number
  }
  databaseStatus: 'connected' | 'disconnected'
  redisStatus: 'connected' | 'disconnected'
}> {}

// ============================================================================
// SEARCH API TYPES
// ============================================================================

export interface SearchRequest {
  query: string
  type?: 'users' | 'jobs' | 'all'
  filters?: {
    skills?: string[]
    location?: string
    budgetRange?: [number, number]
    rating?: number
  }
  page?: number
  limit?: number
}

export interface SearchResponse extends ApiResponse<{
  users?: User[]
  jobs?: Job[]
  total: number
  took: number // search time in ms
}> {}

// ============================================================================
// WEBSOCKET API TYPES
// ============================================================================

export interface SocketMessage {
  type: 'message' | 'notification' | 'user_status' | 'typing' | 'system'
  data: any
  timestamp: string
  userId?: string
  roomname?: string
}

export interface SocketAuth {
  token: string
  userId: string
}

export interface SocketJoinRoom {
  roomname: string
  username: string
}

export interface SocketLeaveRoom {
  roomname: string
}

export interface SocketTyping {
  roomname: string
  username: string
  isTyping: boolean
}

