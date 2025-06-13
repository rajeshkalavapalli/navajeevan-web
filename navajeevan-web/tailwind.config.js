/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Ensure Inter font is available
      },
      colors: {
        // Renamed keys for direct Tailwind class usage (e.g., bg-primary-dark-green)
        'primary-dark-green': '#214E3F',
        'forest-green': '#214E3F', // Keep if you use both names
        'dark-forest-green': '#1A362D',
        'accent-orange': '#C8553D',
        'terracotta': '#C8553D', // Keep if you use both names
        'stone-beige': '#DCCBA4',
        'creamy-white': '#FDFDFD',
        'light-gray': '#F5F5F5',
        'body-text-dark': '#333333',
        'gray-700': '#4A5568',
        'gray-500': '#A0AEC0',
        'light-text': '#FDFDFD',
        'card-bg-green': '#2B6A56',
        'light-section-bg': '#FDFDFD', // Ensure this is also available
      },
      keyframes: {
        'logo-slide': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'logo-slide': 'logo-slide linear infinite',
      },
    },
  },
  plugins: [],
};
