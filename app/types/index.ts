// Global type definitions for the Jam application

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'client' | 'freelancer' | 'admin'
  createdAt: Date
  updatedAt: Date
}

export interface Job {
  id: string
  title: string
  description: string
  budget: number
  category: string
  skills: string[]
  clientId: string
  status: 'open' | 'in_progress' | 'completed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

export interface Proposal {
  id: string
  jobId: string
  freelancerId: string
  coverLetter: string
  proposedRate: number
  estimatedDuration: string
  status: 'pending' | 'accepted' | 'rejected'
  createdAt: Date
  updatedAt: Date
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  icon?: string
  children?: NavItem[]
}

// Form types
export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox'
  required?: boolean
  options?: { label: string; value: string }[]
}

// Theme types
export interface ThemeConfig {
  mode: 'light' | 'dark'
  primaryColor: string
  secondaryColor: string
}

// Store types (for Zustand)
export interface AppState {
  user: User | null
  theme: ThemeConfig
  isLoading: boolean
  error: string | null
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
}

export interface JobsState {
  jobs: Job[]
  currentJob: Job | null
  filters: {
    category?: string
    budget?: [number, number]
    skills?: string[]
  }
}

// Component prop types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export interface ModalProps extends BaseComponentProps {
  open: boolean
  onClose: () => void
  title?: string
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

