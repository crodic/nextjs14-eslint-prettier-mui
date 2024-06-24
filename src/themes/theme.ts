'use client'
import { ThemeOptions, createTheme } from '@mui/material/styles'
import { typography } from './typography'
import { palette } from './palette'
import breakpoints from './breakpoints'

const getThemeOptions = (mode: 'light' | 'dark') => {
    return {
        breakpoints: breakpoints(),
        palette: palette(mode),
        typography,
    } as ThemeOptions
}

export const getTheme = (mode: 'light' | 'dark') => {
    return createTheme(getThemeOptions(mode))
}
