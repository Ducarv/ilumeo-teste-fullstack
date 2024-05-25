module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
    ],
    rules: {
    },
    ignores: [
      "node_modules",
      "coverage"
    ]
  };
  