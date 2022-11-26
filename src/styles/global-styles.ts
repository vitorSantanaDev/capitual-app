import { createGlobalStyle } from 'styled-components'
import { themeColors, themeFonts } from './theme'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: ${themeColors.GRAY_LIGHT};
    font-family: ${themeFonts.DEFAULT};
  }
  html, body {
    height: 100%;
  }
`

export default GlobalStyles
