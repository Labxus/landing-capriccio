/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./public/**/*.svg'
	],

	theme: {
		extend: {
			colors:{
				'primaryColor' : '#B0413E',
				'secondaryColor' : '#FFFFC7',
				'tertiaryColor': '#548687',
				'primaryContrast' : '#473335',
				'secondayContrast' : '#FCAA67',
				'titleColor' : '#473335'
			},
		},
	},
	plugins: [],
}
