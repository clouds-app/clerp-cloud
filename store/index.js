const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  locales: ['en', 'cn'],
  locale: 'cn',
  lang: 'zh',
  hello:'hello'
})

export const mutations = {
  setLang(state, lang) {
    state.lang = lang
  },
  setHello(state, data) {
    state.hello = data
  },
}

export const getters = {
  getCount (state) {
    return state.locale
  }
}

export const actions = {
    /**
     * nuxt 初始化
     * @param commit dispatch
     * @param req
     */
   nuxtServerInit({commit}, {req}) {
        console.log('nuxt init')
        console.log('req.headers.cookie:'+req.headers.cookie)
        let auth = null
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          console.log('nuxt init2:'+ JSON.stringify(parsed))
          try {
            auth = parsed.token
            console.log('nuxt init userNameMd5:'+auth)
          } catch (err) {
            console.log('No valid cookie found, nuxt init token :'+auth)
            // No valid cookie found
          }
         // console.log(JSON.stringify(context))
          //context.user.userNameMd5 ='11111222'
          commit('setHello', '111111222')
         // commit('user/SET_USERNAMEMD5', 'getUserNameMd5111111222')
        // dispatch('','getUserNameMd5111111222')
          //console.log(JSON.stringify(store))
        }
      },
}
