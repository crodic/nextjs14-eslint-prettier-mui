'use client'
import { useTheme as useContextTheme } from '@/themes/MuiThemeProvider'
import { Box, Button } from '@mui/material'

export default function Home() {
    const { toggleTheme } = useContextTheme()
    return (
        <Box>
            <Button onClick={() => toggleTheme()}>Change</Button>
        </Box>
    )
}
