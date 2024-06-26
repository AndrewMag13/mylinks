import type { Config } from 'tailwindcss'

const primaryColor = '#FF3850'
const backgroundColor = '#111012'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				primary: primaryColor,
				backgroundColor
			},
			borderRadius: {
				layout: '1rem'
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: '0.3'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: []
}
export default config
