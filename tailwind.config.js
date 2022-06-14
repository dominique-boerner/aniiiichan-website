module.exports = {
  content: ["./src/**/*.{html,ts}"],
  purge: {
    enabled: process?.argv?.indexOf("build") !== -1,
    content: [
      "./src/**/*.html",
      "./src/**/*.ts",
      "./projects/**/*.html",
      "./projects/**/*.ts",
    ],
  },
  darkMode: false,
};
