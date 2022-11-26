import * as React from 'react'
import * as M from '@mui/material'
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
		<S.HeaderWrapper>
			{smallDown ? (
				<S.MenuButton onClick={toggleLateralMenuOpen}>
					<MenuIcon />
				</S.MenuButton>
			) : (
				<S.HeaderContentLeft>
					<Logo />
					<S.SearchInputWrapper>
						<SearchIcon />
						<S.SearchInput placeholder="Search" />
					</S.SearchInputWrapper>
				</S.HeaderContentLeft>
			)}
			<S.HeaderRight>
				<BellIcon />
				<M.Avatar alt="User" src={PersonPhoto} />
			</S.HeaderRight>
		</S.HeaderWrapper>
	)
}

export default HeaderComponent
