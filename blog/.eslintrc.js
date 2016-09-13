const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  extends: 'airbnb',
  parser: "babel-eslint", // 兼容 es6 写法：decorator 等
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 0,
    'import/no-unresolved': 0,
    'react/jsx-closing-bracket-location': [1, "after-props"],
    'react/jsx-first-prop-new-line': 0,
    'no-alert': isProduction === 'production' ? 1 : 0,
    'no-console': isProduction === 'production' ? 1 : 0,
    'no-debugger': isProduction === 'production' ? 2 : 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': ['error', { 'allowAfterThis': true }],
    'object-shorthand': ['error', 'always', { 'avoidQuotes': true }],
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': [2, 'never'],
  }
}