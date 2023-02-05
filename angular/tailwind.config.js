/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	mode: "jit",
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
	theme: {
		extend: {
			colors: {
				lightColourBack: "#f9fafb",
				lightColour1: "#67e8f9",
				lightColour2: "#f472b6",
				lightColourText: "#111827",
				darkColourBack: "#111827",
				darkColour1: "#7400b8",
				darkColour2: "#80ffdb",
				darkColourText: "#fafafa",
			},
		},
	},
	plugins: [],
}
