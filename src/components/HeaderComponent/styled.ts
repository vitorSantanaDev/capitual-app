import { styled } from '@mui/system'

import { InputBase } from '@mui/material'

export const HeaderWrapper = styled('header')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	paddingLeft: 15,
	paddingRight: 15,
	paddingTop: 15,
	paddingBottom: 15,
	display: 'flex',
	alignItems: 'center',
	borderBottom: 1,
	borderStyle: 'solid',
	borderColor: '#E5E7EB',
	justifyContent: 'space-between'
}))

export const SearchInputWrapper = styled('div')(({ theme }) => ({
	width: '100%',
	minWidth: 402,
	maxWidth: 402,
	paddingTop: 8,
	paddingLeft: 15,
	paddingRight: 15,
	paddingBottom: 8,
	borderWidth: 1,
	borderRadius: 16,
	borderStyle: 'solid',
	borderColor: '#E5E7EB',
	backgroundColor: theme.palette.background.default,
	display: 'flex',
	alignItems: 'center'
}))

export const SearchInput = styled(InputBase)(() => ({
	marginLeft: 10,
	fontSize: 16
}))

export const HeaderContentLeft = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	gap: 32
}))

export const HeaderRight = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	gap: 12
}))

export const MenuButton = styled('button')(() => ({
	padding: 10,
	border: 'none',
	cursor: 'pointer',
	backgroundColor: 'transparent'
}))
