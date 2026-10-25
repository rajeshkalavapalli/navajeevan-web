/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        inter: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Deep navy — the base of the brand
        ink: {
          950: '#081A33',
          900: '#0C2445',
          800: '#143057',
          700: '#1D3F6E',
          600: '#2A5285',
        },
        // Taken from the Navajeevan logo blue
        brand: {
          50: '#EEF5FC',
          100: '#D9E8F7',
          200: '#B3D1EF',
          300: '#7FB0E2',
          400: '#4A90D9',
          500: '#1F6FBF',
          600: '#175AA0',
          700: '#124781',
        },
        // Warm accent — hope, warmth, action
        marigold: {
          100: '#FCEFD6',
          200: '#F9DDA8',
          300: '#F6C979',
          400: '#EFB04F',
          500: '#E39A2D',
          600: '#C27E17',
        },
        ivory: '#FBF8F2',
        sand: '#F3ECDF',
        line: '#E7DFD0',
        muted: '#5B6573',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,27,46,0.04), 0 8px 24px -8px rgba(11,27,46,0.10)',
        lift: '0 2px 4px rgba(11,27,46,0.04), 0 24px 48px -16px rgba(11,27,46,0.22)',
        glow: '0 10px 30px -10px rgba(227,154,45,0.55)',
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.12)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        kenburns: 'kenburns 9s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
