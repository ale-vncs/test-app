import '../typings/@material-ui.d'
import { createTheme } from '@mui/material'
import { useMemo } from 'react'
import themeColors from './themeColors'

const useCustomTheme = (isDark: boolean) => {
  const colors = themeColors(isDark)
  return useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: 'Nunito, sans-serif',
          button: {
            textTransform: 'none'
          }
        },
        palette: {
          mode: isDark ? 'dark' : 'light',
          primary: {
            main: colors.primary
          },
          secondary: {
            main: colors.secondary
          },
          warning: {
            main: colors.warning
          },
          error: {
            main: colors.error
          },
          white: {
            main: colors.white
          },
          yellow: {
            main: colors.yellow
          },
          background: {
            default: colors.background,
            paper: colors.paper
          },
          border: {
            main: colors.border
          }
        }
      }),
    [isDark]
  )
}

export default useCustomTheme
