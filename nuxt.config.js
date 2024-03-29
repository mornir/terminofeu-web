import de from './locales/de.json'
import fr from './locales/fr.json'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // https://nuxtjs.org/api/configuration-modern/
  modern: process.env.NODE_ENV === 'production',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '...',
    titleTemplate: '%s | Terminofeu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Fire Safety Terminology',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: 'black' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/vue-debounce.js', '~/plugins/floating-vue.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', { cache: false }],
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-svg-loader',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [['nuxt-i18n', { seo: true, baseUrl: 'https://terminofeu.ch' }]],

  i18n: {
    strategy: 'prefix',
    locales: [
      { code: 'de', iso: 'de-CH', name: 'Deutsch' },
      { code: 'fr', iso: 'fr-CH', name: 'Français' },
      /* { code: 'it', iso: 'it-CH', name: 'Italiano' }, */
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

  router: {
    prefetchLinks: false,
  },

  generate: {
    fallback: true,
    crawler: false,
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
