const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	// darkMode: 'media',
	theme: {
		extend: {
			colors: {
				green: {
					main: '#0C3537',
					light: '#6CC5AE'
				}
			},
			fontFamily: {
				serif: ['Abhaya Libre', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
