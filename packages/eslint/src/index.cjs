module.exports = {
  extends: ["@sonny-fe/eslint-config-base"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: '@typescript-eslint/parser',
      extends: ["@sonny-fe/eslint-config-ts"],
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["@sonny-fe/eslint-config-react", "@sonny-fe/eslint-config-next"],
      rules: {
        'jsdoc/require-jsdoc': 'warn'
      }
    },
    {
      files: ["**/*.tsx"],
      parser: '@typescript-eslint/parser',
      rules: {
        "react/prop-types": "off",
      },
    },
    {
      files: ["gatsby-node.{js,jsx,ts,tsx}"],
      env: {
        node: true,
        browser: false,
      },
    },
    {
      files: ["gatsby-ssr.{js,jsx,ts,tsx}"],
      env: {
        node: true,
        browser: true,
        "shared-node-browser": true,
      },
    },
    {
      files: ["gatsby-browser.{js,jsx,ts,tsx}"],
      env: {
        node: false,
        browser: true,
      },
    },
  ],
};