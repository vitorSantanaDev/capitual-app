import * as React from 'react'
import * as S from './styled'

import { ChipStatusTransactionEnum, IChipStatusTransactionProps } from './types'

const ChipStatusTransaction: React.FC<IChipStatusTransactionProps> = ({
	status
}) => {
	const chipBgColor =
		status === ChipStatusTransactionEnum.CANCELLED
			? '#FBD5D5'
			: status === ChipStatusTransactionEnum.COMPLETED
			? '#DEF7EC'
			: '#E1EFFE'

	const chipTextColor =
		status === ChipStatusTransactionEnum.CANCELLED
			? '#9B1C1C'
			: status === ChipStatusTransactionEnum.COMPLETED
			? '#03543F'
			: '#1E429F'

	return (
		<S.ChipCustom
			style={{ backgroundColor: chipBgColor, color: chipTextColor }}
			label={status}
		/>
	)
}

export default ChipStatusTransaction
