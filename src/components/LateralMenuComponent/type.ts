export type IMenuItem = {
	text: string
	type: string
	primaryTypographyProps: { fontSize: string }
	primary: string
	Icon: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & {
			title?: string | undefined
		}
	>
	SecondaryIcon?: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & {
			title?: string | undefined
		}
	>
	color: string
	iconColor: string
	opensASubMenu?: boolean
}
