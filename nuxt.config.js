const DEFAULT_TITLE = 'Conseil Logiciel & Web Charlevoix'
const DEFAULT_DESCRIPTION =
  "Conseil en TI, conception de logiciels, réalisation d'applications web et création de sites internet sur-mesure dans Charlevoix (La Malbaie, Clermont)"
const DEFAULT_LANG = 'fr'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: DEFAULT_LANG,
    },
    title: DEFAULT_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: DEFAULT_DESCRIPTION,
      },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },

      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
      },
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-YPRV1NNYKZ',
        async: true,
      },
      { src: '/js/gtag.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/base.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://google-fonts.nuxtjs.org/
    // [
    //   '@nuxtjs/google-fonts',
    //   {
    //     families: {
    //       Roboto: {
    //         ital: [100, 300, 400, 500, 700, 900],
    //         wght: [100, 300, 400, 500, 700, 900],
    //       },
    //     },
    //   },
    // ],
    'nuxt-compress',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n-legacy.nuxtjs.org/
    'nuxt-i18n',
  ],

  i18n: {
    parsePages: false,
    langDir: '~/locales/',
    locales: [
      { code: 'en', iso: 'en-CA', file: 'en.json', dir: 'ltr' },
      { code: 'fr', iso: 'fr-CA', file: 'fr.json', dir: 'ltr' },
    ],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'fr',
    },
    pages: {
      equipe: {
        en: '/team',
        fr: '/equipe',
      },
      merci: {
        en: '/thank-you',
        fr: '/merci',
      },
      'services/coaching-et-formation': {
        en: '/services/coaching-and-training',
        fr: '/services/coaching-et-formation',
      },
      'services/conseil-et-accompagnement': {
        en: '/services/consulting-and-guidance',
        fr: '/services/conseil-et-accompagnement',
      },
      'services/deroulement-et-tarifs': {
        en: '/services/process-and-rates',
        fr: '/services/deroulement-et-tarifs',
      },
      'services/direction-technique': {
        en: '/services/cto-as-a-service',
        fr: '/services/direction-technique',
      },
      'services/realisation-et-hebergement': {
        en: '/services/delivery-and-hosting',
        fr: '/services/realisation-et-hebergement',
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: false,
    manifest: {
      name: DEFAULT_TITLE,
      short_name: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      lang: DEFAULT_LANG,
    },
    meta: {
      name: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      lang: DEFAULT_LANG,
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#FBFCFC',
          secondary: '#69A1BB',
          accent: '#D8EBF1',
          info: '#212F3C',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 30,
    },
  },

  router: {
    trailingSlash: true,
  },
}
