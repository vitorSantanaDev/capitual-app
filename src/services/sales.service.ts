import { ISale } from '../interfaces'

import axiosInstance from './api'

export async function fetchSales(): Promise<ISale[]> {
	try {
		const response = await axiosInstance.get(`/sales`)
		return response.data
	} catch (err) {
		console.log(err)
		return []
	}
}
