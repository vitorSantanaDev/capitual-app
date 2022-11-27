import * as React from 'react'
import * as M from '@mui/material'
import * as MS from '@mui/system'
import * as S from './styled'

import { format } from 'date-fns'
import eoLocale from 'date-fns/locale/en-US'

import {
	IRowData,
	ITableData,
	IColumnData,
	ITableTransactionsProps
} from './types'

import ChipStatusTransaction from '../ChipStatusTransaction'
import { ChipStatusTransactionEnum } from '../ChipStatusTransaction/types'

const TableTransactions: React.FC<ITableTransactionsProps> = ({
	transactions
}) => {
	const theme = M.useTheme()
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(10)

	const renderPaymentMadeByElement = (name: string) => {
		return (
			<MS.Box
				sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
				component="div"
			>
				<M.Typography
					sx={{ fontSize: '1.4rem', color: theme.palette.secondary.main }}
				>
					Payment from
				</M.Typography>
				<M.Typography
					sx={{
						fontSize: '1.4rem',
						color: theme.palette.secondary.main,
						fontWeight: '600'
					}}
				>
					{name}
				</M.Typography>
			</MS.Box>
		)
	}

	const renderDateAndTimeOfTheTransactionElement = (date: string) => {
		return (
			<M.Typography sx={{ fontSize: '1.4rem', color: '#6B7280' }}>
				{date}
			</M.Typography>
		)
	}

	const renderAmountOfTheTransactionElement = (amount: number) => {
		const value = `$${amount}`
		return (
			<M.Typography
				sx={{
					fontSize: '1.6rem',
					fontWeight: '600',
					color: theme.palette.secondary.main
				}}
			>
				{value}
			</M.Typography>
		)
	}

	const renderStatusOfTheTransaction = (status: boolean) => {
		const value = status
			? ChipStatusTransactionEnum.COMPLETED
			: ChipStatusTransactionEnum.CANCELLED
		return <ChipStatusTransaction status={value} />
	}

	const columns: IColumnData[] = React.useMemo(() => {
		return [
			{ id: 'transaction', label: 'TRANSACTION' },
			{ id: 'dateAndTime', label: 'DATE & TIME' },
			{ id: 'amount', label: 'AMOUNT' },
			{ id: 'status', label: 'STATUS' }
		]
	}, [])

	const createTableRow = ({
		amount,
		status,
		dateAndTime,
		transaction
	}: IRowData): ITableData => {
		return {
			transaction: renderPaymentMadeByElement(transaction),
			dateAndTime: renderDateAndTimeOfTheTransactionElement(dateAndTime),
			amount: renderAmountOfTheTransactionElement(amount),
			status: renderStatusOfTheTransaction(status)
		}
	}
	const rows: ITableData[] = React.useMemo(() => {
		return transactions.map((transaction) => {
			const { amount, completed, createdAt, firstName, lastName } = transaction

			const dateAndTimeFormatted = format(
				new Date(createdAt),
				"MMMM dd',' yyyy",
				{
					locale: eoLocale
				}
			)
			return createTableRow({
				amount: Number(amount),
				dateAndTime: dateAndTimeFormatted,
				status: completed,
				transaction: `${firstName} ${lastName}`
			})
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [transactions])

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}

	return (
		<M.Container
			sx={{
				padding: 3,
				borderRadius: 4,
				backgroundColor: theme.palette.background.paper
			}}
		>
			<M.Typography
				fontSize="2rem"
				fontWeight={500}
				color={theme.palette.secondary.main}
			>
				Transactions
			</M.Typography>
			<M.Typography
				fontSize="1.4rem"
				color={'#71717A'}
				marginBottom={theme.spacing(1.1)}
			>
				This is a list of latest transactions.
			</M.Typography>
			<M.Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 'none' }}>
				<M.TableContainer
					component={M.Paper}
					variant="outlined"
					sx={{ maxHeight: 375, border: 'none' }}
				>
					<M.Table stickyHeader>
						<M.TableHead>
							<M.TableRow>
								{columns.map((column) => (
									<M.TableCell
										sx={{
											fontSize: '1.2rem',
											fontWeight: '600',
											color: '#6B7280'
										}}
										key={column.id}
									>
										{column.label}
									</M.TableCell>
								))}
							</M.TableRow>
						</M.TableHead>
						<M.TableBody>
							{rows
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									return (
										<S.TableRowCustom
											sx={{ borderRadius: 16 }}
											key={`${row.status}-${index}`}
										>
											{columns.map((column) => {
												const value = row[column.id]
												return (
													<M.TableCell
														sx={{ borderColor: '#F9FAFB' }}
														key={column.id}
													>
														{value}
													</M.TableCell>
												)
											})}
										</S.TableRowCustom>
									)
								})}
						</M.TableBody>
					</M.Table>
				</M.TableContainer>
				<MS.Box
					component="div"
					sx={{
						marginTop: 2,
						width: '100%',
						display: 'flex',
						justifyContent: 'flex-end'
					}}
				>
					<S.TablePaginationCustom
						page={page}
						variant="footer"
						count={rows.length}
						rowsPerPage={rowsPerPage}
						onPageChange={handleChangePage}
						rowsPerPageOptions={[10, 25, 100]}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</MS.Box>
			</M.Paper>
		</M.Container>
	)
}

export default TableTransactions
