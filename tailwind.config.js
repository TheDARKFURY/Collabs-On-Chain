module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ["Lexend Tera"],
        Outfit: ["Outfit"],
      },
      colors: {
        phantom: "linear-gradient(189.84deg, #534BB2 7.39%, #551EF5 77.27%)",
        borderline: "rgba(139, 209, 210, 0.46)",
        addMemberForm: "linear-gradient(130.18deg, #8BD1D2 1%, #E07FF9 100%)",
      },
      backgroundImage: {
        phan: "linear-gradient(189.84deg, #534BB2 7.39%, #551EF5 77.27%)",
      },
    },
  },
  plugins: [],
};
