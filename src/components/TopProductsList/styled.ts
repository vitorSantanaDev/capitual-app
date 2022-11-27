import { List, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const ListCustom = styled(List)(({ theme }) => ({
	padding: 24,
	width: '100%',
	maxWidth: 920.33,
	borderRadius: 16,
	backgroundColor: theme.palette.background.paper,
	maxHeight: 448,
	minHeight: 448,
	overflowY: 'scroll'
}))

export const ListItemCustom = styled(Typography)(() => ({
	paddingTop: 9,
	paddingBottom: 9
}))
