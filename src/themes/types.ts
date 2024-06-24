import '@mui/material/styles'
import '@mui/material/Button'
import { ColorType } from './palette'

//* Typescript
declare module '@mui/material/styles/createTypography' {
    interface TypographyOptions {
        fontFamilySecondary?: string
    }

    interface Typography {
        fontFamilySecondary: string
    }
}

//* Global Color when using theme.palette
declare module '@mui/material/styles' {
    interface Palette {
        main: ColorType
    }

    interface PaletteOptions {
        main?: ColorType
    }
}

//* Component Suggestion
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        main: true
    }
}
