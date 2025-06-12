/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ForestGreen: '#214E3F',
        Terracotta: '#C8553D',
        StoneBeige: '#DCCBA4',
        CreamyWhite: '#FDFDFD',
        LightGray: '#F5F5F5',
        DarkText: '#333333',
        LightSectionBg: '#FDFDFD',
        PrimaryDarkGreen: '#214E3F',
        AccentOrange: '#C8553D',
        BodyTextDark: '#333333',
        Gray700: '#4A5568',
        Gray500: '#A0AEC0',
        LightText: '#FDFDFD',
        CardBgGreen: '#2B6A56',
        DarkForestGreen: '#1A362D', // Ensure this is also in your config
      },
    },
  },
  plugins: [],
};

// Add this to your main CSS file (e.g., src/index.css or src/App.css)
// Or, if you have a custom Tailwind plugin setup, you can add it there.
/*
@layer utilities {
  .bg-texture-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-30 0v-4H0v4h-4v2h4v4h2v-4h4v-2h-4zm0 30v-4H0v4h-4v2h4v4h2v-4h4v-2h-4zm0-14v-4H0v4h-4v2h4v4h2v-4h4v-2h-4zM14 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm30 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm0 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}
*/
