import '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
  }

  interface DeprecatedThemeOptions {
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    white: Palette['primary']
    yellow: Palette['primary']
    border: Palette['primary']
  }

  interface PaletteOptions {
    white: PaletteOptions['primary']
    yellow: PaletteOptions['primary']
    border: PaletteOptions['primary']
  }

}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true
    // yellow: true
    // border: true
  }
}
