export default {
  
    /**
     * @description 默认页面标题
     */
     title: 'ERP-CLOUD',
    /**
     * @description token在Cookie中存储的天数，默认1天
     */
    cookieExpires: 1,
    /**
     * @description api请求基础路径 
     */
    baseUrl: {
      dev: '',//'http://120.78.91.203:8082/clerp-app-api/',
      pro: '',//'http://120.78.91.203:8082/clerp-app-api/'
    },
    IsMocK:false,
    conmomPrams:{},
  	baseImgUrl:'',

    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    homeName: 'home-from config',
    /**
     * @description 需要加载的插件
     */
    plugin: {
      // 'error-store': {
      //   showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      //   developmentOff: false // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
      // }
    }
  }
  