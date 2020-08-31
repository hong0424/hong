<template>
  <div >
    <div class="imgdiv">
      <img src="../../public/3.jpg" class="imgdiv">
    </div>
    <div class="imghead">
      <img src="../../public/1.jpg" alt="" width="80px" height="80px">
    </div>
    <div class="name">
      姓名：{{name}}
    </div>
    <div class="fabu">
      <router-link to="/mygoods" >
        <mt-button type="primary" size="large"> 发布的商品</mt-button>
      </router-link>
    </div>
    <div class="set"> 
      <router-link to="/login" class="seta">
        <mt-button type="primary" size="large" @click="logout()"> 注销</mt-button>
      </router-link>
    </div>
    
  </div>
</template>
<script>

export default {
  data() {
    return {
      name:''
    }
  },
  created(){
    //获取名字
    this.name = this.$store.state.user.username
  },
  methods:{
    logout(){
      this.$store.dispatch('user/logout')
    }
  }
}
</script>
<style lang="stylus">
.about
  width 370px
  height 665px
  position absolute

.imgdiv
  width 370px
  height 200px
  background-color #A9A9A9

.imghead
  width 80px
  height 80px
  top -30px
  left 10px
  border 2px ridge
  position relative

.name
  width 150px
  height 50px
  top -80px
  left 100px
  position relative
  text-align left 
  
  
.fabu
  position relative
  top 100px

.set
  top 120px
  position relative


</style>
