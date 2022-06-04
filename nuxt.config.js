import redirectSSL from 'redirect-ssl'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // SSR (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr)
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cvwizard.io - Professional CV Builder',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      //{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Save time and effort with cvwizard.io, the best professional resume maker & CV builder online. Impress recruiters with a modern PDF resume template and get the job you want.' },
      { hid: 'og:title', property: 'og:title', content: 'Professional CV Builder - cvwizard.io' },
      { hid: 'og:description', property: 'og:description', content: 'Save time and effort with cvwizard.io, the best professional resume maker & CV builder online. Impress recruiters with a modern PDF resume template and get the job you want.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vue-color.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    [
      'nuxt-stripe-module',
      {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
      }
    ],
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-8905784477674250'
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Server Middleware Configuration
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
    }),
    { path: '/api', handler: '~/api/index.js' }
  ],

  // Google Fonts Configuration
  googleFonts: {
    families: {
      Poppins: true,
      Nunito: true,
      Merriweather: true,
      Inconsolata: true,
      Karla: true,
      'Fira+Sans': true,
      'Saira+Semi+Condensed': true,
      'Open+Sans': true
    }
  },

  // Google Analytics Configuration
  googleAnalytics: {
    id: 'UA-96470754-12'
  },

  // Sitemap Configuration
  sitemap: {
    hostname: 'https://www.cvwizard.io'
  },

  // Axios Configuration
  axios: {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://www.cvwizard.io' : 'http://localhost:3000'
  }
}
