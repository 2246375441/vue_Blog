<template>
  <div class="top-logo">
    <div class="wz1"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top-logo{
  font-size: 30px;
  font-weight: bold;
  color: white;
}
.wz1{
  position: relative;
  width:400px;
  height: 30px;
  text-align: center;
}
.wz1::after{
  content:'努力学习前端的小菜鸟！！';
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0;
  transition: all 0.8s ease;
}
.wz1::before{
  content:'老陈博客欢迎你丶';
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 1;
  transition: all 0.8s ease;
}
.wz1:hover::before{
  opacity: 0;
  transform: translateY(-55px);
}
.wz1:hover::after{
  opacity: 1;
}
</style>