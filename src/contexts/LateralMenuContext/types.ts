import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface ILateralMenuProvider {
	openMenu: boolean
	toggleLateralMenuOpen?: () => void
	setOpenMenu?: Dispatch<SetStateAction<boolean>> | null
}

export interface ILateralMenuContext {
	children: ReactNode
}
