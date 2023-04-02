import { useMemo } from 'react'
// @mui
import { CssBaseline } from '@mui/material'
import {
    createTheme,
    StyledEngineProvider,
    ThemeOptions,
    ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles'
// components
// import { useSettingsContext } from '../components/settings'
//
import palette from './palette'
import typography from './typography'
import shadows from './shadows'
import customShadows from './customShadows'
import componentsOverride from './overrides'
import GlobalStyles from './globalStyles'

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode
}

const themeMode = 'light'
const themeDirection = 'ltr'

export const ThemeProvider = ({ children }: Props) => {
    // const { themeMode, themeDirection } = useSettingsContext()

    const themeOptions: ThemeOptions = useMemo(
        () => ({
            palette: palette(themeMode),
            typography,
            shape: { borderRadius: 8 },
            direction: themeDirection,
            shadows: shadows(themeMode),
            customShadows: customShadows(themeMode),
        }),
        [],
    )

    const theme = createTheme(themeOptions)

    theme.components = componentsOverride(theme)

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    )
}
