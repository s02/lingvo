// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/i18n', '@nuxt/eslint'],
  i18n: {
    detectBrowserLanguage: false,
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts'
  }
})
