import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// Types for the process state
export interface ProcessState {
  encrypt: boolean
  text: string
  cypher: string
}

// Types for the entire store
interface AppState {
  // Hydration state for SSR compatibility
  _hasHydrated: boolean
  
  // Process state
  process: ProcessState
  
  // Process actions
  setProcess: (encrypt: boolean, text: string, cypher: string) => void
  resetProcess: () => void
  
  // User state (for future expansion)
  user: {
    id: string | null
    username: string | null
    isAuthenticated: boolean
  }
  
  // User actions
  setUser: (id: string, username: string) => void
  logout: () => void
  
  // UI state
  ui: {
    sidebarOpen: boolean
    theme: 'light' | 'dark'
    loading: boolean
  }
  
  // UI actions
  toggleSidebar: () => void
  setTheme: (theme: 'light' | 'dark') => void
  setLoading: (loading: boolean) => void
  
  // Hydration action
  setHasHydrated: (hasHydrated: boolean) => void
}

// Initial state
const initialState = {
  _hasHydrated: false,
  process: {
    encrypt: false,
    text: '',
    cypher: '',
  },
  user: {
    id: null,
    username: null,
    isAuthenticated: false,
  },
  ui: {
    sidebarOpen: false,
    theme: 'light' as const,
    loading: false,
  },
}

// Create the store with TypeScript support
export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        
        // Process actions
        setProcess: (encrypt: boolean, text: string, cypher: string) =>
          set(
            (state) => ({
              process: { encrypt, text, cypher },
            }),
            false,
            'setProcess'
          ),
        
        resetProcess: () =>
          set(
            (state) => ({
              process: initialState.process,
            }),
            false,
            'resetProcess'
          ),
        
        // User actions
        setUser: (id: string, username: string) =>
          set(
            (state) => ({
              user: {
                id,
                username,
                isAuthenticated: true,
              },
            }),
            false,
            'setUser'
          ),
        
        logout: () =>
          set(
            (state) => ({
              user: initialState.user,
            }),
            false,
            'logout'
          ),
        
        // UI actions
        toggleSidebar: () =>
          set(
            (state) => ({
              ui: {
                ...state.ui,
                sidebarOpen: !state.ui.sidebarOpen,
              },
            }),
            false,
            'toggleSidebar'
          ),
        
        setTheme: (theme: 'light' | 'dark') =>
          set(
            (state) => ({
              ui: {
                ...state.ui,
                theme,
              },
            }),
            false,
            'setTheme'
          ),
        
        setLoading: (loading: boolean) =>
          set(
            (state) => ({
              ui: {
                ...state.ui,
                loading,
              },
            }),
            false,
            'setLoading'
          ),
        
        // Hydration action
        setHasHydrated: (hasHydrated: boolean) =>
          set(
            { _hasHydrated: hasHydrated },
            false,
            'setHasHydrated'
          ),
      }),
      {
        name: 'jam-app-store', // unique name for localStorage
        partialize: (state) => ({
          user: state.user,
          ui: {
            theme: state.ui.theme,
            sidebarOpen: state.ui.sidebarOpen,
          },
        }), // only persist user and some UI state
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true)
        },
      }
    ),
    {
      name: 'jam-app-store', // name for Redux DevTools
    }
  )
)

// Selectors for better performance and reusability
export const useProcess = () => useAppStore((state) => state.process)
export const useProcessActions = () => useAppStore((state) => ({
  setProcess: state.setProcess,
  resetProcess: state.resetProcess,
}))

export const useUser = () => useAppStore((state) => state.user)
export const useUserActions = () => useAppStore((state) => ({
  setUser: state.setUser,
  logout: state.logout,
}))

export const useUI = () => useAppStore((state) => state.ui)
export const useUIActions = () => useAppStore((state) => ({
  toggleSidebar: state.toggleSidebar,
  setTheme: state.setTheme,
  setLoading: state.setLoading,
}))

// Type exports for use in components
export type { AppState }
