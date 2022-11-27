import * as React from 'react'
import * as M from '@mui/material'
import * as MS from '@mui/system'
import * as S from './styled'

import { ITopProductsListProps } from './types'

const LatestCustomers: React.FC<ITopProductsListProps> = ({
	topProductsList,
	isFetchingTopProducts
}) => {
	const theme = M.useTheme()

	return (
		<S.ListCustom>
			<M.Typography fontSize="2rem" fontWeight={500}>
				Top products
			</M.Typography>
			{isFetchingTopProducts ? (
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
					{topProductsList.map((item) => (
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
									<M.ListItemText
										primary={item.name}
										primaryTypographyProps={{
											fontSize: '1.6rem',
											fontWeight: 500
										}}
										secondary={
											<React.Fragment>
												<M.Typography
													maxWidth={585}
													component="span"
													fontSize="1.2rem"
													display="inline-block"
													color={'#4B5563'}
												>
													{item.description}
												</M.Typography>
											</React.Fragment>
										}
									/>
								</MS.Box>
								<MS.Box display="flex" alignItems="center">
									<M.ListItemText
										primaryTypographyProps={{ fontSize: '1.6rem' }}
										primary={item.totalSales}
									/>
									<M.Typography
										marginLeft={theme.spacing(1)}
										component="span"
										fontSize="1.6rem"
										color={'#4B5563'}
									>
										Sales
									</M.Typography>
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
