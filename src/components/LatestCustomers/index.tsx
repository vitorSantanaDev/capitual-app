import * as React from 'react'
import * as M from '@mui/material'
import * as MS from '@mui/system'
import * as S from './styled'

import { ILatestCustomersProps } from './types'

const LatestCustomers: React.FC<ILatestCustomersProps> = ({
	latestCustomers,
	isFetchingLatestCustomers
}) => {
	const theme = M.useTheme()

	return (
		<S.ListCustom>
			<M.Typography
				fontSize="2rem"
				fontWeight={500}
				marginBottom={theme.spacing(1.1)}
				color={theme.palette.secondary.main}
			>
				Latest Customers
			</M.Typography>
			{isFetchingLatestCustomers ? (
				<MS.Box
					flex={1}
					height={350}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<M.CircularProgress color="primary" />
				</MS.Box>
			) : (
				<React.Fragment>
					{latestCustomers.map((item) => (
						<S.ListItemCustom key={item.id}>
							<MS.Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
								marginBottom={theme.spacing(1.1)}
							>
								<MS.Box
									display="flex"
									alignItems="center"
									justifyContent="space-between"
								>
									<M.ListItemAvatar>
										<M.Avatar alt={item.name} src={item.avatar} />
									</M.ListItemAvatar>
									<M.ListItemText
										primary={item.name}
										primaryTypographyProps={{
											fontSize: '1.6rem',
											fontWeight: 500,
											color: theme.palette.secondary.main
										}}
										secondary={
											<React.Fragment>
												<M.Typography
													component="span"
													fontSize="1.2rem"
													color={'#6B7280'}
												>
													{item.email}
												</M.Typography>
											</React.Fragment>
										}
									/>
								</MS.Box>
								<MS.Box>
									<M.ListItemText
										primaryTypographyProps={{
											fontSize: '1.6rem',
											fontWeight: 500
										}}
										primary={`$${item.lastPurchaseValue}`}
									/>
								</MS.Box>
							</MS.Box>
							<M.Divider variant="fullWidth" component="li" />
						</S.ListItemCustom>
					))}
				</React.Fragment>
			)}
		</S.ListCustom>
	)
}

export default LatestCustomers
