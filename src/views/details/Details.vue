<template>
  <div class="data">
    <div class="logo">
      <!-- 页面文字logo(老陈博客欢迎你) -->
      <top-logo></top-logo>
    </div>

    <section>
      <div class="home_left" ></div>
      <div class="home_right"></div>  
    </section>
  </div>
</template>

<script>
// http://192.168.0.101:8080/?#/deta/1
import topLogo from '../../components/topLogo/topLogo'
export default {
  name:'Details',
  components:{
    topLogo
  }
}
</script>

<style scoped>
@media screen and (min-width:900px){
  /* 宽度大于900 */
}

@media screen and (max-width:900px){ 
  /* 宽度小于900 */
  .home_left{
    display: none;
  }
  .home_right{
    width:90%!important;
    margin-left:0!important;
  }
}
.data{
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
  height: 100%;
  display: flex;
  justify-content:center;
}

.home_left{
  margin-right: 15px;
  width: 240px;
  min-width: 240px;
  height: 1000px;
  position: relative;
  background-color: red;
}

.home_right{
  margin-left: 30px;
  width: calc(100% - 240px - 15%);
  height: 1000px;
  background-color: palegreen;
}
</style>