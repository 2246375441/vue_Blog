<template>
  <!-- 导航条 App -->
  <!-- 导航条高80px -->
  <div class="nav">
    <!-- pc端 -->
    <div id="pc">
      <!-- 导航栏左边 -->
      <div class="nav-left">
        <!-- 导航条 -->
        <div class="nav-left-0 bold">博客首页丶</div>
        <div class="nav-left-0">开发中.</div>
        <div class="nav-left-0">开发中.</div>
        <div class="nav-left-0">开发中.</div>
      </div>
      <!-- 导航栏右边 -->
      <div class="nav-right">
        <!-- 搜索框+搜索图标 -->
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchValue"
          @blur="searchBlur"
          ref="searchRef"
          id="searchID"
          >
        </el-input>
        <!-- 搜索图标  -->
        <el-button type="text" icon="el-icon-search" @click="searchISClick" id="searchBtn"></el-button>
      </div>
    </div>

    <!-- 移动端 -->
    <div id="app" class="app-nav">
      <!-- 左边按钮 -->
      <div class="app-left"><i class="el-icon-menu" @click="app_tk"></i></div>
      <!-- 右边导航条 -->
      <div class="app-right">老陈博客丶</div>
      <!-- 点击左边按钮 显示区域 -->
      <div v-show='appBodyIS' id="appBody">
        <div class="sh">
          <el-button icon="el-icon-close" type="text" class="buttonX" @click="buttonX"></el-button>
        </div>
        <div>
          <!-- 搜索框 -->
          <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchValue"
          class="app-search"
          >
          </el-input>
        </div>
        <!-- 导航栏 -->
        <div class="app_nav">
          <div>博客首页丶</div>
          <div>开发中</div>
          <div>开发中</div>
          <div>开发中</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
  data() {
    return {
      // 搜索框显示 或隐藏
      searchIS:false,
      // 搜索框 绑定值
      searchValue:'',
      // 移动端 点击按钮显示区域
      appBodyIS:false
    }
  },
  methods:{
    // 控制搜索框按钮隐藏
    searchISClick(){
      var input = document.getElementById('searchID')
      var btn = document.getElementById('searchBtn')
      var wit = 0
      input.style.visibility = 'visible'
      btn.style.visibility = 'hidden'

      var time = setInterval(function(){
        if (wit >= 220) {
          clearInterval(time)
        }else{
          wit = wit + 10
          input.style.width = wit+'px'
        }
      },10)

      
      this.$refs.searchRef.focus()
    },
    // 失去焦点关闭搜索框
    searchBlur(){
      var input = document.getElementById('searchID')      
      var btn = document.getElementById('searchBtn')

      var wit = input.style.width
      wit = wit.substring(0,wit.length-2)

      var time = setInterval(function(){
        if (wit == 0) {
          clearInterval(time)
          input.style.visibility = 'hidden'
          btn.style.visibility = 'visible'
        }else{
          wit = wit - 10
          input.style.width = wit+'px'
        }
      },10)
    },
    // 滚动事件 触发导航条变色 且 宽度变化
    handleScroll(e){
      var scrollTop = document.documentElement.scrollTop
      var bfb = scrollTop/400
      this.$bus.$emit('scrollTop',scrollTop)
      var nav = document.getElementById('pc')
      var app_nav = document.getElementsByClassName('app-nav')[0]
      if (bfb <= 1) {
        nav.style.backgroundColor ='rgb(116, 134, 231,'+bfb+')'
        app_nav.style.backgroundColor ='rgb(116, 134, 231,'+bfb+')'
        nav.style.height = 90 - (bfb*20) + 'px'
        app_nav.style.height = 90 - (bfb*20) + 'px'
      }else{
        nav.style.backgroundColor ='rgb(116, 134, 231,1)'
        app_nav.style.backgroundColor ='rgb(116, 134, 231,1)'
        nav.style.height = '70px'
        app_nav.style.height = '70px'
      }
    },
    // 鼠标移到按钮 鼠标变成手
    app_mou(){
      document.querySelector('.el-icon-menu').style.cursor = "pointer";
    },
    // 移动端 点击按钮 显示区域
    app_tk(){
      document.querySelector('#appBody').className ='appBodyKai'
      this.appBodyIS = true
    },
    // 移动端 显示区域 X关闭按钮
    buttonX(){
      document.querySelector('#appBody').className ='appBodyGuan'
      var that = this
      setTimeout((function(){
        that.appBodyIS = false
      }),600)
    }
  },
  mounted(){
    // 给页面添加滚动事件
    window.addEventListener('scroll',this.handleScroll,true)
    window.onmousewheel = document.onmousewheel = this.handleScroll
    // 给页面添加 鼠标变化
    document.querySelector('.el-icon-menu').onmouseover = this.app_mou
  }
}
</script>

<style scoped>
/* PC端 */
@media screen and (min-width:900px){
#app{
  display: none;
}
.nav{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
}
#pc{
  display: block;
  width: 100%;
  height: 90px;
  /* background-color:rgb(105,63,184); */

  display: flex;
  justify-content: center;
}

.nav-left{
  width: 60%;
  height: 100%;
  /* background-color: red; */

  display: flex;

  font-size: 14px;
  color: var(--nightFont);
}
.nav-left-0{
  margin: auto 20px auto 20px;
}
.bold{
  font-weight: bold;
}


.nav-right{
  width: 20%;
  height: 100%;
  /* background-color: yellow; */

  display: flex;
  justify-content: center;
  align-items: center;
}
.el-input{
  width: 0px;
  visibility: hidden;
}


.nav-right >>>.el-input--prefix .el-input__inner{
  padding-left: 0;
}
.nav-right >>>.el-input__inner{
  padding: 0;
}

.nav-right >>>.el-button{
  font-size: 30px;
}

.nav-right >>>.el-icon-search{
  color:var(--nightFont);
}


}

/* 移动端且witdh小于900px呈现 */
@media screen and (max-width:900px){
.nav{
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
}
#pc{
  display: none;
}
#app{
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app-left{
  width: 40px;
  height: 40px;
  margin-left: 20px;
}
.app-left i{
  font-size: 40px;
  color: white;
}
.app-right{
  font-size: 20px;
  color: white;
  margin-right: 20px;
}
.appBodyKai{
  width: 96%;
  height: 270px;
  background-color: white;
  position: absolute;
  top: 15%;
  left: 2%;
  right: 2%;
  border-radius: 10px;
  animation: appBodyKai .6s ease;
}
@keyframes appBodyKai {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.appBodyGuan{
  width: 96%;
  height: 270px;
  background-color: white;
  position: absolute;
  top: 15%;
  left: 2%;
  right: 2%;
  border-radius: 10px;
  animation: appBodyGuan .6s ease;
}
@keyframes appBodyGuan {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
/* 控制element框架中 输入框颜色 */
.app-search>>>.el-input__inner{
  /* border: none; */
  border-top: solid 1px #e4e4e5;
  border-bottom:none ;
  border-left:none ;
  border-right:none ;
  border-radius: 0;
}
.app-search>>>input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #172b4e;
}
.app-search>>>i{
  color: #172b4e;
  font-weight: bold;
}
.buttonX{
  font-size: 30px;
  color: black;
  margin-right: 10px;
}
.sh{
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}
.app_nav{
  margin-left: 25px;
  height: 60%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.app_nav>>>div{
  font-size: 18px;
}
}
</style>