/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#590BD8',
        secondary: '#312A4F',
        primary100: '#DDD5EA',
        warning: '#FE3838'
      },
      textColor: {
        tc800: '#717171',
        tc600: '#BBBFBF',
        tc400: '#F5F5F5'
      }
    },
  },
  plugins: [],
}
