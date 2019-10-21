import { Component, Inject, Model, Prop, Provide, Vue, Watch,mixins } from 'nuxt-property-decorator'
import baseMixin from '@/mixins/baseMixin'


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

   public message: string = 'This is a    message'
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
    public getUUId() {
      try {
        //debugger
       this.$store.dispatch('user/getUserNameMd5_action', this.loginForm.username).then(res =>{
                  console.log(res)
      })
      } catch (error) {
        // tslint:disable-next-line: no-debugger
        debugger;
      }
    }

  }