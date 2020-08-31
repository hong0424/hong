<template>
    <div class="login">
        <span>请登录</span>
        <form >
          <div class="inputcs">
            <mt-field label="用户名"  placeholder="请输入用户名" name="user_id" v-model="loginForm.user_id"></mt-field>
            <mt-field label="密码"   placeholder="请输入密码" type="password" name="password" v-model="loginForm.password"></mt-field>
          </div>
          
          <div class="buttoncs">
              <mt-button type="primary" size="normal" @click.prevent="submit()"> 登录</mt-button> 
          </div>
        </form>
        
        <div class="buttoncs">
        <router-link to="/zhuce" class="bn">
        <mt-button type="primary" size="normal"> 注册</mt-button>
        </router-link>  
    </div>
    </div>
    
</template>

<style lang="stylus">
.login
  width 370px
  height 500px
  top 130px
  position relative   
  font-size 20px
  
.inputcs
  height 120px 
  padding 10px

.buttoncs
  padding 5px
</style>

<script>
import {setLocalStorage} from '@/utils/localStorage'

export default {
  data(){
			return {
				loginForm: {
					user_id: '',
					password:''
				},
			}
		},
  methods: {
			showMessage(message){
          this.$messagebox.alert(message)
      },
      submit(){
          this.$api.user.postlogin(this.loginForm).then(res=> {
            if(res.code == -1){  
              this.showMessage(res.data.message)//用户不存在
            }
            else if(res.code == 0){
								this.showMessage(res.data.message)//密码错误
							}else if(res.code == 1){
								//成功验证
                setLocalStorage("Token",res.data.token)
                // this.showMessage(res.data.user_name)
                //let userName = res.data.user_name
								this.$router.push({ path: `/person` })
							}else{
								this.showMessage("未知错误")
							}
        })
      },
      
  }
		
}

</script>