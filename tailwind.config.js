/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1/3': '1fr 3fr',
      },
      colors: {
        'primary': '#2E3037',
        'secondary': '#F5F6F8'
      },
      screens: {
        'xsm': '420px',
      },
    },
  },
  plugins: [],
}