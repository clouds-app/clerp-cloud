const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  locales: ['en', 'cn'],
  locale: 'cn',
  lang: 'zh',
})

export const mutations = {
  setLang(state:any, lang:any) {
    state.lang = lang
  },
  // SET_LANG(state:any, locale:any) {
  //   if (state.locales.indexOf(locale) !== -1) {
  //     state.locale = locale
  //   }
  // }
}

export const getters = {
  getCount (state: any) {
    return state.locale
  }
}

export const actions = {
  add (context: any) {
    context.commit('SET_LANG')
  },
    /**
     * nuxt 初始化
     * @param commit
     * @param req
     */
   nuxtServerInit({commit, state}: any, {req}: any) {
        console.log('nuxt init')
        console.log(req.headers.cookie)
        let auth = null
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
            auth = JSON.parse(parsed.auth)
          } catch (err) {
            // No valid cookie found
          }
          commit('setAuth', auth)
        }
      },
}
