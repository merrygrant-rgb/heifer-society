/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bone: '#F5F3EF',
        'cream-dark': '#EDE9E2',
        charcoal: '#1A1A1A',
        oxblood: '#7B2D3B',
        'oxblood-light': '#8B3D4B',
        gold: '#B8A066',
        olive: '#5A6348',
        'text-primary': '#1A1A1A',
        'text-secondary': '#6B6B6B',
        'text-muted': '#8B8B8B',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        'card': '16px',
        'container': '20px',
        'button': '8px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 30px rgba(0,0,0,0.1)',
        'subtle': '0 2px 10px rgba(0,0,0,0.04)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'draw-line': 'draw-line 1.2s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
