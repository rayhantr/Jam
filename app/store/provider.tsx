'use client'

import { useEffect } from 'react'
import { useAppStore } from './index'

/**
 * Store Provider Component
 * Initializes the Zustand store and provides it to the app
 * This component handles any store initialization logic
 */
export function StoreProvider({ children }: { children: React.ReactNode }) {
  const { setLoading } = useAppStore()

  useEffect(() => {
    // Initialize store on mount
    // Set initial loading state to false
    setLoading(false)
    
    // Any other initialization logic can go here
    console.log('🏪 Zustand store initialized')
  }, [setLoading])

  return <>{children}</>
}

/**
 * Store Hydration Component
 * Handles client-side hydration for persisted state
 * This prevents hydration mismatches with SSR
 */
export function StoreHydration({ children }: { children: React.ReactNode }) {
  const hasHydrated = useAppStore((state) => state._hasHydrated)

  // Show loading or skeleton while hydrating
  if (!hasHydrated) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '18px',
        color: '#666'
      }}>
        Loading...
      </div>
    )
  }

  return <>{children}</>
}

