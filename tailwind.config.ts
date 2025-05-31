/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-bg': '#13131d',
				'text-secondary': '#d3d3d3',
				'text-muted': '#777777',
				accent: '#4d4d64'
			},
			fontFamily: {
				figtree: ['Figtree', 'sans-serif']
			}
		}
	},
	plugins: []
};
