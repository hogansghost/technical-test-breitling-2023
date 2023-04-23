module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'next/core-web-vitals', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    semi: 'off',
    '@typescript-eslint/semi': 'off',
  },
};
