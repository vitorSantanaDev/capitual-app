import { List, ListItem, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const ListCustom = styled(List)(({ theme }) => ({
	padding: 24,
	width: '100%',
	maxWidth: 380.33,
	borderRadius: 16,
	backgroundColor: theme.palette.background.paper,
	maxHeight: 448,
	minHeight: 448,
	overflowY: 'scroll',
	boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
	'&::-webkit-scrollbar': {
		width: 5
	},
	'&::-webkit-scrollbar-track': {
		background: theme.palette.background.paper,
		borderTopRightRadius: 16,
		borderBottomRightRadius: 16
	},
	'&::-webkit-scrollbar-thumb': {
		backgroundColor: theme.palette.primary.main,
		borderRadius: 16
	}
}))

export const ListItemCustom = styled(ListItem)(() => ({
	paddingTop: 9,
	paddingBottom: 9,
	display: 'block'
}))

export const TypographyCustom = styled(Typography)(({ theme }) => ({
	fontSize: 12,
	color: theme.palette.secondary['500']
}))
