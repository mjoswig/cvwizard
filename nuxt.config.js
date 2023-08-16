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
      //{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Save time and effort with cvwizard, the best professional resume maker & CV builder online. Impress recruiters with a modern PDF resume template and get the job you want.' },
      { hid: 'og:title', property: 'og:title', content: 'cvwizard - Free CV Builder' },
      { hid: 'og:description', property: 'og:description', content: 'Save time and effort with cvwizard, the best professional resume maker & CV builder online. Impress recruiters with a modern PDF resume template and get the job you want.' },
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
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap'
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
  googleAnalytics: {
    id: 'G-SLD1FGYGSZ'
  },

  // Sitemap Configuration
  sitemap: {
    hostname: 'https://cvwizard.online/'
  }
}
