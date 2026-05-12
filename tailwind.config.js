/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1020',
        card: '#111827',
        cyanGlow: '#22D3EE',
        primaryBlue: '#1E3A8A'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,0.15)',
      }
    },
  },
  plugins: [],
}
