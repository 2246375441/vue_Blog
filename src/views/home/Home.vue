<template>
  <div id="home-wk">
    <div class="logo">
      <top-logo></top-logo>
    </div>
    <!-- 内容区域 -->
    <section>
      <!-- 左边内容 300px+right50px 1000px-->
      <div class="home_left" >
        <!-- 左边小搜索框 -->
        <left-search-box></left-search-box>
        <!-- 左边站点概念框 -->
        <left-site></left-site>
      </div>
      <!-- 右边内容 100% 1000px-->
      <div class="home_right">
        <right-item></right-item>
        <right-item></right-item>
        <right-item></right-item>
        <right-item></right-item>
        <right-item></right-item>
        <right-item></right-item>
        <right-item></right-item>
        <right-item></right-item>
        <right-item></right-item>
        <right-item></right-item>

      </div>
    </section>
  </div>
</template>

<script>
import LeftSearchBox from './children/LeftSearchBox'
import leftSite from './children/leftSite'
import rightItem from './children/rightItem'
import topLogo from './children/topLogo'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  components:{
    //  左边小搜索框
    LeftSearchBox,
    //  左边站点框
    leftSite,
    // 右边内容快
    rightItem,
    // 顶部logo
    topLogo
  },
  
}
</script>

<style scoped>
@media screen and (min-width:900px){}
@media screen and (max-width:900px){
  .home_left{
    display: none;
  }
  .home_right{
    width:90%!important;
    margin-left:0!important;
  }
}

#home-wk{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo{
  margin-top: 150px;
  margin-bottom: 80px;
  font-size: 30px;
  font-weight: bold;
  color: white;
}



section{
  width: 100%;
  height: 10000px;
  display: flex;
  justify-content:center;
}

.home_left{
  margin-right: 15px;
  width: 240px;
  min-width: 240px;
  height: 1000px;
  /* background-color: red; */
  position: relative;
}

.home_right{
  margin-left: 30px;
  width: calc(100% - 240px - 15%);
  height: 1000px;
  /* background-color: blue; */
}
</style>