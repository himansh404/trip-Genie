// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // Ensures you can toggle dark/light mode
	content: [
	  "./index.html",
	  "./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
	  extend: {
		keyframes: {
		  'fade-in': {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		},
		animation: {
		  'fade-in': 'fade-in 0.8s ease-in-out',
		},
	  },
	},
	plugins: [],
  }
  