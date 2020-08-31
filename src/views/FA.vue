<template>
  <div class="home2">
      <mt-header title="发布商品" size="30px">
        <router-link to="" slot="right">
          <mt-button @click="fabu">发布</mt-button>
        </router-link>
        
      </mt-header>
        <mt-field label="商品详情" placeholder="商品名字，新旧程度，型号等,内容不能超过30个字。"  type="textarea" rows="5"  v-model="goodsinfo.details"></mt-field>
        <mt-field label="价格" placeholder="请输入价格" type="number" v-model="goodsinfo.price"></mt-field>
        商品类型<mt-picker  :slots="slots"  @change="getSlotValue" :visibleItemCount="3"> </mt-picker>
        
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="goodsinfo.phone"></mt-field>

        <a href="" class="file"> 添加图片
            <input type="file" name="img"  @change="addUploadImg()" ref='imgfile' accept="image/*" >
        </a><br>
        
        <img  src="../../public/add.jpg" class="" id="preview"> 
        

        
      
        
  </div>
</template>

<script>
export default {

  data() {
    return {
      imgsrc:'',
      goodsinfo:{
        details:'',
        price:'',
        sort:'',
        phone:'',
        imgSrc:'',
        user_id:''
      },
      
      slots: [
        {
          values: ['书籍', '数码', '生活用品', '其他'],
          textAlign: 'center'
        }
      ]
    };
  },

  methods: {
    addUploadImg(){
 
      let obj=this.$refs.imgfile;//获取元素的dom
      console.log(obj.files)
      let file = obj.files[0];               
      let reader = new FileReader();
      let that = this
      reader.onload = function (e) {
      let imgfile=e.target.result
      let img = document.getElementById("preview");//获取图片id
      img.src = imgfile;//给图片src路径赋值
      //let img_src = imgfile.split(',')
      that.goodsinfo.imgSrc=imgfile
      
      }

      reader.readAsDataURL(file)
    }, 

    //获取用户选中的类别
    getSlotValue(index){
      let sort=index.values;
      this.goodsinfo.sort =sort[0];
    },
    showMessage(message){
          this.$messagebox.alert(message)
      },
    fabu(){

      this.$api.user.addGoodsInfo(this.goodsinfo).then(res=> {
        if(res.code == 1){  
            this.showMessage(res.data.message)
            //     let userName = res.data.user_name
            this.$router.push({ path: "/" })
				}else{
					this.showMessage("未知错误")
				}
      })
    }

  },
  created(){
    //获取名字
    this.goodsinfo.user_id = this.$store.state.user.userid
  },
  
};
</script>

<style lang="stylus">
#preview
  width: 100px;
  height: 100px; 
  
.file 
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    

.file input 
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;







.home2
  width 370px
  height 665px
  margin 0 auto
  
textarea
  resize: none;


.div1
 height 30px
 font-size 20px
 text-align center
 border-bottom-style  ridge
 border-bottom-width 2px

.fabt
  display inline-block;
  border-radius 4px;
  background-color #f4511e;
  border none;
  color #FFFFFF;
  text-align center;
  font-size 15px;
  height 25px
  width 50px;
  transition all 0.5s;
  cursor pointer;
  margin 2px;
  float  right 

.div1sp
  position relative
  left 25px

.div2
  margin 1px auto
  width 370px
  border-radius 3px
  text-align center
  border-bottom-style  inset
  border-bottom-width 2px

.f2text
  width 360px
  height 200px
  border-radius 4px
  resize: none

.f2ip
  height 25px;
  width 150px
  border-radius 4px

.sp
  width 100px
  height 40px
  font-size 20px
  right 20px
  position relative


.f2div
  width 360px
  height 50px

.f2select
  width 150px
  height 30px
  border-radius 4px


</style>
