import { ITransaction } from '../interfaces'

import axiosInstance from './api'

export async function fetchTransactions(): Promise<ITransaction[]> {
	try {
		const response = await axiosInstance.get(`/transactions`)
		return response.data
	} catch (err) {
		console.log(err)
		return []
	}
}
