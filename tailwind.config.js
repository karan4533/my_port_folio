/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar': '#002855',
        'primary': '#1e40af',
        'primary-dark': '#1e3a8a',
        'accent': '#2563eb',
        'cyan': '#2563eb',
        'dark-bg': '#002855',
        'text-white': '#ffffff',
        'text-gray': '#6b7280',
        'violet': '#1e40af',
        'violet-light': '#3b82f6',
        'light-blue': '#2563eb',
        'sky-blue': '#3b82f6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        'gradient-accent': 'linear-gradient(90deg, #2563eb, #3b82f6)',
        'gradient-lime-blue': 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      },
      animation: {
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(37, 99, 235, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
