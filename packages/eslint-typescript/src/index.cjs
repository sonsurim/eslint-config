module.exports = {
  env: { browser: true, es2021: true, node: true },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:jsdoc/recommended-typescript', '@sonny-fe/base'],
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {
    '@typescript-eslint/array-type': ['error', { 'default': 'array' }],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/consistent-indexed-object-style': [ 'error', 'index-signature' ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'typeLike',
        'format': ['PascalCase']
      }
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-inferrable-types': 'error'
  },
};