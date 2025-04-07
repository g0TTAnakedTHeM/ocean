import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			ocean: {
    				'50': '#ebf3f5',
    				'100': '#c6dcdf',
    				'200': '#a1c4ca',
    				'300': '#6397a8',
    				'400': '#4d8393',
    				'500': '#376f7f',
    				'600': '#215b6b',
    				'700': '#084050',
    				'800': '#043544',
    				'900': '#02232d',
    			},
    			apple: {
    				blue: {
    					light: '#69aeff',
    					DEFAULT: '#0066cc',
    					dark: '#0055b3'
    				},
    				gray: {
    					'50': '#f5f5f7',
    					'100': '#e5e5e7',
    					'200': '#d2d2d7',
    					'300': '#aaaaaa',
    					'400': '#86868b',
    					'500': '#6e6e73',
    					'600': '#444444',
    					'700': '#333336',
    					'800': '#1d1d1f',
    					'900': '#000000'
    				},
    				highlight: '#5ac8fa',
    				accent: '#fa586a',
    				success: '#34c759',
    				warning: '#ff9f0a',
    				error: '#ff3b30'
    			},
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
    			}
    		},
    		fontFamily: {
    			sans: [
    				'-apple-system',
    				'BlinkMacSystemFont',
    				'San Francisco',
    				'Segoe UI',
    				'Roboto',
    				'Helvetica Neue',
    				'sans-serif'
    			],
    			display: [
    				'-apple-system',
    				'BlinkMacSystemFont',
    				'San Francisco',
    				'Segoe UI',
    				'Roboto',
    				'Helvetica Neue',
    				'sans-serif'
    			],
    			mono: [
    				'SF Mono',
    				'SFMono-Regular',
    				'ui-monospace',
    				'Menlo',
    				'Monaco',
    				'Consolas',
    				'monospace'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)',
    			xl: '1rem',
    			'2xl': '1.25rem'
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
    			"fade-in": {
    				"0%": { opacity: "0", transform: "translateY(10px)" },
    				"100%": { opacity: "1", transform: "translateY(0)" },
    			},
    			"fade-out": {
    				"0%": { opacity: "1", transform: "translateY(0)" },
    				"100%": { opacity: "0", transform: "translateY(10px)" },
    			},
    			"wave": {
    				"0%": { transform: "translateX(0)" },
    				"50%": { transform: "translateX(-25%)" },
    				"100%": { transform: "translateX(-50%)" },
    			},
    			"slide-up": {
    				"0%": { transform: "translateY(100%)", opacity: "0" },
    				"100%": { transform: "translateY(0)", opacity: "1" },
    			},
    			"slide-down": {
    				"0%": { transform: "translateY(-100%)", opacity: "0" },
    				"100%": { transform: "translateY(0)", opacity: "1" },
    			},
    			"scale-in": {
    				"0%": { transform: "scale(0.95)", opacity: "0" },
    				"100%": { transform: "scale(1)", opacity: "1" },
    			},
    			"float": {
    				"0%": { transform: "translateY(0px)" },
    				"50%": { transform: "translateY(-10px)" },
    				"100%": { transform: "translateY(0px)" },
    			},
    			"gradient-x": {
    				"0%": { backgroundPosition: "0% 50%" },
    				"50%": { backgroundPosition: "100% 50%" },
    				"100%": { backgroundPosition: "0% 50%" },
    			},
    		},
    		animation: {
    			"accordion-down": "accordion-down 0.2s ease-out",
    			"accordion-up": "accordion-up 0.2s ease-out",
    			"fade-in": "fade-in 0.6s ease-out",
    			"fade-out": "fade-out 0.6s ease-out",
    			"wave": "wave 8s linear infinite",
    			"slide-up": "slide-up 0.6s ease-out",
    			"slide-down": "slide-down 0.6s ease-out",
    			"scale-in": "scale-in 0.6s ease-out",
    			"float": "float 6s ease-in-out infinite",
    			"gradient-x": "gradient-x 10s ease infinite",
    		},
    		backgroundImage: {
    			'apple-gradient': 'linear-gradient(to right, #0066cc, #5ac8fa)',
    			'apple-gradient-alt': 'linear-gradient(to right, #ff3b30, #ff9f0a)',
    			'apple-light-gradient': 'linear-gradient(to bottom, #ffffff, #f5f5f7)',
    			'apple-dark-gradient': 'linear-gradient(to bottom, #1d1d1f, #000000)',
    			'ocean-gradient': 'linear-gradient(to right, #084050, #6397a8)',
    			'ocean-gradient-alt': 'linear-gradient(to bottom, #6397a8, #084050)',
    			'grid-pattern': 'url("/assets/images/grid-pattern.png")',
    			'grid-pattern-light': 'url("/assets/images/grid-pattern-light.png")'
    		},
    		boxShadow: {
    			'apple-sm': '0 2px 6px rgba(0, 0, 0, 0.05)',
    			'apple-md': '0 4px 12px rgba(0, 0, 0, 0.08)',
    			'apple-lg': '0 10px 20px rgba(0, 0, 0, 0.12)',
    			'apple-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    			'apple-blur': '0 8px 32px rgba(0, 0, 0, 0.08)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
