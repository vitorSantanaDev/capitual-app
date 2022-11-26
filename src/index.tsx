import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import GlobalStyles from './styles/global-styles'

import LateralMenuContext from './contexts/LateralMenuContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<LateralMenuContext>
			<GlobalStyles />
			<App />
		</LateralMenuContext>
	</React.StrictMode>
)
