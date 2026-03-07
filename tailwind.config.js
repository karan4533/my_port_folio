/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^(bg|border|text|from|to)-(blue|violet|emerald|cyan|orange|pink|indigo|teal)-(50|100|200|300|400|500|600|700|800|900|950)$/,
      variants: ['hover'],
    },
  ],
  theme: {
    extend: {
      colors: {
        'sidebar': '#0c1527',
        'primary': '#3b82f6',
        'primary-dark': '#2563eb',
        'accent': '#3b82f6',
        'dark-bg': '#0c1527',
        'text-white': '#ffffff',
        'text-gray': '#6b7280',
        'light-blue': '#3b82f6',
        'sky-blue': '#60a5fa',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-accent': 'linear-gradient(90deg, #3b82f6, #60a5fa)',
        'gradient-lime-blue': 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
        'gradient-hero': 'linear-gradient(135deg, #f0f7ff 0%, #f5f3ff 100%)',
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
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
