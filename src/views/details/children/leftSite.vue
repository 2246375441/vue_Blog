<template>
  <div class="body">
    <div class="site" :class="{'pc1':IsPc1,'pc2':!IsPc1}" >
      <div class="nav" ref='navs'>
        <div class="nav_new nav_xz" @click="nvaClick(0)">文章目录</div>
        <div class="nav_left" @click="nvaClick(1)">站点概览</div>
        <div class="nav_right" @click="nvaClick(2)">站点功能</div>
      </div>
      <div class="content">
        <!-- 文章目录 -->
        <div v-show="contentIS===0">
          文章目录区域
        </div>


        <!-- 站点概览内容区域 -->
        <div class="content_left" v-show="contentIS===1">
          <div class="content_left_logo">
            <img src="../../../assets/logo.png" alt="">
          </div>
          <div class="content_left_wz1">老陈博客丶</div>
          <div class="content_left_bq">
            <div class="content_left_bq1"><p>0</p> 文章</div>
            <div class="content_left_bq1"><p>0</p> 分类</div>
            <div class="content_left_bq1"><p>0</p> 标签</div>
          </div>
          <div class="content_left_a">
            <div>正在开发中</div>
            <div>正在开发中</div>
            <div>正在开发中</div>
          </div>
        </div>

        
        <!-- 站点功能区域 -->
        <div class="content_right" v-show="contentIS===2">
          <el-scrollbar style="height:100%;">
            <div class="content_right_class">
              <div class="content_right_class_title"><a href="">分类</a></div>
              <div class="content_right_class_div"><a href="">Html,Css<p>(0)</p></a></div>
              <div class="content_right_class_div"><a href="">JavaScript<p>(0)</p></a></div>
              <div class="content_right_class_div"><a href="">Vue<p>(0)</p></a></div>
              <div class="content_right_class_div"><a href="">Node<p>(0)</p></a></div>
              <div class="content_right_class_div"><a href="">前端框架<p>(0)</p></a></div>
            </div>

            <div class="content_right_wx">
              <div class="content_right_class_title"><a href="">联系老陈！</a></div>
              <img src="../../../assets/img/wx.jpg" alt="">
            </div>

          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'leftSite',
  data(){
    return {
      pcIS:true,
      contentIS:0
    }
  },
  methods: {
    // 站点概览点击事件
    navLeftCilck(){
      this.contentIS = true
      document.querySelector('.nav_left').className = 'nav_left nav_xz'
      document.querySelector('.nav_right').className = 'nav_right'
    },
    // 功能点击事件
    navRightCilck(){
      this.contentIS = false
      document.querySelector('.nav_left').className = 'nav_left'
      document.querySelector('.nav_right').className = 'nav_right nav_xz'
    },
    nvaClick(index){
      var $navs = this.$(this.$refs.navs).children('div')
      $navs.removeClass('nav_xz')
      if(index===0){
        $navs.eq(0).addClass('nav_xz')
      }else if(index===1){
        $navs.eq(1).addClass('nav_xz')
      }else if(index===2){
        $navs.eq(2).addClass('nav_xz')
      }
      this.contentIS = index
    }
  },
  computed: {
    IsPc1(){
      this.$bus.$on('scrollTop',item=>{
        if (item<340) {
          this.pcIS = true
        }else{
          this.pcIS = false
        }
      })
      return this.pcIS
    }
  },
}
</script>

<style scoped>
.nav_left{
  cursor:pointer;
}
.nav_right{
  cursor:pointer;
}
.nav_new{
  cursor:pointer;
}
a{
  text-decoration:none;
  color:var(--nightLeftSite2)  !important;
}

.pc1{
  width: 100%;
  height: 450px;
  /* background-color: rgb(255, 255, 255); */
  background-color: var(--nightLeftSite);
  /* box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important; */
  box-shadow: var(--bodyShadow);
  border-radius: var(--borderRadius);
  margin-top: 10px;
}
.pc2{
  width: 100%;
  height: 450px;
  /* background-color: rgb(255, 255, 255); */
  background-color: var(--nightLeftSite);
  /* box-shadow: 0 15px 35px rgba(50,50,93,.2),0 5px 15px rgba(0,0,0,.2)!important; */
  box-shadow: var(--bodyShadow);
  border-radius: var(--borderRadius);
  position: fixed;
  top: 90px;
  width: 240px;
}

.site{
  box-sizing: border-box;
  padding: 20px;
  height: auto;
}
.nav{
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  color: #7a8ae8;
  /* 禁止选中文字 */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 5px;
}
.nav_xz{
  border-bottom: solid 1px #6148a8;
  padding-bottom: 8px;
}









.content_left{
  width: 100%;
  height: auto;
  /* background-color: red; */
  animation: contentDH 1s ease;
  color: var(--nightText4);
}
.content_right{
  width: 100%;
  height: 500px;
  /* background-color: blue; */
  animation: contentDH 1s ease;
  overflow-x: hidden !important;
}
@keyframes contentDH{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 100%;
  }
}

.content_right>>>.el-scrollbar__wrap {
  overflow-x: auto;
}



.content_left_logo{
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
}
.content_left_logo img{
  width:100px;
  height: 100px;
  border-radius: var(--borderRadius);
  box-shadow: var(--bodyShadow);
}

.content_left_wz1{
  color: #6f54ba;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.content_left_bq{
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 15px;
}
.content_left_bq1{
  margin: 5px;
  text-align: center;
}
.content_left_bq1 p{
  font-weight: bold;
  margin-bottom: 10px;
}
.content_left_bq1:nth-of-type(2){
  border-left:solid 2px #eeeeee ;
  border-right:solid 2px #eeeeee ;
  padding-left:5px;
  padding-right:5px;
}
.content_left_a{
  margin-top: 20px;
  border-top: solid 2px #eeeeee;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.content_left_a div{
  margin-bottom: 20px;
  font-size: 16px;
  /* color:#6f54ba; */
  border-bottom: solid 1px var(--nightLeftSite2);
  padding-bottom: 5px;

    color: var(--nightLeftSite2) !important;
}




.content_right_class{
  width: 100%;
}
.content_right_class_title{
  font-size: 16px;
  font-weight: bold;
  color: #32325d;
  position: relative;
  z-index: 1;
  margin-top: 10px;
  margin-bottom: 10px;
}
.content_right_class_title::after{
  content: '';
  width: 30px;
  height: 10px;
  background-color:#d7dcf8 ;
  display: inline-block;
  position: absolute;
  left: 0;
  bottom: -4px;
  z-index: -1;
  border-radius: var(--borderRadius);
}
.content_right_class_div{
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: solid 1px #eeeeee;
  padding-bottom: 15px;
}
.content_right_class_div a{
  color: #5f73e4;
}
.content_right_class_div a p{
  display: inline-block;
  color: #626d8b;
  margin-left: 3px;
}

.content_right_op{
  width: 100%;
  margin-top: 20px;
}

.content_right_wx{
  margin-top: 20px;
}
.content_right_wx img{
  width: 100%;
  height: auto;
}
</style>