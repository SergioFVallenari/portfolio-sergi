/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				paper: 'rgb(var(--paper) / <alpha-value>)',
				surface: 'rgb(var(--surface) / <alpha-value>)',
				ink: 'rgb(var(--ink) / <alpha-value>)',
				'ink-soft': 'rgb(var(--ink-soft) / <alpha-value>)',
				'ink-mute': 'rgb(var(--ink-mute) / <alpha-value>)',
				line: 'rgb(var(--line) / <alpha-value>)',
				accent: 'rgb(var(--accent) / <alpha-value>)',
				available: 'rgb(var(--available) / <alpha-value>)',
			},
			fontFamily: {
				sans: [
					'"Onest Variable"',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'sans-serif',
				],
				mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			maxWidth: {
				shell: '1200px',
				prose: '68ch',
			},
			transitionTimingFunction: {
				out: 'cubic-bezier(0.22, 1, 0.36, 1)',
			},
		},
	},
	plugins: [],
}