module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      inset: {
        1: '1rem',
      },
      listStyleType: {
        circle: 'circle',
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
