import { Component, Inject, Model, Prop, Provide, Vue, Watch,mixins } from 'nuxt-property-decorator'
import baseMixin from '@/mixins/baseMixin'
import md5 from 'js-md5';
import { getToken,getUserNameMd5, getMenuList } from '@/utils/cookies';
  interface User {
    firstName: string
    lastName: string
  }
  
  @Component({
    components: {
    }
  })
 // export default class YourComponent extends Vue {
 export default class extends mixins(baseMixin) {
   public md5LoginName:string ='';
   public message: string = 'This is a    message';
   public loginForm = {
        username: 'admin',
        password: '1234567',
      };
    
   public mounted() {
     this.$nextTick(()=>{
     // debugger
      console.log('home page get the about pages hello:' + this.$store.state.hello);
      console.log('home page get the about pages userNameMd5:' + this.$store.state.user.userNameMd5);
     })
   
    }
    public async login() {
      try {
        const res_md5Name =await this.$store.dispatch('user/getUserNameMd5_action', this.loginForm.username)
        this.md5LoginName =res_md5Name.data
        console.warn('res_md5Name:'+JSON.stringify(res_md5Name))
        if(this.md5LoginName!==""){
          const md5Pwd = md5(
            md5(this.loginForm.password + this.md5LoginName) + this.md5LoginName,
          );
          const params = {
            userId: this.loginForm.username,
            pwd: md5Pwd,
          };
          const handleLogin = await this.$store.dispatch('user/handleLogin_action',params)
          console.warn('handleLogin:'+JSON.stringify(handleLogin))
        }
        if(getToken()){
          const getMenuByToken = await this.$store.dispatch('user/getMenuByToken_action')
          console.warn('getMenuByToken:'+JSON.stringify(getMenuByToken))
        }
       
      } catch (error) {

      }
    }

  }