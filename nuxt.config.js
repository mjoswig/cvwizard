export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // SSR (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr)
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cvwizard - Free CV Builder',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Save time and effort with cvwizard, the best professional Resume Maker & CV Builder online. Impress recruiters with a modern PDF resume template and get the job you want.' },
      { hid: 'og:title', property: 'og:title', content: 'cvwizard - Free CV Builder' },
      { hid: 'og:description', property: 'og:description', content: 'Save time and effort with cvwizard, the best professional Resume Maker & CV Builder online. Impress recruiters with a modern PDF resume template and get the job you want.' },
      { hid: 'og-image', property: 'og:image', content: 'https://cvwizard.online/images/og-image.png' },
      { hid: 'twitter-image', property: 'twitter:image', content: 'https://cvwizard.online/images/og-image.png' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v3' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/firebase-storage' },
    { src: '@/plugins/vue-color', mode: 'client' },
    { src: '@/plugins/vuex-persist', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MEASUREMENT_ID
        },
        services: {
          storage: true
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Google Fonts Configuration
  googleFonts: {
    families: {
      Poppins: true,
      Nunito: true,
      Merriweather: true,
      Inconsolata: true,
      Karla: true,
      'Fira+Sans': true,
      'Saira+Semi+Condensed': true
    }
  },

  // Google Analytics Configuration
  'google-gtag': {
    id: 'G-SLD1FGYGSZ'
  },

  // Sitemap Configuration
  sitemap: {
    hostname: 'https://cvwizard.online',
    routes: async () => {
      const fs = require('fs')
      let files = fs.readdirSync('./assets/json/cv-data')
      files = files.filter(file => file !== 'default.json')
      let routes = files.map(file => `/cv-templates/${file.split('.json')[0]}`)
      return routes
    }
  },

  // Axios Configuration
  axios: {
    baseURL: '/'
  },

  // Environment Configuration
  env: {
    telegramBotApiKey: process.env.TELEGRAM_BOT_API_KEY || null,
    telegramBotChatId: process.env.TELEGRAM_BOT_CHAT_ID || null
  },

  // Toast Configuration
  toast: {
    position: 'top-center',
    duration: 2000
  },

  // Server Middleware Configuration
  serverMiddleware: [
    { path: '/', handler: '~/api/index.js' }
  ]
}
