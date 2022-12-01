module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'warn',
    'import/prefer-default-export': 'off',
    'no-shadow': 'warn',
    'no-param-reassign': 'warn',
    'class-methods-use-this': 'warn',
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    'linebreak-style': 0,
  },
};
