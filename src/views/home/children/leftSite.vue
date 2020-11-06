<template>
  <div class="body">
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
        <div class="content_right" v-show="!contentIS">
          <el-scrollbar style="height:100%;">
            <div class="content_right_class">
              <div class="content_right_class_title"><a href="">分类</a></div>
              <div class="content_right_class_div"><a href="">Html,Css<p>(0)</p></a></div>
              <div class="content_right_class_div"><a href="">JavaScript<p>(0)</p></a></div>
              <div class="content_right_class_div"><a href="">Vue<p>(0)</p></a></div>
              <div class="content_right_class_div"><a href="">Node<p>(0)</p></a></div>
              <div class="content_right_class_div"><a href="">前端框架<p>(0)</p></a></div>
            </div>

            <!-- 设置按钮 -->
            <!-- <div class='content_right_op'>
              <el-button type="primary" icon="el-icon-s-tools" round>页面设置</el-button>
            </div> -->

            <div class="content_right_wx">
              <div class="content_right_class_title">联系老陈！</div>
              <img src="../../../assets/img/wx.jpg" alt="">
            </div>

            <!-- 测试滚动 -->
            <ul>
              <li>第1个盒子</li>
              <li>第2个盒子</li>
              <li>第3个盒子</li>
              <li>第4个盒子</li>
              <li>第5个盒子</li>
              <li>第6个盒子</li>
              <li>第7个盒子</li>
              <li>第8个盒子</li>
              <li>第9个盒子</li>
              <li>第10个盒子</li>
              <li>第11个盒子</li>
              <li>第12个盒子</li>
              <li>第13个盒子</li>
              <li>第14个盒子</li>
              <li>第15个盒子</li>
              <li>第16个盒子</li>
              <li>第17个盒子</li>
              <li>第18个盒子</li>
              <li>第19个盒子</li>
              <li>第20个盒子</li>
              <li>第21个盒子</li>
              <li>第22个盒子</li>
              <li>第23个盒子</li>
              <li>第24个盒子</li>
              <li>第25个盒子</li>
              <li>第26个盒子</li>
              <li>第27个盒子</li>
              <li>第28个盒子</li>
              <li>第29个盒子</li>
              <li>第30个盒子</li>
              <li>第31个盒子</li>
              <li>第32个盒子</li>
              <li>第33个盒子</li>
              <li>第34个盒子</li>
              <li>第35个盒子</li>
              <li>第36个盒子</li>
              <li>第37个盒子</li>
              <li>第38个盒子</li>
              <li>第39个盒子</li>
              <li>第40个盒子</li>
              <li>第41个盒子</li>
              <li>第42个盒子</li>
              <li>第43个盒子</li>
              <li>第44个盒子</li>
              <li>第45个盒子</li>
              <li>第46个盒子</li>
              <li>第47个盒子</li>
              <li>第48个盒子</li>
              <li>第49个盒子</li>
              <li>第50个盒子</li>
              <li>第51个盒子</li>
              <li>第52个盒子</li>
              <li>第53个盒子</li>
              <li>第54个盒子</li>
              <li>第55个盒子</li>
              <li>第56个盒子</li>
              <li>第57个盒子</li>
              <li>第58个盒子</li>
              <li>第59个盒子</li>
              <li>第60个盒子</li>
              <li>第61个盒子</li>
              <li>第62个盒子</li>
              <li>第63个盒子</li>
              <li>第64个盒子</li>
              <li>第65个盒子</li>
              <li>第66个盒子</li>
              <li>第67个盒子</li>
              <li>第68个盒子</li>
              <li>第69个盒子</li>
              <li>第70个盒子</li>
              <li>第71个盒子</li>
              <li>第72个盒子</li>
              <li>第73个盒子</li>
              <li>第74个盒子</li>
              <li>第75个盒子</li>
              <li>第76个盒子</li>
              <li>第77个盒子</li>
              <li>第78个盒子</li>
              <li>第79个盒子</li>
              <li>第80个盒子</li>
              <li>第81个盒子</li>
              <li>第82个盒子</li>
              <li>第83个盒子</li>
              <li>第84个盒子</li>
              <li>第85个盒子</li>
              <li>第86个盒子</li>
              <li>第87个盒子</li>
              <li>第88个盒子</li>
              <li>第89个盒子</li>
              <li>第90个盒子</li>
              <li>第91个盒子</li>
              <li>第92个盒子</li>
              <li>第93个盒子</li>
              <li>第94个盒子</li>
              <li>第95个盒子</li>
              <li>第96个盒子</li>
              <li>第97个盒子</li>
              <li>第98个盒子</li>
              <li>第99个盒子</li>
              <li>第100个盒子</li>
            </ul>
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
a{
  text-decoration:none;
}

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
  border-radius: 5px;
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