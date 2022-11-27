import { ITransaction } from '../../interfaces/transaction'

export interface ITableTransactionsProps {
	transactions: ITransaction[]
	isFetchingTransactions: boolean
}

export interface IRowData {
	amount: number
	status: boolean
	transaction: string
	dateAndTime: string
}

export interface IColumnData {
	id: 'transaction' | 'dateAndTime' | 'amount' | 'status'
	label: string
}

export interface ITableData {
	amount: JSX.Element
	status: JSX.Element
	transaction: JSX.Element
	dateAndTime: JSX.Element
}
