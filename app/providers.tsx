'use client'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { theme } from './theme'
import { StoreProvider } from './store/provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StoreProvider>
          {children}
        </StoreProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
