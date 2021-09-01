module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          light: "#4E88C2",
          DEFAULT: "#D7E3F7",
          dark: "#289597",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
