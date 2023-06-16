const allowedWidthSuffixes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
      boxShadow: {
        range: '0 0 0 1px #fff, 0 0 0.2rem 0.2rem rgb(var(--ht-primary-rgb) / 0.3)',
      },
      colors: {
        black: '#2D2A26',
        white: '#FFFFFF',

        'gray-dark': '#6D6E71',
        'gray-cool': '#BCBEC0',
        'gray-blue': '#E5E9EC',
        'gray-light': '#F1F2F2',

        primary: '#005CB9',
        'primary-dark': '#00488E',
        'primary-medium': '#C7EAFB',
        'primary-light': '#F1FAFE',

        secondary: '#318CDD',

        complementary: '#FF6900',

        success: '#28A745',
        'success-medium': '#93D3A2',
        'success-light': '#E3FDF7',

        danger: '#F32735',
        'danger-medium': '#FF747F',
        'danger-light': '#FFF5F6',

        warning: '#E0AF00',
        'warning-medium': '#FFE73B',
        'warning-light': '#FFFCE4',
      },
      fontFamily: {
        sans: ['Helvitica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Source Code Pro', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
        '2xl': ['1.375rem', { lineHeight: '2rem' }],
        '3xl': ['1.5rem', { lineHeight: '2rem' }],
        '4xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '5xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '6xl': ['3rem', { lineHeight: '1' }],
        '7xl': ['3.75rem', { lineHeight: '1' }],
        '8xl': ['4.5rem', { lineHeight: '1' }],
        '9xl': ['6rem', { lineHeight: '1' }],
        '10xl': ['8rem', { lineHeight: '1' }],
      },
      gridTemplateColumns: {
        'auto-2': 'repeat(2, auto)',
        'auto-3': 'repeat(3, auto)',
        'auto-4': 'repeat(4, auto)',
        'auto-5': 'repeat(5, auto)',
        'auto-6': 'repeat(6, auto)',
      },
      maxHeight: ({ theme }) => ({
        ...theme('spacing'),
      }),
      maxWidth: ({ theme }) => ({
        ...theme('spacing'),
      }),
      minWidth: ({ theme }) => ({
        ...theme('spacing'),
      }),
      ringColor: ({ theme }) => ({
        DEFAULT: theme('colors.primary'),
      }),
      transitionProperty: {
        'max-h': 'max-height',
        transform: 'transform',
      },
      scale: {
        70: '0.7',
      },
      spacing: {
        4.5: '1.125rem',
      },
      transitionDelay: {
        0: '0ms',
      },
      width: ({ theme }) =>
        Object.entries(theme('maxWidth'))
          .filter(([key]) => allowedWidthSuffixes.includes(key))
          .reduce((memo, [key, val]) => ({
            ...memo,
            [key]: val,
          }), {}),
    },
  },
  plugins: [],
}
