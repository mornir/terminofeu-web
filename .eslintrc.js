module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:chai-friendly/recommended',
  ],
  plugins: ['prettier', 'cypress', 'chai-friendly'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/script-setup-uses-vars': 'off',
  },
}
