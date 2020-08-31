<template>
<div>
  <mt-header title="我发布的商品">
    <router-link to="/person" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
  </mt-header>
  <div>
    <div  class="mygoodslist">
      <div v-for="(goods, i) in userGoodsinfo" :key="i" >
        <div class="mygoods">
          <img v-bind:src="userGoodsinfo[i].img" alt=""  class="img">
          <div class="mydetails">{{userGoodsinfo[i].details}}</div>
          <div class="myprice">价格：{{userGoodsinfo[i].price}}</div>
          <div class="myphone">联系方式:{{userGoodsinfo[i].phone}}</div>
          <div class="mydelete">
            <a href="">删除</a>
          </div>
          
            
          
        </div> 
      </div>
    </div>

  </div>
</div>
  
  
  

</template>
<script>
export default {
  data() {
    return {
      userid:'',
      userGoodsinfo: [  
        { 
        }
      ],
      
    }
  },
  methods:{
    
  },
  created(){
    //获取userid
    this.userid = this.$store.state.user.userid
  },
  mounted() {
    this.$api.user.getUserGoodsinfo({userid:this.userid}).then(res=> {
        if(res.code == 1){  
          this.userGoodsinfo=res.data.userGoodsinfo
          console.log(this.userGoodsinfo)
				}else{
					console.log('找不到')
				}
    
    })
  },
}
</script>

<style lang="stylus" >
.mygoodslist
  height 570px
  width 370px
  overflow-y:scroll
  overflow-x:hidden

.mygoods
  width 360px
  height 130px
  
  margin 1px
  border-radius 4px
  

.myimg
  width 125px
  height 125px
  border 1px solid
  margin 2px
  border-radius 3px
  float left 

.mydetails
  width 210px
  text-align left 
  float left
  top 8px
  left 10px
  position relative
  font-size 20px

.myprice
  width 150px
  height 50px
  text-align left 
  position relative
  top -40px
  left 140px
  font-size 22px
  color #1E90FF

.myphone
  width 210px
  text-align left 
  float left
  left 10px
  position relative
  font-size 15px

.mydelete
  width 200px
  height 50px
  text-align right 
  position relative
  left 120px
  top 20px

</style>