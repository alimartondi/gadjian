module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          light: "#54cfd1",
          DEFAULT: "#33BDBF",
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
