import { ReactNode } from 'react'
import { ThemeProvider } from '../theme'

export const withTheme = (component: () => ReactNode) => () => <ThemeProvider>{component()}</ThemeProvider>
