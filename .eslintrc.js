module.exports = {
  root: true,
  env: { browser: true },
  extends: 'airbnb-base',
  parserOptions: { ecmaVersion: 'latest' },
  rules: { 'import/extensions': 'off', 'import/prefer-default-export': 'off' },
};
