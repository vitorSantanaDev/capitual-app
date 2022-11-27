import { IProduct } from '../../interfaces'

export interface ITopProductsListProps {
	topProductsList: IProduct[]
	isFetchingTopProducts: boolean
}
