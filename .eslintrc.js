module.exports = {
  extends: [
    '@react-native-community',
    'eslint-config-prettier',
    'universe',
    'universe/shared/typescript-analysis',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
}
