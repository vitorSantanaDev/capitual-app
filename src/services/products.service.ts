import { IProduct } from '../interfaces'

import axiosInstance from './api'

export async function fetchTopProducts(): Promise<IProduct[]> {
	try {
		const response = await axiosInstance.get(`/products`)
		return response.data
	} catch (err) {
		console.log(err)
		return []
	}
}
