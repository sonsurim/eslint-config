module.exports = {
  env: { browser: true, es2021: true },
  parser: '@babel/eslint-parser',
  extends: ['@sonny-fe/ts'],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'testing-library'],
  'parserOptions': {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/button-has-type': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        'callbacksLast': true,
        'reservedFirst': true
      }
    ],
    'react/jsx-pascal-case': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'error',
      {
        'component': true,
        'html': true
      }
    ],
    'react/prop-types': 'off',
    'jsdoc/require-jsdoc': 'warn'
  },
};