
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#E89A5C',
          light: '#F0B888',
          dark: '#D88547',
        },
        olive: {
          DEFAULT: '#5A6B4A',
          dark: '#4A5A3D',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#1a1a1a',
          deep: '#0f0f0f',
        },
        cream: '#F3F0EA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
}
