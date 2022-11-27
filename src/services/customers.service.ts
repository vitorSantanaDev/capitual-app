import { ICustomer } from '../interfaces'
import axiosInstance from './api'

export async function fetchAllLatestCustomers(): Promise<ICustomer[]> {
	try {
		const response = await axiosInstance.get(`/users`)
		return response.data
	} catch (err) {
		console.log(err)
		return []
	}
}
