import de from './locales/de.json'
import fr from './locales/fr.json'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'terminofeu-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity',
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n'],

  i18n: {
    locales: [
      { code: 'de', iso: 'de-CH', name: 'Deutsch' },
      { code: 'fr', iso: 'fr-CH', name: 'Français' },
      { code: 'it', iso: 'it-CH', name: 'Italieno' },
    ],
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'de',
      messages: {
        de,
        fr,
      },
    },
  },

  sanity: {
    projectId: 'nipfx4rq',
    dataset: 'production',
    minimal: false,
  },
  googleFonts: {
    families: {
      Nunito: [400, 600, 700],
    },
    display: 'swap',
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
