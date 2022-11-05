const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(${cssVar}, ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(${cssVar}, var(${opacityVariable}, 1))`;
    }
    return `rgb(${cssVar})`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "40px",
        "2xl": "128px",
      },
    },
    fontFamily: {
      display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {
        primary: {
          50: customColors("240, 249, 255"),
          100: customColors("224, 242, 254"),
          200: customColors("186, 230, 253"),
          300: customColors("125, 211, 252"),
          400: customColors("56, 189, 248"),
          500: customColors("14, 165, 233"),
          6000: customColors("2, 132, 199"),
          700: customColors("3, 105, 161"),
          800: customColors("7, 89, 133"),
          900: customColors("12, 74, 110"),
        },
        secondary: {
          50: customColors("240, 253, 244"),
          100: customColors("220, 252, 231"),
          200: customColors("187, 247, 208"),
          300: customColors("134, 239, 172"),
          400: customColors("74, 222, 128"),
          500: customColors("34, 197, 94"),
          6000: customColors("22, 163, 74"),
          700: customColors("21, 128, 61"),
          800: customColors("22, 101, 52"),
          900: customColors("20, 83, 45"),
        },
        neutral: {
          50: customColors("249, 250, 251"),
          100: customColors("243, 244, 246"),
          200: customColors("229, 231, 235"),
          300: customColors("209, 213, 219"),
          400: customColors("156, 163, 175"),
          500: customColors("107, 114, 128"),
          6000: customColors("75, 85, 99"),
          700: customColors("55, 65, 81"),
          800: customColors("31, 41, 55"),
          900: customColors("17, 24, 39"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
