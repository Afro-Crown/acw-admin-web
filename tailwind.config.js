/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    fontFamily: {
      'REGULAR': 'Roboto_400Regular',
      'BOLD': 'Roboto_700Bold',
      'TRIRONG': 'Trirong_500Medium_Italic',
      'ASSISTANT_SEMIBOLD': 'Assistant_600SemiBold',
      'ASSISTANT_BOLD': 'Assistant_700Bold',
      'ASSISTANT_REGULAR': 'Assistant_400Regular',
      'ASSISTANT_LIGHT': 'Assistant_200ExtraLight',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
