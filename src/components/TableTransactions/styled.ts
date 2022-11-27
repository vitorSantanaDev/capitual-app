import { TablePagination, TableRow } from '@mui/material'
import { styled } from '@mui/system'

export const TablePaginationCustom = styled(TablePagination)`
	border: none;
	.MuiToolbar-root .MuiTablePagination-selectLabel {
		color: #111827;
		font-size: 1.4rem;
	}

	.MuiToolbar-root .MuiSelect-select {
		font-size: 1.2rem;
		color: #71717a;
		display: flex;
		align-items: center;
	}

	.MuiToolbar-root .MuiButtonBase-root {
		svg {
			width: 24px;
			height: 24px;
			fill: #111827;
		}
	}

	.MuiToolbar-root .MuiTablePagination-displayedRows {
		font-size: 1.4rem;
	}
`

export const TableRowCustom = styled(TableRow)(() => ({
	'&:nth-of-type(odd)': {
		backgroundColor: '#F9FAFB',
		borderRadius: 16
	},
	'&:last-child td, &:last-child th': {
		border: 0
	}
}))
