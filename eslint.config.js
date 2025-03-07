import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    // Настройки для TypeScript
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      '@angular-eslint': angular,
    },
    rules: {
      ...typescript.configs['recommended'].rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    // Настройки для Angular шаблонов (HTML)
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
    rules: {
      ...angularTemplate.configs['recommended'].rules,
    },
  },
  {
    // Настройки для Prettier
    files: ['**/*.{ts,html}'],
    plugins: {
      prettier,
    },
    rules: {
      ...prettier.configs['recommended'].rules,
      'prettier/prettier': 'error',
    },
  },
  {
    // Отключаем правила ESLint, которые конфликтуют с Prettier
    ...eslintConfigPrettier,
  },
  {
    // Общие правила для JavaScript/TypeScript
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off', // Отключаем, так как используем @typescript-eslint/no-unused-vars
    },
  },
];