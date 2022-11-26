import * as React from 'react'
import * as M from '@mui/material'
import * as S from './styled'

const App: React.FC = () => {
	return (
		<S.AppWrapper>
			<M.Button className="button" variant="contained">
				Hello World
			</M.Button>
		</S.AppWrapper>
	)
}

export default App
