module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    semi: 'off',
    '@typescript-eslint/quotes': [
      'off',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'jsx-quotes': ["error", "prefer-single"],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'linebreak-style': ['error', 'windows'],
    'sort-imports': 'error',
    'import/order': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
  },
};
