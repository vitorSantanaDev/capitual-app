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

	const salesSurvey = React.useMemo(() => {
		const salesSortedByDate = salesData.sort(
			(a, b) =>
				new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
		)

		return salesSortedByDate.map((sale) => {
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
				padding: 4,
				borderRadius: 4,
				minHeight: 473,
				boxShadow:
					'box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);',
				backgroundColor: theme.palette.background.paper
			}}
		>
			<ResponsiveContainer
				width="100%"
				height="100%"
				minWidth="100%"
				minHeight="100%"
			>
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
							fontWeight={500}
							color={theme.palette.secondary.main}
						>
							Sales
						</M.Typography>
						<M.IconButton>
							<ExclamationIcon />
						</M.IconButton>
					</MS.Box>
					<LineChart width={1030} height={430} data={salesSurvey}>
						<XAxis
							dataKey="month"
							tick={{ color: '#6B7280', fontSize: '1.4rem', fontWeight: '600' }}
						/>
						<YAxis
							padding={{ top: 20, bottom: 20 }}
							tick={{ color: '#6B7280', fontSize: '1.4rem', fontWeight: '600' }}
						/>
						<Tooltip />
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
