/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1559B5",
          bluedark: "#0E3F87",
          bluelight: "#EAF1FB",
          orange: "#F26A1B",
          orangelight: "#FFF1E6",
          ink: "#1A2230",
          slate: "#5A6573",
          mist: "#F5F7FA",
          line: "#E3E8EF",
        },
      },
      fontFamily: {
        display: ['"Libre Franklin"', "system-ui", "sans-serif"],
        body: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,34,55,0.04), 0 8px 24px rgba(16,34,55,0.06)",
        cardhover: "0 4px 8px rgba(16,34,55,0.06), 0 16px 40px rgba(16,34,55,0.12)",
      },
      maxWidth: {
        prose: "44rem",
      },
    },
  },
  plugins: [],
};
