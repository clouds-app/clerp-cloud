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

   public message: string = 'This is a message'
   public loginForm = {
        username: 'admin',
        password: '1234567',
      };
    
   public mounted() {

    }
    

  }