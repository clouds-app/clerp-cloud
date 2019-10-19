import axios from '@/libs/api.request';
import Qs from 'qs';


/**
 * @desc getValidatorToken 描述 获取加密Token字符串
 *
 * @params 参数 userId: string
 *
 * @return 返回 user Name Md5 用户名加密字符串
 *
 * @author Andy Huang
 *
 * @created 2019/10/09 14:40:25
 */
export const getValidatorToken = (userId: string) => {
    // 参数
    const data = {
      userId,
    };
    return axios.request({
      url: '/api/user/validatorToken',
      data,
      method: 'post',
      // tslint:disable-next-line: no-shadowed-variable
      transformRequest: [(data: any) => {
        return Qs.stringify(data);
      }],
    });
  };

/**
 * @desc user.login 描述 用户登陆
 *
 * @params 参数 userId: string, pwd: string
 *
 * @return 返回
 *
 * @author Andy Huang
 *
 * @created 2019/10/11 16:27:22
 */
export const login = (data: { userId: string, pwd: string }) => {
  //  const { userId, pwd } = userInfo;
  //   // 参数
  //  const data = {
  //     userId,
  //     pwd,
  //   };
   return axios.request({
      url: '/api/user/login',
      data,
      method: 'post',
      // tslint:disable-next-line: no-shadowed-variable
      transformRequest: [(data: any) => {
        return Qs.stringify(data);
      }],
    });
  };

/**
 * @desc user.getMenuByToken 描述
 *
 * @params 参数:TOKEN IN HEAD
 *
 * @return 返回:List {JSON}} 菜单列表
 *
 * @author Andy Huang
 *
 * @created 2019/10/12 08:18:12
 */
export const getMenuByToken = () => {
    return axios.request({
       url: '/api/user/resourceInfoV2',
       method: 'post',
     });
   };
