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
    userNameMd5:''
})
  
export const getters = {
    getUserNameMd5 () {
        return state.userNameMd5
    }
}
export const mutations = {
    SET_USERNAMEMD5(state,userNameMd5) {
      /**
       * @desc user 描述
       *
       * @params 参数
       *
       * @return 返回
       *
       * @author Andy Huang
       *
       * @created 2019/10/21 15:39:18
       */
        state.userNameMd5 = userNameMd5;
        setUserNameMd5(userNameMd5);
    }
}

export const actions = {
    async getUserNameMd5_action({commit},userId) {
        //
        try {
            const resObj = await getValidatorToken(userId);
            commit('SET_USERNAMEMD5',resObj.data)
            return Promise.resolve(resObj);
        } catch (error) {
           let errRes=errObj(error)
            return Promise.resolve(errRes);
        }
      }
}
