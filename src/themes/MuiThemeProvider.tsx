/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import { ThemeProvider } from '@mui/material/styles'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { getTheme } from './theme'

type Theme = 'light' | 'dark'

interface MuiThemeProps {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<MuiThemeProps>({
    theme: 'light',
    toggleTheme: () => {},
})

export const MuiThemeProvider = ({ initialTheme, children }: { initialTheme: Theme; children: ReactNode }) => {
    const [theme, setTheme] = useState(initialTheme)

    useEffect(() => {
        if (theme) {
            const maxAge = 365 * 24 * 60 * 60
            document.cookie = `theme=${theme};path=/;max-age=${maxAge};`
            document.querySelector('html')?.setAttribute('data-theme', theme)
        } else {
            setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={getTheme(theme)}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}

/**
 *
 * @returns {MuiThemeProps}
 */
export const useTheme = (): MuiThemeProps => {
    return useContext(ThemeContext)
}
