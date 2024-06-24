'use client'
import { useTheme as useContextTheme } from '@/themes/MuiThemeProvider'
import { Button, Container } from '@mui/material'

export default function Home() {
    const { toggleTheme } = useContextTheme()
    return (
        <Container
            maxWidth="lg"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}
        >
            <Button
                variant="contained"
                onClick={() => toggleTheme()}
            >
                Theme
            </Button>
        </Container>
    )
}
