/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui")
	],
	daisyui: {
		themes: [
			{
				"vice": {
					"primary": "#a78bfa",
					"secondary": "#f0abfc",
					"accent": "#f472b6",
					"neutral": "#581c87",
					"base-100": "#5b21b6",
					"info": "#0284c7",
					"success": "#10b981",
					"warning": "#facc15",
					"error": "#db2777",
				}
			}
		]
	}
};
