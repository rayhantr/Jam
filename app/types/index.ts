/**
 * Global TypeScript type definitions for the Jam application
 * These types are used across multiple components and modules
 */

// ============================================================================
// COMMON TYPES
// ============================================================================

export interface BaseProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface ComponentWithId extends BaseProps {
  id?: string
}

// ============================================================================
// USER TYPES
// ============================================================================

export interface User {
  id: string
  username: string
  email: string
  firstName?: string
  lastName?: string
  avatar?: string
  role: 'freelancer' | 'client' | 'admin'
  isOnline?: boolean
  lastSeen?: Date
  createdAt: Date
  updatedAt: Date
}

export interface UserProfile extends User {
  bio?: string
  skills?: string[]
  hourlyRate?: number
  location?: string
  portfolio?: PortfolioItem[]
  reviews?: Review[]
  rating?: number
  totalJobs?: number
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  imageUrl?: string
  projectUrl?: string
  technologies: string[]
  createdAt: Date
}

export interface Review {
  id: string
  rating: number
  comment: string
  reviewerId: string
  reviewerName: string
  projectId?: string
  createdAt: Date
}

// ============================================================================
// MESSAGE & CHAT TYPES
// ============================================================================

export interface Message {
  id: string
  userId: string
  username: string
  text: string
  roomname?: string
  timestamp: Date
  isEncrypted?: boolean
  messageType?: 'text' | 'file' | 'image' | 'system'
}

export interface ChatRoom {
  id: string
  name: string
  participants: User[]
  lastMessage?: Message
  unreadCount?: number
  createdAt: Date
  updatedAt: Date
}

export interface SocketData {
  userId: string
  username: string
  text: string
  roomname?: string
  timestamp?: Date
}

// ============================================================================
// JOB & PROJECT TYPES
// ============================================================================

export interface Job {
  id: string
  title: string
  description: string
  budget: {
    min: number
    max: number
    type: 'fixed' | 'hourly'
  }
  skills: string[]
  clientId: string
  clientName: string
  status: 'open' | 'in_progress' | 'completed' | 'cancelled'
  proposals?: Proposal[]
  createdAt: Date
  updatedAt: Date
  deadline?: Date
}

export interface Proposal {
  id: string
  jobId: string
  freelancerId: string
  freelancerName: string
  coverLetter: string
  proposedRate: number
  estimatedDuration: string
  status: 'pending' | 'accepted' | 'rejected'
  createdAt: Date
}

// ============================================================================
// FORM TYPES
// ============================================================================

export interface FormFieldProps extends BaseProps {
  label?: string
  error?: string
  required?: boolean
  disabled?: boolean
  helperText?: string
}

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

export interface FormSelectProps extends FormFieldProps {
  options: SelectOption[]
  value: string | number
  onChange: (value: string | number) => void
  multiple?: boolean
}

// ============================================================================
// NAVIGATION TYPES
// ============================================================================

export interface NavItem {
  id: number | string
  path: string
  title: string
  icon?: React.ComponentType<any>
  badge?: number
  children?: NavItem[]
  exact?: boolean
}

export interface RouteConfig {
  path: string
  component: React.ComponentType<any>
  exact?: boolean
  private?: boolean
  roles?: string[]
}

// ============================================================================
// UI STATE TYPES
// ============================================================================

export interface NotificationItem {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  timestamp: Date
  read: boolean
  actionUrl?: string
}

export interface ModalState {
  isOpen: boolean
  title?: string
  content?: React.ReactNode
  onClose?: () => void
  onConfirm?: () => void
}

// ============================================================================
// API TYPES
// ============================================================================

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  errors?: Record<string, string[]>
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ApiError {
  message: string
  status: number
  code?: string
}

// ============================================================================
// COMPONENT PROP TYPES
// ============================================================================

export interface ButtonProps extends BaseProps {
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps extends BaseProps {
  title?: string
  subtitle?: string
  actions?: React.ReactNode
  elevation?: number
}

export interface TableColumn<T = any> {
  key: keyof T | string
  title: string
  width?: string | number
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  render?: (value: any, record: T, index: number) => React.ReactNode
}

export interface TableProps<T = any> extends BaseProps {
  data: T[]
  columns: TableColumn<T>[]
  loading?: boolean
  pagination?: {
    page: number
    pageSize: number
    total: number
    onChange: (page: number, pageSize: number) => void
  }
  onRowClick?: (record: T, index: number) => void
}

// ============================================================================
// EVENT TYPES
// ============================================================================

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
export type SelectChangeEvent = React.ChangeEvent<{ value: unknown }>
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement>

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

// Generic component props with ref forwarding
export type ComponentPropsWithRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>

// Extract props from a component
export type PropsOf<T extends React.ComponentType<any>> = T extends React.ComponentType<infer P> ? P : never

