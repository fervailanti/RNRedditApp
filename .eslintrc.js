module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['warn', 'never'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    // prettier is used instead
    'comma-dangle': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
      },
    ],
    'react/jsx-key': [
      'error',
      { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
}
