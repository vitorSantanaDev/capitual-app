import { ListItemIcon, Divider } from '@mui/material'
import { styled } from '@mui/system'

export const LateralMenuComponentWrapper = styled('div')`
	.MuiPaper-root {
		top: 84px;
	}
`

export const ListItemIconCustom = styled(ListItemIcon)(() => ({
	minWidth: 0
}))
export const DividerCustom = styled(Divider)(({ theme }) => ({
	marginTop: 24,
	marginBottom: 24,
	backgroundColor: theme.palette.secondary['100']
}))
