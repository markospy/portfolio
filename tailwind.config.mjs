/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
			boxShadow: {
				'buttom': '0 2px 5px -6px rgba(0,0,0, 0.8)'
			}
		},
	},
	plugins: [],
}
