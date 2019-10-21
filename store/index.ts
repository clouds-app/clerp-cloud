
export const state = () => ({
  locales: ['en', 'cn'],
  locale: 'cn'
})

export const mutations = {
  SET_LANG(state:any, locale:any) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export const getters = {
  getCount (state: any) {
    return state.locale
  }
}

export const actions = {
  add (context: any) {
   // context.commit('SET_LANG')
  }
}
