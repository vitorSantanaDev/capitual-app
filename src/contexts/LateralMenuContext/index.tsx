import React, { useState, useCallback, createContext } from 'react'
import { ILateralMenuContext, ILateralMenuProvider } from './types'

const INITIAL_STATE = {
	openMenu: false
}

export const LateralMenuProvider =
	createContext<ILateralMenuProvider>(INITIAL_STATE)

const LateralMenuContext: React.FC<ILateralMenuContext> = ({ children }) => {
	const [openMenu, setOpenMenu] = useState(false)

	const toggleLateralMenuOpen = useCallback(
		() => setOpenMenu((prevState) => !prevState),
		[]
	)

	return (
		<LateralMenuProvider.Provider
			value={{ openMenu, setOpenMenu, toggleLateralMenuOpen }}
		>
			{children}
		</LateralMenuProvider.Provider>
	)
}

export default LateralMenuContext
