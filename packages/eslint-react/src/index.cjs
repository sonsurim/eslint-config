module.exports = {
  plugins: ["react", "react-hooks", "jsx-a11y", "testing-library"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/button-has-type": "error",
    "react/jsx-sort-props": [
      "error",
      {
        "callbacksLast": true,
        "reservedFirst": true
      }
    ],
    "react/jsx-pascal-case": "error",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
  },
};