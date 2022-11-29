import * as React from 'react'
import * as M from '@mui/material'
import * as MS from '@mui/system'

import {
	Line,
	XAxis,
	YAxis,
	Tooltip,
	LineChart,
	ResponsiveContainer
} from 'recharts'

import { format } from 'date-fns'
import eoLocale from 'date-fns/locale/en-US'

import { ReactComponent as ExclamationIcon } from '../../assets/images/exclamation-circle.svg'

import { ISalesGraphComponentProps } from './types'

const SalesGraphComponent: React.FC<ISalesGraphComponentProps> = ({
	salesData
}) => {
	const theme = M.useTheme()
	const smallDown = M.useMediaQuery(theme.breakpoints.down('sm'))

	const salesSurvey = React.useMemo(() => {
		const salesSortedByDate = salesData.sort(
			(a, b) =>
				new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
		)

		const currentMonthSales = salesSortedByDate.filter(
			(sale) => new Date().getMonth() === new Date(sale.createdAt).getMonth()
		)

		return currentMonthSales.map((sale) => {
			return {
				month: String(
					format(new Date(sale.createdAt), 'dd MMMM yyyy', {
						locale: eoLocale
					})
				),
				saleValue: Number(sale.price)
			}
		})
	}, [salesData])

	return (
		<M.Container
			sx={{
				maxWidth: smallDown ? 380.33 : '100%',
				padding: 4,
				borderRadius: 4,
				minHeight: 473,
				marginTop: theme.spacing(6),
				boxShadow:
					'0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
				backgroundColor: theme.palette.background.paper
			}}
		>
			<ResponsiveContainer width="100%" height="100%">
				<React.Fragment>
					<MS.Box
						component="div"
						display="flex"
						alignItems="center"
						marginBottom={theme.spacing(3)}
					>
						<M.Typography
							variant="h5"
							fontSize="2rem"
							fontWeight={600}
							color={theme.palette.secondary.main}
						>
							Sales
						</M.Typography>
						<M.IconButton>
							<ExclamationIcon />
						</M.IconButton>
					</MS.Box>
					<LineChart
						maxBarSize={20}
						width={smallDown ? 320 : 1030}
						height={430}
						data={salesSurvey}
					>
						<XAxis
							dataKey="month"
							tick={{ color: '#6B7280', fontSize: '1.4rem', fontWeight: '600' }}
						/>
						<YAxis
							padding={{ top: 20, bottom: 20 }}
							tick={{ color: '#6B7280', fontSize: '1.4rem', fontWeight: '600' }}
						/>
						<Tooltip
							labelStyle={{
								color: '#6B7280',
								fontSize: '1.6rem'
							}}
						/>
						<Line
							type="monotone"
							strokeWidth={3}
							stroke="#0E9F6E"
							dataKey="saleValue"
							dot={{ stroke: '#ffff', strokeWidth: 2 }}
						/>
					</LineChart>
				</React.Fragment>
			</ResponsiveContainer>
		</M.Container>
	)
}

export default SalesGraphComponent
