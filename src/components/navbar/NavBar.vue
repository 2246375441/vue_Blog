<template>
  <!-- 导航条高80px -->
  <div class="nav">
    <!-- pc端使用 -->
    <div id="pc">
      <div class="nav-left">
        <div class="nav-left-0 bold">博客首页丶</div>
        <div class="nav-left-0">开发中.</div>
        <div class="nav-left-0">开发中.</div>
        <div class="nav-left-0">开发中.</div>
      </div>
      <div class="nav-right">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchValue"
          @blur="searchBlur"
          ref="searchRef"
          id="searchID"
          >
        </el-input>

        <el-button type="text" icon="el-icon-search" @click="searchISClick"></el-button>
      </div>
    </div>

    <div id="app"></div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
  data() {
    return {
      // 搜搜看显示隐藏
      searchIS:false,
      searchValue:''
    }
  },
  methods:{
    // 控制搜索框按钮方法
    searchISClick(){
      var input = document.getElementById('searchID')
      var wit = 0
      input.style.visibility = 'visible'
      var time = setInterval(function(){
        if (wit >= 220) {
          clearInterval(time)
        }else{
          wit = wit + 10
          input.style.width = wit+'px'
        }
      },10)
    },
    // 失去焦点关闭搜索框
    searchBlur(){
      var input = document.getElementById('searchID')
      var wit = input.style.width
      wit = wit.substring(0,wit.length-2)

      var time = setInterval(function(){
        if (wit == 0) {
          clearInterval(time)
          input.style.visibility = 'hidden'
        }else{
          wit = wit - 10
          input.style.width = wit+'px'
        }
      },10)
    },
    // 滚动事件 触发导航条变色 
    handleScroll(e){
      var scrollTop = document.documentElement.scrollTop
      // console.log(scrollTop)
      var bfb = scrollTop/400
      // console.log(bfb)
      var nav = document.getElementById('pc')
      if (bfb >= 1) {
        // nav.style.backgroundColor ='rgb(105,63,184,'+bfb+')'

      }else{
        nav.style.backgroundColor ='rgb(105,63,184,'+bfb+')'
      }
    }
  },
  mounted(){
    // 给页面添加滚动事件
    window.addEventListener('scroll',this.handleScroll,true)
  }
}
</script>

<style scoped>
@media screen and (min-width:900px){
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
  height: 80px;
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
  color: #fff;
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

}

@media screen and (max-width:900px){
#pc{
  display: none;
}
}
</style>