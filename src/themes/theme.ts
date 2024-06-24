'use client'
import { ThemeOptions, createTheme } from '@mui/material/styles'
import { typography } from './typography'
import { palette } from './palette'

const getThemeOptions = (mode: 'light' | 'dark') => {
    return {
        palette: palette(mode),
        typography,
    } as ThemeOptions
}

export const getTheme = (mode: 'light' | 'dark') => {
    return createTheme(getThemeOptions(mode))
}
