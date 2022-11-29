import * as React from 'react'
import * as M from '@mui/material'

import { ICustomer, IProduct, ISale, ITransaction } from '../../interfaces'
import {
	fetchSales,
	fetchTopProducts,
	fetchTransactions,
	fetchAllLatestCustomers
} from '../../services'

import {
	FooterComponent,
	LatestCustomers,
	TopProductsList,
	TableTransactions,
	SalesGraphComponent
} from '../../components'

const HomeTemplate: React.FC = () => {
	const theme = M.useTheme()
	const smallDown = M.useMediaQuery(theme.breakpoints.down('sm'))

	const [isFetchingLatestCustomers, setIsFetchingLatestCustomers] =
		React.useState(false)
	const [isFetchingTopProducts, setIsFetchingTopProducts] =
		React.useState(false)
	const [isFetchingTransactions, setIsFetchingTransactions] =
		React.useState(false)
	const [isFetchingSales, setIsFetchingSales] = React.useState(false)

	const [sales, setSales] = React.useState<ISale[]>([])
	const [latestCustomers, setLatestCustomers] = React.useState<ICustomer[]>([])
	const [topProducts, setTopProducts] = React.useState<IProduct[]>([])
	const [transactions, setTransactions] = React.useState<ITransaction[]>([])

	const getSales = () => {
		;(async () => {
			try {
				setIsFetchingSales(true)
				const salesData = await fetchSales()
				if (salesData.length) setSales(salesData)
			} finally {
				setIsFetchingSales(false)
			}
		})()
	}

	const getAllLatestCustomers = () => {
		;(async () => {
			try {
				setIsFetchingLatestCustomers(true)
				const customersData = await fetchAllLatestCustomers()
				if (customersData.length) setLatestCustomers(customersData)
			} finally {
				setIsFetchingLatestCustomers(false)
			}
		})()
	}

	const getTopProducts = () => {
		;(async () => {
			try {
				setIsFetchingTopProducts(true)
				const productsData = await fetchTopProducts()
				if (productsData.length) {
					const productsOrderedFromLargestToSmallest = productsData.sort(
						(a, b) => Number(b.totalSales) - Number(a.totalSales)
					)
					setTopProducts(productsOrderedFromLargestToSmallest)
				}
			} finally {
				setIsFetchingTopProducts(false)
			}
		})()
	}

	const getTransactions = () => {
		;(async () => {
			try {
				setIsFetchingTransactions(true)
				const transactionsData = await fetchTransactions()
				if (transactionsData.length) {
					const transactionsSortedByMostRecent = transactionsData.sort(
						(a, b) =>
							new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
					)
					setTransactions(transactionsSortedByMostRecent)
				}
			} finally {
				setIsFetchingTransactions(false)
			}
		})()
	}

	React.useEffect(getSales, [])
	React.useEffect(getAllLatestCustomers, [])
	React.useEffect(getTopProducts, [])
	React.useEffect(getTransactions, [])

	return (
		<M.Container
			sx={{
				width: '100%',
				maxWidth: 1317
			}}
		>
			<M.Grid
				container
				justifyContent="center"
				alignItems="center"
				spacing={{ xs: 4, md: 4 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
				sx={{ padding: theme.spacing(4) }}
			>
				<M.Grid item xs={16}>
					<SalesGraphComponent
						salesData={sales}
						isFetchingSales={isFetchingSales}
					/>
				</M.Grid>
				<M.Grid item xs={4}>
					<LatestCustomers
						latestCustomers={latestCustomers}
						isFetchingLatestCustomers={isFetchingLatestCustomers}
					/>
				</M.Grid>

				<M.Grid item xs={8}>
					<TopProductsList
						topProductsList={topProducts}
						isFetchingTopProducts={isFetchingTopProducts}
					/>
				</M.Grid>
				<M.Grid item xs={16}>
					<TableTransactions
						transactions={transactions}
						isFetchingTransactions={isFetchingTransactions}
					/>
				</M.Grid>
				<M.Grid item xs={16}>
					<FooterComponent />
				</M.Grid>
			</M.Grid>
		</M.Container>
	)
}

export default HomeTemplate
