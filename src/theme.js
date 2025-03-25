import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#1976d2' }
      }
      // spacing: (factor) => `${0.25 * factor}rem`
    },
    dark: {
      palette: {
        primary: { main: '#ff5252' }
      }
      // spacing: (factor) => `${0.25 * factor}rem`
    }
  }
})

export default theme