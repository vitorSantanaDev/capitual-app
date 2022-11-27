import { ICustomer } from '../../interfaces'

export interface ILatestCustomersProps {
	latestCustomers: ICustomer[]
	isFetchingLatestCustomers: boolean
}
