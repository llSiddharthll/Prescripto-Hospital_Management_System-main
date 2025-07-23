module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime', // ✅ React 17+ JSX transform
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // ✅ Auto-detect React 18
    },
  },
  plugins: ['react-refresh', 'react-hooks'],
  rules: {
    'react/jsx-no-target-blank': 'off', // allow target=_blank without rel
    'react/react-in-jsx-scope': 'off', // ✅ no import React needed
    'react/prop-types': 'off', // ⚠️ turn off if using TypeScript or PropTypes separately
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/display-name': 'off', // ✅ allow anonymous arrow components
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ], // ✅ enforce arrow functions for components
  },
  ignorePatterns: [
    'dist/',
    'node_modules/',
    '.eslintrc.cjs',
  ],
};
