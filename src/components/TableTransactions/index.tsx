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
	transactions,
	isFetchingTransactions
}) => {
	const theme = M.useTheme()
	const smallDown = M.useMediaQuery(theme.breakpoints.down('sm'))
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(10)

	const [
		columnsThatShouldBeShownInTheTableAtThisTime,
		setColumnsThatShouldBeShownInTheTableAtThisTime
	] = React.useState<IColumnData[]>([])

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

	const columnsSmallDevice: IColumnData[] = columns.filter(
		(item) => item.id !== 'amount' && item.id !== 'status'
	)

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

	const settingColumnsThatShouldBeShownInTheTable = () => {
		if (smallDown) {
			setColumnsThatShouldBeShownInTheTableAtThisTime(columnsSmallDevice)
		} else {
			setColumnsThatShouldBeShownInTheTableAtThisTime(columns)
		}
	}

	React.useEffect(settingColumnsThatShouldBeShownInTheTable, [
		smallDown,
		columns,
		columnsSmallDevice
	])

	return (
		<M.Container
			sx={{
				width: '100%',
				padding: 3,
				borderRadius: 4,
				minHeight: 473,
				backgroundColor: theme.palette.background.paper,
				boxShadow:
					'0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)'
			}}
		>
			<M.Typography
				fontSize="2rem"
				fontWeight={600}
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
			{isFetchingTransactions ? (
				<MS.Box
					flex={1}
					height={473}
					display="flex"
					component="div"
					alignItems="center"
					justifyContent="center"
				>
					<M.CircularProgress color="primary" />
				</MS.Box>
			) : (
				<React.Fragment>
					<S.TableContainerCustom>
						<M.Table stickyHeader>
							<M.TableHead>
								<M.TableRow>
									{columnsThatShouldBeShownInTheTableAtThisTime.map(
										(column) => (
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
										)
									)}
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
												{columnsThatShouldBeShownInTheTableAtThisTime.map(
													(column) => {
														const value = row[column.id]
														return (
															<M.TableCell
																sx={{ borderColor: '#F9FAFB' }}
																key={column.id}
															>
																{value}
															</M.TableCell>
														)
													}
												)}
											</S.TableRowCustom>
										)
									})}
							</M.TableBody>
						</M.Table>
					</S.TableContainerCustom>
				</React.Fragment>
			)}
			<M.Table>
				<M.TableBody>
					<M.TableRow>
						<S.TablePaginationCustom
							page={page}
							variant="footer"
							count={rows.length}
							rowsPerPage={rowsPerPage}
							onPageChange={handleChangePage}
							rowsPerPageOptions={[10, 25, 100]}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</M.TableRow>
				</M.TableBody>
			</M.Table>
		</M.Container>
	)
}

export default TableTransactions
