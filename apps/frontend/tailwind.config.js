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
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      display: ['Montserrat', 'sans-serif'],
    },
    colors: {

      primary: "#FADCEA",
      primaryVariant: "#EFDFE0",
      secondary: "#720012",
      secondaryVariant: "#3700CB",
      toolbar: "#49A2D3",
      navigationBar: "#3B82B2",
      background: "#FFF8F6",
      surface: "#FFFFFF",
      success: "#4CAF50",
      info: "#03A9F4",
      warning: "#FFC107",
      error: "#B00020",
      danger: "#F44336",
      onError: "#FFFFFF",
      onPrimary: "#FFFFFF",
      onSecondary: "#FFFFFF",
      onSurface: "#292929",
      onBackground: "#292929",
      onToolbar: "#FFFFFF",
      textPrimary: "#292929",
      textSecondary: "#575757",
      divider: "#C6C6C6",
      textTrack: "#959595",
      black: "#000000",
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }

}