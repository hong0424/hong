<template>
    <div class="zhuce">
        <div >注册易主帐号</div>
        <div classs="inputcs">
          <mt-field label="帐号" placeholder="请输入帐号" v-model="zhuceForm.user_id"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" v-model="zhuceForm.password"></mt-field>
          <mt-field label="真实姓名" placeholder="请输入真实姓名" v-model="zhuceForm.user_name"></mt-field>
        </div>
        <div class="btcs">  
          <router-link to="/login" class="bn">
            <mt-button type="primary" size="normal" @click.native="zhuce()"> 注册</mt-button>
          </router-link>
        </div>
    </div>
</template>
<script>
export default {
   data() {
     return {
      zhuceForm:{
        user_id:'',
        password:'',
        user_name:''
       }
     }
   },
    methods:{
      showMessage(message){
          this.$messagebox.alert(message)
      },
      zhuce(){
      this.$api.user.addUserInfo(this.zhuceForm).then(res=> {
        if(res.code == 1){  
            this.showMessage(res.data.message)
            //     let userName = res.data.user_name
            this.$router.push({ path: "/login" })
				}else{
					this.showMessage("未知错误")
				}
      })
      }
    }
}
</script>
<style lang="stylus">
.zhuce
  width 370px
  
  top 130px
  position relative   
  font-size 20px


.btcs
  padding 10px
</style>