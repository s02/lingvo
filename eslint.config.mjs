import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-config-prettier'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import js from '@eslint/js'

export default withNuxt([
  js.configs.recommended,
  prettierRecommended,
  prettier,
  {
    files: ['**/*.{js,vue}'],
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/no-v-html': 'off'
    }
  }
])
