const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/ChanHung/'
  }
} : {}
export default {
  target: 'static',
  ...routerBase,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '展虹有限公司 PE再生料',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'Keywords', content: '郭庭如,塑膠廢料,資源回收,廢塑料回收,台南塑膠,KathyKuo,PE,PE塑膠,LDPE,LDPE塑膠,LDPE塑膠回收,HDPE,HDPE塑膠,HDPE塑膠回收,再生料,PE再生料,台南再生料,展虹,展虹有限,展虹有限公司,展虹塑膠,睿虹'},
      { name: 'Description', content: '台南展虹有限公司｜PE再製料｜PE塑膠膜｜PE料買賣' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://avatars.githubusercontent.com/u/8891260?v=4' },
      { property: 'og:title', content: '台南展虹有限公司' },
      { property: 'og:description', content: '台南展虹有限公司｜PE再製料｜PE塑膠膜｜PE料買賣' },
      { property: 'og:url', content: 'https://u0124047.github.io/ChanHung' },
      { name: 'google-site-verification', content: 'google41ca631478ebd4e8' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', sizes: '28x16', href: 'https://avatars.githubusercontent.com/u/8891260?v=4' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-fb-customer-chat.js', ssr: false }

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
