/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#A2EAC7',
          300: '#D5F6E6',
          500: '#DDFDE6',
        },
        secondary: '#94EAC0',
        accent: '#56F1A6',
        beige: {
          100: '#F8F5F2',
          300: '#EDE6DE',
          500: '#E4D9CD',
          700: '#CBC0B5',
          900: '#5E5955',
          1000: '#292624',
          1100: '#201F1E',
          1300: '#151514',
        },
        black: {
          100: '#101512',
          200: '#28322C',
          300: '#2C3A32',
          500: '#42574A',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        excelorate: ['Excelorate', 'sans-serif'],
        sans: ['Orbitron', 'sans-serif'],
      },
      transitionProperty: {
        colors:
          'color, background-color, border-color, text-decoration-color, fill, stroke',
        all: 'all',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.primary.300'), 0 0 20px theme('colors.accent')",
      },
      keyframes: {
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
