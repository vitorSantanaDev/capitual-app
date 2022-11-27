import { List, Typography } from '@mui/material'
import { styled } from '@mui/system'

export const ListCustom = styled(List)(({ theme }) => ({
	padding: 24,
	width: '100%',
	maxWidth: 380.33,
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

export const TypographyCustom = styled(Typography)(({ theme }) => ({
	fontSize: 12,
	color: theme.palette.secondary['500']
}))
