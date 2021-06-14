module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue,ts}',
    '!src/main.js',
  ],
  transformIgnorePatterns: [
    // 'node_modules/(?!(vue3-carousel)/)',
    'node_modules/(?!vue3-carousel|@vueform|vue-router)'],
  modulePathIgnorePatterns: ['src/main.ts'],
};
