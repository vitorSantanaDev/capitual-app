export interface IChipStatusTransactionProps {
	status: ChipStatusTransactionEnum
}

export enum ChipStatusTransactionEnum {
	COMPLETED = 'Completed',
	CANCELLED = 'Cancelled',
	IN_PROGRESS = 'In Progress'
}
