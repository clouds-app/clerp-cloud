import {getValidatorToken, getMenuByToken, login} from '@/api/user';
import { getToken, setToken, setUserNameMd5, getUserNameMd5, getMenuList, setMenuList } from '@/utils/cookies';
const errObj =(msg) =>{
  let res ={
    data: '',
    msg: '执行失败:' + msg,
    status: -1,
    success: false,
  }
 return res
}

export const state = () => ({
    userNameMd5:'',
    token :'',
    menuList:{},
})
  
export const getters = {
    getUserNameMd5 () {
        return state.userNameMd5
    }
}
export const mutations = {
    SET_USERNAMEMD5(state,data) {
        state.userNameMd5 = data;
        setUserNameMd5(data);
    },
    SET_TOKEN(state,data) {
        state.token = data;
        setToken(data);
    },
    SET_MENU(state,data) {
        state.menuList = data;
        setMenuList(data);
    }
}

export const actions = {
    async getUserNameMd5_action({commit},userId) {
        try {
            const resObj = await getValidatorToken(userId);
            commit('SET_USERNAMEMD5',resObj.data)
            return Promise.resolve(resObj);
        } catch (error) {
           let errRes=errObj(error)
            return Promise.resolve(errRes);
        }
      },
      async handleLogin_action({commit},params) {
        try {
            const resObj = await login(params);
            commit('SET_TOKEN',resObj.data.token)
            return Promise.resolve(resObj);
        } catch (error) {
            let errRes=errObj(error)
            return Promise.resolve(errRes);
        }
      },
      async getMenuByToken_action({commit}) {
        try {
            const resObj = await getMenuByToken();
            commit('SET_MENU',resObj)
            return Promise.resolve(resObj);
        } catch (error) {
            let errRes=errObj(error)
            return Promise.resolve(errRes);
        }
      }
}
