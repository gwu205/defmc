import Typography from "typography"
import bootstrapTheme from "typography-theme-bootstrap"
bootstrapTheme.headerFontFamily = ['DM Sans', 'sans-serif']
bootstrapTheme.bodyFontFamily = ['DM Sans', 'sans-serif']

bootstrapTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete bootstrapTheme.googleFonts

const typography = new Typography(bootstrapTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
