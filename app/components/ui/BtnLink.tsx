import React from 'react'
import { Button } from '@mui/material'

interface BtnLinkProps {
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  href?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  variant?: 'text' | 'outlined' | 'contained'
}

/**
 * BtnLink Component
 * A simple button component with link styling
 * Migrated from src_old/components/Buttons/BtnLink.jsx
 */
const BtnLink: React.FC<BtnLinkProps> = ({ 
  color = 'primary', 
  children, 
  className,
  style,
  ...other 
}) => {
  return (
    <Button 
      color={color} 
      className={className}
      style={{ 
        padding: '0 0.5rem', 
        lineHeight: 'auto',
        ...style 
      }} 
      disableElevation 
      {...other}
    >
      {children}
    </Button>
  )
}

export default BtnLink
