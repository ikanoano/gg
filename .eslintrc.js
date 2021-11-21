module.exports = {
  env: {
    browser: true,
    es2021: true,
//  jest/globals: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
//  'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
//  jest
  ],
  rules: {
    indent: [error, 2],
  }
};
