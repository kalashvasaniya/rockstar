/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'new-rocker': ['New Rocker', 'system-ui'],
        'rock-3d': ['Rock 3D', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-left': 'slideLeft 5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-right': 'slideRight 5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 5s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-slow': 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

