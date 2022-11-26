import { createTheme } from '@mui/material'

export const GlobalTheme = createTheme({
	palette: {
		primary: {
			main: '#0E9F6E'
		},
		secondary: {
			main: '#111827',
			'100': '#F3F4F6',
			'500': '#6B7280',
			'600': '#4B5563',
			'800': '#1F2937'
		},
		background: {
			default: '#F9FAFB',
			paper: '#FFFFFF'
		},
		error: {
			main: '#9B1C1C',
			'200': '#FBD5D5'
		},
		success: {
			main: '#03543F',
			'100': '#DEF7EC'
		},
		info: {
			main: '#1E429F',
			'100': '#E1EFFE'
		}
	},
	typography: {
		fontFamily: "'Inter', sans-serif"
	}
})
