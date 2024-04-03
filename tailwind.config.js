/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'green-planet': "url('$lib/images/green-planet-bg.webp')"
			},
			fontFamily: {
				logo: ['Syncopate', 'sans-serif'],
				headings: ['Saira', 'sans-serif'],
				primary: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
