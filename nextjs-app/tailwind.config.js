/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dourado-sacra': '#C9A961',
        'dourado-claro': '#E5D4A1',
        'dourado-escuro': '#A68B3D',
        'azul-profundo': '#1A3A5C',
        'azul-medio': '#2D5A7F',
        'azul-claro': '#4A90A4',
        'off-white': '#F8F7F4',
        'marrom-claro': '#8B7355',
        'marrom-medio': '#6B5B47',
        'verde-oliva': '#6B7D47',
        'terracota': '#A0522D',
      },
      fontFamily: {
        'titulo': ['Cormorant Garamond', 'serif'],
        'texto': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['2rem', { lineHeight: '1.3' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        // Responsive font sizes
        'h1-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2-mobile': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3-mobile': ['1.5rem', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
          '2xl': '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1400px',
        },
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(201, 169, 97, 0.3)',
        'glow-lg': '0 0 40px rgba(201, 169, 97, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(201, 169, 97, 0.2)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

