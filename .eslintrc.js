module.exports = {
  extends: [
    '@react-native-community',
    'eslint-config-prettier',
    'universe',
    'universe/shared/typescript-analysis',
    'plugin:react/jsx-runtime',
  ],
  rules: {
    'react-native/no-inline-styles': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
}
