/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'Assistant': 'Assistant, sans-serif',
      'Trirong': 'Trirong, serif',
    },
    colors: {
      "gradient-primary": "#F67F57",
      "gradient-secondary": "#FF6734",
      "gradient-hover": "#f67f57",
      "gradient-button-block": "#fdbba5",
      "gradient-input-code1": "#f8f8f8",
      "gradient-input-code2": "#f9f9f9",
      "white": "#FFFFFF",
      "input-bar" : "#C7C7C7",
      "black": "#2E2E2E",
      "color-error": "#ab3333",
      "red-background-analysis": "#A21A1A",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'service-default': "url('/public/service-default.jpeg')",
      },
    },
  },
  plugins: [],
}
