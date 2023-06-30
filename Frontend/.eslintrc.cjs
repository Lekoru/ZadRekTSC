module.exports = {
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json'},
  settings: { react: { version: '18.2' } },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "react/react-in-jsx-scope": "off",
    "camelcase": "warn",
    "quotes": ["error", "single"],
    "no-extra-semi": "warn",
    "semi": "warn",
    "no-multi-spaces": "warn",
    "space-before-function-paren": "warn",
    "space-in-parens": "warn",
    "object-curly-spacing": "warn",
    "array-bracket-spacing":  "warn",
    "no-unused-expressions": "warn",
    "no-unused-labels": "warn",
    "no-unused-vars": "warn"
  },
}
