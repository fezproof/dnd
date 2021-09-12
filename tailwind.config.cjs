const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts,md}'],
	// darkMode: 'media',
	theme: {
		extend: {
			colors: {
				green: {
					main: '#0C3537',
					light: '#6CC5AE'
				},
				orange: {
					main: '#F7AA63'
				}
			},
			fontFamily: {
				serif: ["'Trade Winds', cursive", ...defaultTheme.fontFamily.serif],
				sans: ['acumin-pro', ...defaultTheme.fontFamily.sans],
				eos: ['ethnocentric', ...defaultTheme.fontFamily.sans],
				unfortunate: ['chauncy-pro', ...defaultTheme.fontFamily.sans],
				hunters: ['ccmonstermash', ...defaultTheme.fontFamily.sans]
			},
			typography: (theme) => ({
				DEFAULT: {
					color: theme('white'),
					css: {
						a: { color: theme('colors.gray.300') },
						h2: {
							color: theme('colors.gray.200')
						},
						h3: {
							color: theme('colors.gray.300')
						}
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
