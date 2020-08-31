<template>
  <div class="home">
    <input type="text" class="sou">
    <button class="button" style="vertical-align:middle"><span> 搜索 </span></button>
    <div  class="goodslist">
      <div v-for="(goods, i) in goodsinfo" :key="i" >
        <div class="goods">
          <img v-bind:src="goodsinfo[i].img" alt=""  class="img">
          <div class="details">{{goodsinfo[i].details}}</div>
          <div class="price">价格：{{goodsinfo[i].price}}</div>
          <div class="phone">联系方式:{{goodsinfo[i].phone}}</div>
            
          
        </div> 
      </div>
    </div>



  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsinfo: [  
        { 
        }
      ]
    }
  },
  methods:{
    
  },
  mounted() {
    this.$api.user.getGoodsInfo().then(res=> {
        if(res.code == 1){  
          this.goodsinfo=res.data.goodsinfo
          console.log(this.goodsinfo)
				}else{
					console.log('找不到')
				}
    
    })
  },
}
</script>

<style lang="stylus">
.home
  width 370px
  height 665px
  margin 0 auto
  
.button 
  display inline-block;
  border-radius 4px;
  background-color #1E90FF;
  border none;
  color #FFFFFF;
  text-align center;
  font-size 15px;
  height 35px
  width 100px;
  transition all 0.5s;
  cursor pointer;
  margin 5px;

.button span 
  cursor pointer;
  display inline-block;
  position relative;
  transition 0.5s;

.button span:after 
  content '»';
  position absolute;
  opacity 0;
  top 0;
  right -20px;
  transition 0.5s;

.button:hover span 
  padding-right 25px;

.button:hover span:after 
  opacity 1;
  right 0;

.sou
  width 200px
  height 30px

.goodslist
  height 570px
  width 370px
  overflow-y:scroll
  overflow-x:hidden

.goods
  width 360px
  height 130px
  
  margin 1px
  border-radius 4px
  

.img
  width 125px
  height 125px
  border 1px solid
  margin 2px
  border-radius 3px
  float left 

.details
  width 210px
  text-align left 
  float left
  top 8px
  left 10px
  position relative
  font-size 20px

.price
  width 150px
  height 50px
  text-align right 
  position relative
  top -50px
  left 200px
  font-size 22px
  color #1E90FF

.phone
  width 210px
  text-align left 
  float left
  left 10px
  position relative
  font-size 15px

</style>
