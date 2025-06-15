import { useAppStore, ProcessState } from './index'

/**
 * Redux-compatible hooks for easier migration
 * These hooks provide the same API as useSelector and useDispatch
 * to minimize changes needed in existing components
 */

// Equivalent to useSelector from react-redux
export const useSelector = <T>(selector: (state: any) => T): T => {
  const store = useAppStore()
  
  // Map the Zustand store to Redux-like structure for compatibility
  const reduxLikeState = {
    ProcessReducer: store.process,
    // Add other reducers here as needed
  }
  
  return selector(reduxLikeState)
}

// Equivalent to useDispatch from react-redux
export const useDispatch = () => {
  const { setProcess, resetProcess, setUser, logout, toggleSidebar, setTheme, setLoading } = useAppStore()
  
  // Return a dispatch function that handles Redux-style actions
  return (action: any) => {
    switch (action.type) {
      case 'PROCESS':
        setProcess(action.payload.encrypt, action.payload.text, action.payload.cypher)
        break
      
      case 'RESET_PROCESS':
        resetProcess()
        break
      
      case 'SET_USER':
        setUser(action.payload.id, action.payload.username)
        break
      
      case 'LOGOUT':
        logout()
        break
      
      case 'TOGGLE_SIDEBAR':
        toggleSidebar()
        break
      
      case 'SET_THEME':
        setTheme(action.payload.theme)
        break
      
      case 'SET_LOADING':
        setLoading(action.payload.loading)
        break
      
      default:
        console.warn(`Unknown action type: ${action.type}`)
    }
  }
}

// Action creators for compatibility with existing code
export const processAction = (encrypt: boolean, text: string, cypher: string) => ({
  type: 'PROCESS',
  payload: { encrypt, text, cypher }
})

export const resetProcessAction = () => ({
  type: 'RESET_PROCESS'
})

export const setUserAction = (id: string, username: string) => ({
  type: 'SET_USER',
  payload: { id, username }
})

export const logoutAction = () => ({
  type: 'LOGOUT'
})

export const toggleSidebarAction = () => ({
  type: 'TOGGLE_SIDEBAR'
})

export const setThemeAction = (theme: 'light' | 'dark') => ({
  type: 'SET_THEME',
  payload: { theme }
})

export const setLoadingAction = (loading: boolean) => ({
  type: 'SET_LOADING',
  payload: { loading }
})

/**
 * Modern Zustand hooks (recommended for new components)
 */
export { 
  useProcess, 
  useProcessActions, 
  useUser, 
  useUserActions, 
  useUI, 
  useUIActions,
  useAppStore 
} from './index'

