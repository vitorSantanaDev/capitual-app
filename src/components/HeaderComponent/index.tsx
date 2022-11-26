import * as React from 'react'
import * as M from '@mui/material'
import * as MS from '@mui/system'
import * as S from './styled'

import { LateralMenuProvider } from '../../contexts'

import PersonPhoto from '../../assets/images/person.jpg'
import { ReactComponent as Logo } from '../../assets/images/Logo.svg'
import { ReactComponent as BellIcon } from '../../assets/images/bell.svg'
import { ReactComponent as SearchIcon } from '../../assets/images/search.svg'
import { ReactComponent as MenuIcon } from '../../assets/images/menu-icon.svg'

const HeaderComponent: React.FC = () => {
	const theme = M.useTheme()
	const smallDown = M.useMediaQuery(theme.breakpoints.down('sm'))
	const { toggleLateralMenuOpen } = React.useContext(LateralMenuProvider)

	return (
		<S.AppBarCustom>
			<S.ToolBarCustom>
				{smallDown ? (
					<MS.Box alignItems="center">
						<M.IconButton onClick={toggleLateralMenuOpen}>
							<MenuIcon />
						</M.IconButton>
					</MS.Box>
				) : (
					<MS.Box display="flex" alignItems="center">
						<Logo />
						<S.SearchInputWrapper>
							<SearchIcon />
							<S.SearchInput placeholder="Search" />
						</S.SearchInputWrapper>
					</MS.Box>
				)}
				<MS.Box display="flex" alignItems="center">
					<BellIcon />
					<M.Avatar style={{ marginLeft: 12 }} alt="User" src={PersonPhoto} />
				</MS.Box>
			</S.ToolBarCustom>
		</S.AppBarCustom>
	)
}

export default HeaderComponent
