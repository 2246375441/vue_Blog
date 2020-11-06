<template>
  <div>
    <div class="site" :class="{'pc1':IsPc1,'pc2':!IsPc1}" >
      <div class="nav">
        <div class="nav_left nav_xz" @click="navLeftCilck">站点概览</div>
        <div class="nav_right" @click="navRightCilck">站点功能</div>
      </div>
      <div class="content">
        <!-- 站点概览内容区域 -->
        <div class="content_left" v-show="contentIS">
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
        <div class="content_right" v-show="!contentIS"></div>
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
      contentIS:true
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
.pc1{
  width: 100%;
  height: 450px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important;
  border-radius: 20px;
  margin-top: 10px;
}
.pc2{
  width: 100%;
  height: 450px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 15px 35px rgba(50,50,93,.2),0 5px 15px rgba(0,0,0,.2)!important;
  border-radius: 20px;
  position: fixed;
  top: 90px;
  width: 240px;
}

.site{
  box-sizing: border-box;
  padding: 20px;
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
  height: 500px;
  /* background-color: red; */
  animation: contentDH 1s ease;
}
.content_right{
  width: 100%;
  height: 500px;
  /* background-color: blue; */
  animation: contentDH 1s ease;
}
@keyframes contentDH{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 100%;
  }
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
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(50,50,93,.2),0 2px 5px rgba(0,0,0,.1)!important;
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
  color:#6f54ba;
  border-bottom: solid 1px #6f54ba;
  padding-bottom: 5px;
}
</style>