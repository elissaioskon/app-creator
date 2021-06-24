module.exports = {
  extends: [
    'airbnb-typescript', //  adds airbnb rules both react & javascript on this project  
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    "prettier" // turn off rules that conflict or are unnecessary with Prettier. This happens with es package
 ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parser: '@typescript-eslint/parser', //  convert source code to AST using typescript parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
     "no-console": 1,
     "react/react-in-jsx-scope": "off"
  },
  ignorePatterns: ['.eslintrc.js']
};
