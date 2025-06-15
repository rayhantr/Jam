import React from 'react'
import { ClickAwayListener, Grow, Popper, PopperProps } from '@mui/material'

interface NavPopperProps extends Omit<PopperProps, 'children'> {
  onClickAway: () => void
  children: React.ReactElement
}

/**
 * NavPopper Component
 * A reusable popper component for navigation dropdowns
 * Migrated from src_old/components/Poppers/NavPopper.jsx
 */
const NavPopper: React.FC<NavPopperProps> = ({ 
  onClickAway, 
  children, 
  placement = 'bottom-end',
  ...other 
}) => {
  return (
    <Popper 
      {...other} 
      placement={placement}
      transition 
      sx={{ 
        zIndex: 1500, 
        mt: 1 
      }}
    >
      {({ TransitionProps }) => (
        <ClickAwayListener onClickAway={onClickAway}>
          <Grow 
            {...TransitionProps} 
            style={{ transformOrigin: 'top right' }} 
            timeout={300}
          >
            {children}
          </Grow>
        </ClickAwayListener>
      )}
    </Popper>
  )
}

export default NavPopper

