module.exports = {
  mode: 'universal', //ssr
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  router: {
   // middleware: 'i18n'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/element-ui', ssr: true},
    {src: '@/plugins/global-config.js', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  'buildModules': [
  ['@nuxt/typescript-build', {
    typeCheck: true,
   // ignoreNotFoundWarnings: true
  }]
],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n-module', {
      languages: ['cn', 'en']
    }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
 axios: {
  proxy: true, // 表示开启代理
  prefix: '/api', // 表示给请求url加个前缀 /api
  credentials: true // 表示跨域请求时是否需要使用凭证
},
  proxy: {
    '/api': {
      target: 'http://120.78.91.203:8082/clerp-app-api/', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
     /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor: ['axios'] //为防止重复打包
    }
}
