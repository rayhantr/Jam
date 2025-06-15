import { createTheme } from '@mui/material/styles'

export const globalCss = {
  fontSize: '1rem',
  lineHeight: '1.5',
  pTb: '0.375rem',
  colorBody: '#fafbfe',
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },

  typography: {
    fontFamily: [
      '"Poppins"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  palette: {
    primary: {
      main: '#00cad9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2d6478',
    },
    tonalOffset: 0.1,
  },

  components: {
    // MUI v5 uses 'components' instead of 'overrides'
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: globalCss.fontSize,
          lineHeight: globalCss.lineHeight,
          paddingTop: `calc(${globalCss.pTb} + 1px)`,
          paddingBottom: `calc(${globalCss.pTb} + 1px)`,
          textTransform: 'capitalize',
          minWidth: 'auto',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          padding: '0.75rem 1rem',
          fontSize: globalCss.fontSize,
          textTransform: 'capitalize',
          '@media (min-width: 0px)': {
            minWidth: 'auto',
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          marginLeft: '1rem',
          maxWidth: '2.5rem',
          height: '0.3rem',
          borderTopLeftRadius: '0.3rem',
          borderTopRightRadius: '0.3rem',
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '0.5em',
          height: 'auto',
          fontSize: globalCss.fontSize,
          lineHeight: globalCss.lineHeight,
          paddingTop: globalCss.pTb,
          paddingBottom: globalCss.pTb,
        },
        sizeSmall: {
          height: 'auto',
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem',
          fontSize: '0.8125rem',
        },
      },
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#2d6478',
          minWidth: '2.5rem',
          height: '2.5rem',
        },
        sizeSmall: {
          margin: '0 0.25rem',
          height: '1.75rem',
          minWidth: '1.75rem',
        },
      },
    },

    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: '#00cad9',
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: '1rem',
          borderRadius: '0.5rem',
        },
        bar: {
          borderRadius: '0.5rem',
        },
      },
    },

    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(50, 57, 66, .9)',
        },
      },
    },
  },
})

