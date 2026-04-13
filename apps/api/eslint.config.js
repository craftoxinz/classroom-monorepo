// @ts-check
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig({
  files: ['**/*.{js,mjs,ts,mts}'],
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
  ],
  languageOptions: {
    globals: {
      ...globals.builtin,
      ...globals.nodeBuiltin, // modern node esm
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
});
