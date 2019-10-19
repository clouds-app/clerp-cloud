import { Component, Vue, Watch } from 'vue-property-decorator';
@Component({
  components: {
    // 这里不管你用不用，都要写@Component。不然就会出现奇怪问题
  },
})
export default class BaseMixin extends Vue {
    public userForm = {
        username: 'admin-dk',
        password: '111111',
      };

public beforeMount() {
   console.log('===baseMixin====beforeMount========')
   // window.addEventListener('resize', this.resizeHandler);
  }

  public mounted(){
      this.$nextTick(()=>{
       
      })
      
  };

  public beforeDestroy() {
   // window.removeEventListener('resize', this.resizeHandler);
  }



}
