/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f6f7fb',
          100: '#eef0f8',
          200: '#d9deef',
          300: '#b7c0e0',
          400: '#8d9ad0',
          500: '#6574be',
          600: '#4b58a3',
          700: '#3b4582',
          800: '#2a315b',
          900: '#181b33',
          950: '#0b0c19',
        },
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0,0,0,0.12)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

