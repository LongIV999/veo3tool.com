/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// New Design System Colors
				'dark-primary': '#141413',
				'light-primary': '#faf9f5',
				'mid-gray': '#b0aea5',
				'light-gray': '#e8e6dc',
				'orange-accent': '#d97757',
				'blue-accent': '#6a9bcc',
				'green-accent': '#788c5d',
			},
			fontFamily: {
				heading: ['Inter', 'sans-serif'],
				body: ['JetBrains Mono', 'monospace'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'xs': '8px',
				'sm': '16px',
				'md': '24px',
				'lg': '48px',
				'xl': '96px',
				'xxl': '144px',
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				portalEntrance: {
					"0%": { opacity: "0", transform: "scale(0.8) translateY(40px)" },
					"100%": { opacity: "1", transform: "scale(1) translateY(0)" },
				},
				subtleGlow: {
					"0%, 100%": { boxShadow: "0 0 20px rgba(217, 119, 87, 0.3)" },
					"50%": { boxShadow: "0 0 40px rgba(217, 119, 87, 0.3)" },
				},
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(40px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				portalEntrance: "portalEntrance 0.8s ease-out",
				subtleGlow: "subtleGlow 2s ease-in-out infinite",
				fadeInUp: "fadeInUp 0.6s ease-out",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}
