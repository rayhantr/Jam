import React, { useState, useRef } from 'react'
import { 
  Button, 
  IconButton, 
  Popover, 
  Paper, 
  Typography, 
  Box,
  MenuList,
  MenuItem,
  Tooltip
} from '@mui/material'
import { 
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
  Share as ShareIcon,
  Link as LinkIcon,
  Help as HelpIcon,
  FavoriteBorder as HeartIcon,
  ThumbDown as UnlikeIcon,
  Close as CloseIcon
} from '@mui/icons-material'
import { BtnIconProps } from '../../types/components'

/**
 * Icon mapping for different icon types
 * Using Material-UI icons instead of FontAwesome
 */
const ICON_MAP = {
  edit: <EditIcon />,
  add: <AddIcon />,
  delete: <DeleteIcon />,
  'menu-dot': <MoreVertIcon />,
  share: <ShareIcon />,
  link: <LinkIcon />,
  help: <HelpIcon />,
  heart: <HeartIcon />,
  unlike: <UnlikeIcon />,
  close: <CloseIcon />,
} as const

type IconType = keyof typeof ICON_MAP

interface BtnIconExtendedProps {
  iconType?: IconType
  className?: string
  size?: 'small' | 'medium' | 'large'
  color?: 'default' | 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  tooltip?: string
  disabled?: boolean
  style?: React.CSSProperties
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  menuItems?: Array<{
    label: string
    onClick: () => void
    disabled?: boolean
  }>
  onDelete?: () => void
}

/**
 * Delete Confirmation Popover Component
 */
const DeleteConfirmPopover: React.FC<{
  open: boolean
  anchorEl: HTMLElement | null
  onClose: () => void
  onConfirm: () => void
}> = ({ open, anchorEl, onClose, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Paper sx={{ p: 2, maxWidth: 250 }}>
        <Typography variant="body2" gutterBottom>
          Are you sure you want to delete?
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={handleConfirm}
            sx={{ flex: 1 }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={onClose}
            sx={{ flex: 1 }}
          >
            No
          </Button>
        </Box>
      </Paper>
    </Popover>
  )
}

/**
 * Menu Popover Component
 */
const MenuPopover: React.FC<{
  open: boolean
  anchorEl: HTMLElement | null
  onClose: () => void
  items: Array<{
    label: string
    onClick: () => void
    disabled?: boolean
  }>
}> = ({ open, anchorEl, onClose, items }) => {
  const handleItemClick = (onClick: () => void) => {
    onClick()
    onClose()
  }

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Paper>
        <MenuList>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => handleItemClick(item.onClick)}
              disabled={item.disabled}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </Popover>
  )
}

/**
 * BtnIcon Component
 * An icon button with optional popover functionality
 * Migrated and modernized from src_old/components/Buttons/BtnIcon.jsx
 */
const BtnIcon: React.FC<BtnIconExtendedProps> = ({
  iconType = 'edit',
  className,
  size = 'medium',
  color = 'default',
  tooltip,
  menuItems = [],
  onDelete,
  onClick,
  disabled = false,
  style,
  ...other
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  // Get the appropriate icon
  const iconComponent = ICON_MAP[iconType] || ICON_MAP.edit

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return

    if (iconType === 'delete') {
      setAnchorEl(event.currentTarget)
      setShowDeleteConfirm(true)
    } else if (iconType === 'menu-dot' && menuItems.length > 0) {
      setAnchorEl(event.currentTarget)
      setShowMenu(true)
    } else if (onClick) {
      onClick(event)
    }
  }

  const handleDeleteConfirm = () => {
    if (onDelete) {
      onDelete()
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
    setShowDeleteConfirm(false)
    setShowMenu(false)
  }

  const buttonElement = (
    <IconButton
      color={color}
      size={size}
      className={className}
      onClick={handleClick}
      disabled={disabled}
      style={style}
      {...other}
    >
      {iconComponent}
    </IconButton>
  )

  // Wrap with tooltip if provided
  const buttonWithTooltip = tooltip ? (
    <Tooltip title={tooltip}>
      <span>{buttonElement}</span>
    </Tooltip>
  ) : buttonElement

  return (
    <>
      {buttonWithTooltip}
      
      {/* Delete confirmation popover */}
      <DeleteConfirmPopover
        open={showDeleteConfirm}
        anchorEl={anchorEl}
        onClose={handleClose}
        onConfirm={handleDeleteConfirm}
      />
      
      {/* Menu popover */}
      <MenuPopover
        open={showMenu}
        anchorEl={anchorEl}
        onClose={handleClose}
        items={menuItems}
      />
    </>
  )
}

export default BtnIcon
