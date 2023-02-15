/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			}
		},
		extend: {
			boxShadow: {
				'ysm': '0px 4px 5px -5px rgba(0, 0, 0, 0.25)',
			}
		},
	},
	plugins: [],
}