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
										secondary={
											<React.Fragment>
												<M.Typography component="span">
													{item.email}
												</M.Typography>
											</React.Fragment>
										}
									/>
								</MS.Box>
								<MS.Box>
									<M.ListItemText
										primary={Number(item.lastPurchaseValue).toLocaleString(
											'us-eu',
											{
												style: 'currency',
												currency: 'USD'
											}
										)}
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
