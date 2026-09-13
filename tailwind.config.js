/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B0F19',
          800: '#12172A',
          700: '#1E2536',
        },
      },
      backgroundImage: {
        // Single source of truth for the brand gradient (orange -> pink -> violet).
        // Change these stops here and the whole UI re-themes.
        brand: 'linear-gradient(90deg, #F97316 0%, #EC4899 55%, #8B5CF6 100%)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.12)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
