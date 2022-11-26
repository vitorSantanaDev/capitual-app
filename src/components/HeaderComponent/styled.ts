import { styled } from '@mui/system'

import { InputBase, AppBar, Toolbar } from '@mui/material'

export const AppBarCustom = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	boxShadow: 'none',
	borderBottomWidth: 1,
	borderBottomStyle: 'solid',
	borderBottomColor: '#E5E7EB'
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
	display: 'flex',
	borderStyle: 'solid',
	alignItems: 'center',
	borderColor: '#E5E7EB',
	marginLeft: 32,
	backgroundColor: theme.palette.background.default
}))

export const SearchInput = styled(InputBase)(() => ({
	marginLeft: 10,
	fontSize: 16
}))

export const ToolBarCustom = styled(Toolbar)(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
}))
