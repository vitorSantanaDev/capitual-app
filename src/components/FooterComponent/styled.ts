import { styled } from '@mui/system'

export const FooterWrapper = styled('footer')(({ theme }) => ({
	width: '100%',
	padding: 48,
	minHeight: 120,
	borderRadius: 16,
	backgroundColor: theme.palette.background.paper
}))

export const FooterContent = styled('p')(({ theme }) => ({
	fontSize: 16,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.secondary['500']
}))
