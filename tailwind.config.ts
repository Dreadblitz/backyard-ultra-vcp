import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'navy-dark': '#1B1B3A',
          'violet-deep': '#6B3D99',
          'violet-medium': '#8B4DAF',
          'magenta': '#E91E8C',
          'pink-bright': '#FF006E',
          'orange-vibrant': '#FF6B4D',
          'orange-ultra': '#FF8B3D',
          'coral-soft': '#FFB27D',
          'cyan-neon': '#00D9FF',
          'black-bg': '#0A0A1F',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1B1B3A 0%, #6B3D99 25%, #E91E8C 50%, #FF6B4D 75%, #FFB27D 100%)',
        'gradient-neon': 'linear-gradient(90deg, #00D9FF 0%, #8B4DAF 100%)',
        'gradient-night': 'linear-gradient(180deg, #0A0A1F 0%, #1B1B3A 50%, #6B3D99 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        glow: {
          '0%': {
            boxShadow: '0 0 5px #00D9FF, 0 0 10px #00D9FF, 0 0 15px #00D9FF',
          },
          '100%': {
            boxShadow: '0 0 10px #00D9FF, 0 0 20px #00D9FF, 0 0 30px #00D9FF',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
