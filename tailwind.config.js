/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1B2340',
          'navy-dark': '#121830',
          gold: '#C6A35B',
          'gold-light': '#E7CFA0',
          'gold-dark': '#A8853F',
          pearl: '#F7F3EA',
          blush: '#F2E4E8',
        },
      },
      fontFamily: {
        tajawal: ['Tajawal', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(27, 35, 64, 0.25)',
        glow: '0 0 0 1px rgba(198, 163, 91, 0.35), 0 12px 40px -10px rgba(198, 163, 91, 0.35)',
      },
    },
  },
  plugins: [],
};
