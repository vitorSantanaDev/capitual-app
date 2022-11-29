import React from 'react'
import * as M from '@mui/material'

import * as S from './styled'

const FooterComponent: React.FC = () => {
	const theme = M.useTheme()
	const smallDwon = M.useMediaQuery(theme.breakpoints.down('sm'))
	return (
		<S.FooterWrapper>
			<S.FooterContent sx={{ fontSize: smallDwon ? 12 : 16 }}>
				© 2021 Themesberg, LLC. All rights reserved.
			</S.FooterContent>
		</S.FooterWrapper>
	)
}

export default FooterComponent
