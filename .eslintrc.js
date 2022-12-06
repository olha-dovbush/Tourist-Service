// eslint-disable-next-line no-undef
module.exports = {
  ignorePatterns: ['.husky', '*.json', 'assets/', '*.css'],
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'plugin:jsx-a11y/recommended', 'plugin:storybook/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'linebreak-style': process.platform === 'win32' ? 'off' : ['error', 'unix'],
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'no-unused-vars': 'warn',
    'import/prefer-default-export': 'off',
    'react/jsx-no-undef': 'off',
    semi: 'warn',
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-wrap-multilines': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-trailing-spaces': 'warn',
    'react/forbid-prop-types': 'off',
    quotes: 'warn',
    'react/no-array-index-key': 'warn',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    indent: 'off',
    'padded-block': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-props-no-spreading': 'off',
    'operator-linebreak': 'off',
    'react/jsx-curly-newline': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-indent': 'off',
    'react/function-component-definition': 'off',
    'react/no-unescaped-entities': 'off',
    'no-console': 'off'
  }
};
