/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EBF2FF',
          100: '#D6E4FF',
          200: '#ADC8FF',
          300: '#85ABFF',
          400: '#5C8EFF',
          500: '#3B82F6',
          600: '#0A5BDB',
          700: '#0744A8',
          800: '#042C6F',
          900: '#021638',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          50: '#F3EEFF',
          100: '#E8DDFF',
          200: '#D1BBFF',
          300: '#BA99FF',
          400: '#A377FF',
          500: '#8B5CF6',
          600: '#6E35EB',
          700: '#5319C3',
          800: '#3A118A',
          900: '#1F0A4C',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};