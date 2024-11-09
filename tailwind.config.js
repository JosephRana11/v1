/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./public/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
            brand: {
              black: {
                primary: "#222831",
                secondary: "#393E46",
              },
              yellow: {
                primary: "#FFD369",
              },
              grey: {
                primary: "#eeeeee",
              },
            }
            }
      },
    },
    plugins: [],
  }