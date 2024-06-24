'use client'

import { useTheme } from '@mui/material'
import NextTopLoader from 'nextjs-toploader'

const ProgressBar = () => {
    const theme = useTheme()
    return <NextTopLoader color={theme.palette.main.darker} />
}

export default ProgressBar
