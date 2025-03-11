// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: [
            'node_modules',
            'dist',
            'eslint.config.mjs',
            'jest.config.js',
            'scripts/generateKey.mjs',
            'scripts/convertPemToJwk.mjs',
            'tests',
            '**/*.spec.ts',
            '**/*.test.ts',
            'app.spec.ts',
            'coverage',
        ],
    },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRoot: import.meta.dirname,
            },
        },
        rules: {
            'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
            'dot-notation': 'error',
        },
    }
)
