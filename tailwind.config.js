/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },

    extend: {
      colors: {
        'body': "#0C0C18",
        'container': "#18182C",
        'outline1': "#7e50ff",
        'text1': "#77798F",
        'text2': "#1a1a1a",
        'hover1': "#272742",
      },
    },
    screens: {
      ss: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
    },
  },
  plugins: [],
}