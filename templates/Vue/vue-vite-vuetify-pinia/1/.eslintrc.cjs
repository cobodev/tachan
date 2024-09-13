/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
  ],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 0,
    'vue/max-len': ['error', { code: 150, ignoreUrls: true }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-plusplus': 'off',
    'import/extensions': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
};
