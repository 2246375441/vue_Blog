<template>
  <div id="app">
    <!-- 顶部导航条 -->
    <nav-bar></nav-bar>
    <!-- 顶部背景区域 -->
    <background-map></background-map>
    <!-- 路由页面-内置 -->
    <router-view></router-view>
    <!-- 右下角设置按钮 -->
    <option-bar></option-bar>
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar'
import BackgroundMap from './components/backgroundmap/BackgroundMap'
import OptionBar from './components/optionbar/OptionBar'
export default {
  name:'App',
  components:{
    NavBar,
    BackgroundMap,
    OptionBar,

  },
}
</script>


<style scoped>
#app{
  background-color: var(--nightText3);
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.logo{
  margin-top: 150px;
  margin-bottom: 80px;
  font-size: 30px;
  font-weight: bold;
  color: white;
}

</style>
