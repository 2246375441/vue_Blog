<template>
  <div id="home-wk">
    <div class="logo">博客首页欢迎你</div>
    <!-- 内容区域 -->
    <section>
      <!-- 左边内容 300px+right50px 1000px-->
      <div class="home_left">
        <!-- 左边小搜索框 -->
        <left-search-box></left-search-box>
      </div>
      <!-- 右边内容 100% 1000px-->
      <div class="home_right"></div>
    </section>
  </div>
</template>

<script>
import LeftSearchBox from './children/LeftSearchBox'
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
  }
  
}
</script>

<style scoped>
#home-wk{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo{
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  margin-top: 150px;
  margin-bottom: 130px;
}



section{
  width: 100%;
  height: 10000px;
  display: flex;
  justify-content: center;
}

.home_left{
  margin-right: 25px;
  margin-left: 25px;
  width: 240px;
  height: 1000px;
  background-color: red;
}

.home_right{
  margin-left: 25px;
  margin-right: 25px;
  width: 70%;
  height: 1000px;
  background-color: blue;
}
</style>