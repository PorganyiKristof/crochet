/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom': '#F5EEE6',
        'custom2': '#F3D7CA',
        'custom3': '#E6A4B4',
        'custom4': '#C86B85',
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit,minmax(20rem,1fr))',
      },

    },
  },
  plugins: [],
}