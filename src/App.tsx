import * as React from 'react'

import { ThemeProvider } from '@mui/material'

import { HomeTemplate } from './templates'
import { HeaderComponent, LateralMenuComponent } from './components'

import { GlobalTheme } from './styles/theme/global-theme'

const App: React.FC = () => {
	return (
		<ThemeProvider theme={GlobalTheme}>
			<HeaderComponent />
			<LateralMenuComponent>
				<HomeTemplate />
			</LateralMenuComponent>
		</ThemeProvider>
	)
}

export default App
