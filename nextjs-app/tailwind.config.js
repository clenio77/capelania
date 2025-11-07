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
        'h1': '3.5rem',
        'h2': '2.5rem',
        'h3': '2rem',
        'h4': '1.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
}

