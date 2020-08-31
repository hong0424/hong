<template>
  <div id="app" >
    <div id="view">
      <router-view />
    </div>
    <div id="navdiv">
      <div class="nav">
        <router-link to="/">首页</router-link> 
      </div>
      <div class="nav">
        <router-link to="/FA">发布商品</router-link>  
      </div>
      <div class="nav">
        <router-link to="/login">个人中心</router-link>
      </div>
    </div> 
  </div>
</template>

<style lang="stylus">
body
  margin 0

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin: 0 
  
  width 370px
  height 665px
  left 0
  right 0
  margin-left auto
  margin-right auto

a 
  text-decoration: none
  font-size 20px
  color black

#navdiv
  width 370px
  height 50px
  position absolute
  top 615px
  left 0
  right 0
  margin-left auto
  margin-right auto
  
  
  
#navdiv div
  width 110px
  height 40px
  float left
  margin 0 2px
  padding 3px
  
  
.nav
  background-color: #f1f1f1
  
  text-align center
  line-height 40px
  border-radius: 20px
  transition background-color 1s
  

.nav:hover
  
  background-color #1E90FF
  
  
</style>
