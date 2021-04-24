import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import sanity from './sanity'
import './assets/tailwind.css'
import de from './locales/de'
import fr from './locales/fr'

// Ready translated locale messages
const messages = {
  de,
  fr,
}

// Create VueI18n instance with options
const i18n = createI18n({
  locale: 'de', // set locale
  fallbackLocale: 'de',
  messages, // set locale messages
})

const app = createApp(App)
app.use(i18n)
app.use(router)
app.provide('$sanity', sanity)
app.mount('#app')
