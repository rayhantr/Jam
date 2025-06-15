/**
 * Action creators for backward compatibility with existing Redux code
 * These maintain the same API as the original Redux actions
 */

// Process actions (compatible with existing store/action/index.js)
export const process = (encrypt: boolean, text: string, cypher: string) => ({
  type: 'PROCESS' as const,
  payload: {
    encrypt,
    text,
    cypher,
  },
})

export const resetProcess = () => ({
  type: 'RESET_PROCESS' as const,
})

// User actions (new, for future use)
export const setUser = (id: string, username: string) => ({
  type: 'SET_USER' as const,
  payload: {
    id,
    username,
  },
})

export const logout = () => ({
  type: 'LOGOUT' as const,
})

// UI actions (new, for future use)
export const toggleSidebar = () => ({
  type: 'TOGGLE_SIDEBAR' as const,
})

export const setTheme = (theme: 'light' | 'dark') => ({
  type: 'SET_THEME' as const,
  payload: {
    theme,
  },
})

export const setLoading = (loading: boolean) => ({
  type: 'SET_LOADING' as const,
  payload: {
    loading,
  },
})

// Action types for TypeScript
export type ProcessAction = ReturnType<typeof process>
export type ResetProcessAction = ReturnType<typeof resetProcess>
export type SetUserAction = ReturnType<typeof setUser>
export type LogoutAction = ReturnType<typeof logout>
export type ToggleSidebarAction = ReturnType<typeof toggleSidebar>
export type SetThemeAction = ReturnType<typeof setTheme>
export type SetLoadingAction = ReturnType<typeof setLoading>

export type AppAction = 
  | ProcessAction
  | ResetProcessAction
  | SetUserAction
  | LogoutAction
  | ToggleSidebarAction
  | SetThemeAction
  | SetLoadingAction

