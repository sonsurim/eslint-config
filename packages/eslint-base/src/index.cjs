module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ['plugin:import/errors', 'eslint:recommended', 'plugin:jsdoc/recommended'],
  plugins: ['json-format', 'vitest', 'prettier'],
  parserOptions: {
    "sourceType": "module"
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        arrowParens: 'avoid',
        bracketSpacing: true,
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxSingleQuote: false,
        jsxBracketSameLine: true,
        printWidth: 100,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'none'
      },
      {
        usePrettierrc: false
      }
    ],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'default-case-last': 'error',
    'func-style': ['error', 'expression'],
    'no-var': 'error',
    'no-console': 'error',
    'no-empty': 'error',
    curly: 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: '@',
            group: 'internal',
            position: 'after'
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'no-redeclare': 'off',
    'jsdoc/require-jsdoc': 'warn'
  }
}
