import { createGlobalStyle } from 'styled-components'
import { GlobalTheme } from './theme/global-theme'

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
		font-family: ${GlobalTheme.typography.fontFamily};
		background-color: ${GlobalTheme.palette.background.default};
  }

  html, body {
    height: 100%;
  }
`

export default GlobalStyles
