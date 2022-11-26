import * as React from 'react'
import * as MS from '@mui/system'
import * as M from '@mui/material'

import * as S from './styled'

import {
	ChartPieIcon,
	LockClosedIcon,
	ShoppingBagIcon,
	ChevronDownIcon
} from '@heroicons/react/24/solid'

import { ReactComponent as SupportIcon } from '../../assets/images/support.svg'
import { ReactComponent as InboxInIcon } from '../../assets/images/inbox-in.svg'
import { ReactComponent as CollectionIcon } from '../../assets/images/collection.svg'
import { ReactComponent as ClipBoardListIcon } from '../../assets/images/clipboard-list.svg'
import { ReactComponent as DocumentReportIcon } from '../../assets/images/document-report.svg'

import { IMenuItem } from './type'
import { LateralMenuProvider } from '../../contexts'

const LateralMenuComponent: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const theme = M.useTheme()
	const smallDown = M.useMediaQuery(theme.breakpoints.down('sm'))

	const { openMenu } = React.useContext(LateralMenuProvider)

	const listMenuItemsBeforeDivider: IMenuItem[] = React.useMemo(() => {
		return [
			{
				text: 'Pages',
				primary: 'Pages',
				type: 'Secondary',
				opensASubMenu: true,
				Icon: DocumentReportIcon,
				SecondaryIcon: ChevronDownIcon,
				color: theme.palette.secondary.main,
				iconColor: theme.palette.secondary.main,
				primaryTypographyProps: { fontSize: '1.4rem' }
			},
			{
				text: 'Sales',
				primary: 'Sales',
				type: 'Secondary',
				opensASubMenu: true,
				Icon: ShoppingBagIcon,
				SecondaryIcon: ChevronDownIcon,
				color: theme.palette.secondary.main,
				iconColor: theme.palette.secondary.main,
				primaryTypographyProps: { fontSize: '1.4rem' }
			},
			{
				text: 'Messages',
				type: 'Secondary',
				primary: 'Messages',
				Icon: InboxInIcon,
				color: theme.palette.secondary.main,
				iconColor: theme.palette.secondary.main,
				primaryTypographyProps: { fontSize: '1.4rem' }
			},
			{
				type: 'Secondary',
				opensASubMenu: true,
				Icon: LockClosedIcon,
				text: 'Authentication',
				primary: 'Authentication',
				SecondaryIcon: ChevronDownIcon,
				color: theme.palette.secondary.main,
				iconColor: theme.palette.secondary.main,
				primaryTypographyProps: { fontSize: '1.4rem' }
			}
		]
	}, [theme])

	const listMenuItemsAfterDivider: IMenuItem[] = React.useMemo(() => {
		return [
			{
				text: 'Docs',
				primary: 'Docs',
				type: 'Secondary',
				Icon: ClipBoardListIcon,
				color: theme.palette.secondary.main,
				iconColor: theme.palette.secondary.main,
				primaryTypographyProps: { fontSize: '1.4rem' }
			},
			{
				text: 'Components',
				primary: 'Components',
				type: 'Secondary',
				Icon: CollectionIcon,
				color: theme.palette.secondary.main,
				iconColor: theme.palette.secondary.main,
				primaryTypographyProps: { fontSize: '1.4rem' }
			},
			{
				text: 'Help',
				primary: 'Help',
				type: 'Secondary',
				Icon: SupportIcon,
				color: theme.palette.secondary.main,
				iconColor: theme.palette.secondary.main,
				primaryTypographyProps: { fontSize: '1.4rem' }
			}
		]
	}, [theme])

	const renderingMenuItems = (item: IMenuItem) => {
		const {
			text,
			Icon,
			color,
			iconColor,
			opensASubMenu,
			SecondaryIcon,
			primaryTypographyProps
		} = item

		if (opensASubMenu && SecondaryIcon) {
			return (
				<M.ListItemButton key={`${text}`}>
					<S.ListItemIconCustom>
						<Icon width={20} height={20} color={iconColor} />
					</S.ListItemIconCustom>
					<MS.Box
						width="100%"
						display="flex"
						alignItems="center"
						justifySelf="flex-end"
						justifyItems="space-between"
						marginLeft={theme.spacing(1)}
					>
						<M.ListItemText
							color={color}
							primary={text}
							primaryTypographyProps={primaryTypographyProps}
						/>

						<S.ListItemIconCustom>
							<SecondaryIcon width={20} height={20} color={iconColor} />
						</S.ListItemIconCustom>
					</MS.Box>
				</M.ListItemButton>
			)
		}
		return (
			<M.ListItemButton key={`${text}`}>
				<S.ListItemIconCustom>
					<Icon width={20} height={20} color={iconColor} />
				</S.ListItemIconCustom>
				<MS.Box marginLeft={theme.spacing(1)}>
					<M.ListItemText
						color={color}
						primary={text}
						primaryTypographyProps={primaryTypographyProps}
					/>
				</MS.Box>
			</M.ListItemButton>
		)
	}

	return (
		<S.LateralMenuComponentWrapper>
			<M.Drawer open={openMenu} variant={smallDown ? 'temporary' : 'permanent'}>
				<MS.Box
					height="100%"
					display="flex"
					flexDirection="column"
					width={theme.spacing(28)}
				>
					<MS.Box flex={1}>
						<M.List component="nav">
							<MS.Box>
								<M.ListItemButton>
									<S.ListItemIconCustom>
										<ChartPieIcon
											width={20}
											height={20}
											color={theme.palette.primary.main}
										/>
									</S.ListItemIconCustom>
									<MS.Box marginLeft={theme.spacing(1)}>
										<M.ListItemText
											primary="Overview"
											style={{ color: theme.palette.primary.main }}
											primaryTypographyProps={{ fontSize: '1.4rem' }}
										/>
									</MS.Box>
								</M.ListItemButton>
								{listMenuItemsBeforeDivider.map(renderingMenuItems)}
							</MS.Box>
							<S.DividerCustom />
							<MS.Box>
								{listMenuItemsAfterDivider.map(renderingMenuItems)}
							</MS.Box>
						</M.List>
					</MS.Box>
				</MS.Box>
			</M.Drawer>
			<MS.Box marginLeft={!smallDown ? theme.spacing(28) : 0}>
				{children}
			</MS.Box>
		</S.LateralMenuComponentWrapper>
	)
}

export default LateralMenuComponent
