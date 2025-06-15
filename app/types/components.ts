/**
 * Component-specific TypeScript type definitions
 * These types are specific to individual components and their props
 */

import { BaseProps, User, Message, Job, NavItem } from './index'

// ============================================================================
// BUTTON COMPONENTS
// ============================================================================

export interface BtnLinkProps extends BaseProps {
  color?: 'primary' | 'secondary' | 'default'
  href?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  variant?: 'text' | 'outlined' | 'contained'
}

export interface BtnIconProps extends BaseProps {
  icon: React.ReactNode
  color?: 'primary' | 'secondary' | 'default' | 'inherit'
  size?: 'small' | 'medium' | 'large'
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  tooltip?: string
  edge?: 'start' | 'end' | false
}

// ============================================================================
// NAVIGATION COMPONENTS
// ============================================================================

export interface TopNavProps extends BaseProps {
  user?: User
  onMenuClick?: () => void
  onNotificationClick?: () => void
  onProfileClick?: () => void
  onLogout?: () => void
  notificationCount?: number
}

export interface BottomNavProps extends BaseProps {
  currentPath: string
  onNavigate?: (path: string) => void
  items: NavItem[]
}

export interface SideNavProps extends BaseProps {
  open: boolean
  onClose?: () => void
  items: NavItem[]
  currentPath: string
  user?: User
  variant?: 'permanent' | 'persistent' | 'temporary'
}

export interface MiniSideNavProps extends BaseProps {
  items: NavItem[]
  currentPath: string
  onItemClick?: (item: NavItem) => void
}

// ============================================================================
// MESSAGE COMPONENTS
// ============================================================================

export interface ChatWindowProps extends BaseProps {
  username: string
  roomname: string
  socket: any // Socket.IO socket instance
  onMessageSend?: (message: string) => void
}

export interface MessageBlockProps extends BaseProps {
  message: Message
  isOwn?: boolean
  showAvatar?: boolean
  showTimestamp?: boolean
}

export interface MessageListProps extends BaseProps {
  messages: Message[]
  loading?: boolean
  onLoadMore?: () => void
  hasMore?: boolean
  currentUser?: User
}

export interface MessageLoginProps extends BaseProps {
  onLogin: (username: string, roomname: string) => void
  loading?: boolean
  error?: string
}

// ============================================================================
// FORM COMPONENTS
// ============================================================================

export interface FormFieldProps extends BaseProps {
  label?: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  error?: string
  helperText?: string
  required?: boolean
  disabled?: boolean
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  placeholder?: string
  multiline?: boolean
  rows?: number
  maxRows?: number
  autoFocus?: boolean
  autoComplete?: string
}

export interface SelectFieldProps extends BaseProps {
  label?: string
  name: string
  value: string | number
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  options: Array<{ value: string | number; label: string; disabled?: boolean }>
  error?: string
  helperText?: string
  required?: boolean
  disabled?: boolean
  multiple?: boolean
  placeholder?: string
}

// ============================================================================
// MODAL COMPONENTS
// ============================================================================

export interface ModalProps extends BaseProps {
  open: boolean
  onClose: () => void
  title?: string
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  fullScreen?: boolean
  disableBackdropClick?: boolean
  disableEscapeKeyDown?: boolean
}

export interface ConfirmModalProps extends ModalProps {
  message: string
  onConfirm: () => void
  onCancel?: () => void
  confirmText?: string
  cancelText?: string
  severity?: 'info' | 'warning' | 'error' | 'success'
}

// ============================================================================
// ALERT COMPONENTS
// ============================================================================

export interface AlertProps extends BaseProps {
  severity: 'error' | 'warning' | 'info' | 'success'
  title?: string
  message: string
  onClose?: () => void
  action?: React.ReactNode
  variant?: 'filled' | 'outlined' | 'standard'
}

export interface NotificationProps extends BaseProps {
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  onClose?: () => void
  action?: React.ReactNode
}

// ============================================================================
// HEADER COMPONENTS
// ============================================================================

export interface HeaderProps extends BaseProps {
  title: string
  subtitle?: string
  actions?: React.ReactNode
  breadcrumbs?: Array<{ label: string; href?: string }>
  showBackButton?: boolean
  onBackClick?: () => void
}

// ============================================================================
// FOOTER COMPONENTS
// ============================================================================

export interface FooterProps extends BaseProps {
  links?: Array<{ label: string; href: string }>
  socialLinks?: Array<{ platform: string; href: string; icon: React.ReactNode }>
  copyright?: string
  showSocial?: boolean
}

// ============================================================================
// TABLE COMPONENTS
// ============================================================================

export interface TableColumn<T = any> {
  key: keyof T | string
  title: string
  width?: string | number
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  render?: (value: any, record: T, index: number) => React.ReactNode
}

export interface DataTableProps<T = any> extends BaseProps {
  data: T[]
  columns: TableColumn<T>[]
  loading?: boolean
  pagination?: {
    page: number
    pageSize: number
    total: number
    onChange: (page: number, pageSize: number) => void
  }
  sorting?: {
    field: keyof T | string
    direction: 'asc' | 'desc'
    onChange: (field: keyof T | string, direction: 'asc' | 'desc') => void
  }
  selection?: {
    selectedRows: T[]
    onSelectionChange: (selectedRows: T[]) => void
    multiple?: boolean
  }
  onRowClick?: (record: T, index: number) => void
  emptyMessage?: string
}

// ============================================================================
// CHIP COMPONENTS
// ============================================================================

export interface ChipProps extends BaseProps {
  label: string
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  variant?: 'filled' | 'outlined'
  size?: 'small' | 'medium'
  icon?: React.ReactElement
  deleteIcon?: React.ReactElement
  onDelete?: () => void
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  clickable?: boolean
  disabled?: boolean
}

// ============================================================================
// TABS COMPONENTS
// ============================================================================

export interface TabItem {
  label: string
  value: string | number
  icon?: React.ReactNode
  disabled?: boolean
  badge?: number
}

export interface TabsProps extends BaseProps {
  value: string | number
  onChange: (value: string | number) => void
  items: TabItem[]
  orientation?: 'horizontal' | 'vertical'
  variant?: 'standard' | 'scrollable' | 'fullWidth'
  centered?: boolean
}

// ============================================================================
// PRICING CARD COMPONENTS
// ============================================================================

export interface PricingCardProps extends BaseProps {
  title: string
  price: number
  currency?: string
  period?: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
  onButtonClick?: () => void
  popular?: boolean
  description?: string
}

// ============================================================================
// USER COMPONENTS
// ============================================================================

export interface UserAvatarProps extends BaseProps {
  user: User
  size?: 'small' | 'medium' | 'large' | number
  showOnlineStatus?: boolean
  onClick?: () => void
  alt?: string
}

export interface UserCardProps extends BaseProps {
  user: User
  showActions?: boolean
  onViewProfile?: () => void
  onSendMessage?: () => void
  onHire?: () => void
  compact?: boolean
}

// ============================================================================
// ADMIN COMPONENTS
// ============================================================================

export interface AdminStatsCardProps extends BaseProps {
  title: string
  value: string | number
  icon: React.ReactNode
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  trend?: {
    value: number
    direction: 'up' | 'down'
    period: string
  }
}

// ============================================================================
// POPPER COMPONENTS
// ============================================================================

export interface PopperProps extends BaseProps {
  open: boolean
  anchorEl: HTMLElement | null
  onClose: () => void
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  arrow?: boolean
  disablePortal?: boolean
}

export interface MenuPopperProps extends PopperProps {
  items: Array<{
    label: string
    icon?: React.ReactNode
    onClick: () => void
    disabled?: boolean
    divider?: boolean
  }>
}

