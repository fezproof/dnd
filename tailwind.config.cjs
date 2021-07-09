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
				serif: ['Abhaya Libre', ...defaultTheme.fontFamily.serif],
				eos: ["'Starbirl'", ...defaultTheme.fontFamily.sans],
				unfortunate: ['chauncy-pro', ...defaultTheme.fontFamily.sans],
				hunters: ['ccmonstermash', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
