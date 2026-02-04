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
				// Neo-Brutalist Palette
				'brutal-black': '#000000',
				'brutal-white': '#FFFFFF',
				'neon-lime': '#39FF14',
				'neon-cyan': '#00FFFF',
				'neon-pink': '#FF10F0',
				'neon-yellow': '#FFFF00',
				'grid-dark': '#1A1A1A',
				'grid-line': '#333333',
				// Aurora UI & AI Tech Colors (Legacy)
				'aurora-dark': '#0A0E27',      // Midnight blue base
				'aurora-deep': '#050510',      // Deep black
				'aurora-cyan': '#00FFFF',      // Cyan
				'aurora-magenta': '#FF1493',   // Magenta
				'aurora-purple': '#8B00FF',    // Electric Purple
				'aurora-blue': '#0080FF',      // Electric Blue
				'ai-purple': '#6366F1',        // AI Purple (Primary)
				'ai-glow': '#A78BFA',          // Lighter purple glow

				// Keep legacy for backward compatibility if needed, but mapped to new palette where appropriate
				'dark-primary': '#0A0E27',
				'light-primary': '#faf9f5',
				'mid-gray': '#94A3B8',         // Updated to slate-400
				'light-gray': '#E2E8F0',       // Updated to slate-200
				'orange-accent': '#6366F1',    // Remapped to AI Purple for consistency
				'blue-accent': '#00FFFF',      // Remapped to Aurora Cyan
				'green-accent': '#00FF41',     // Updated to Neon Green
			},
			fontFamily: {
				heading: ['Barlow', 'Inter', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
			},
			fontWeight: {
				black: 900,
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			borderWidth: {
				'brutal-3': '3px',
				'brutal-4': '4px',
				'brutal-5': '5px',
			},
			spacing: {
				'xs': '8px',
				'sm': '16px',
				'md': '24px',
				'lg': '48px',
				'xl': '96px',
				'xxl': '144px',
			},
			boxShadow: {
				'brutal': '4px 4px 0px #000000',
				'brutal-neon': '0 0 20px currentColor',
				'brutal-lift': '8px 8px 0px #000000',
				'brutal-deep': '12px 12px 0px #000000',
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
					"0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
					"50%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
				},
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(40px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				auroraGradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				slideUpFade: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
				glitchText: {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
				},
				neonPulse: {
					'0%, 100%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor' },
					'50%': { textShadow: '0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor' },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				portalEntrance: "portalEntrance 0.8s ease-out",
				subtleGlow: "subtleGlow 2s ease-in-out infinite",
				fadeInUp: "fadeInUp 0.6s ease-out",
				auroraGradient: "auroraGradient 15s ease infinite",
				float: "float 6s ease-in-out infinite",
				slideUpFade: "slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
				glitch: 'glitchText 0.3s ease-in-out infinite',
				neonPulse: 'neonPulse 2s ease-in-out infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}
