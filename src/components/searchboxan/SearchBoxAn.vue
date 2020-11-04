<template>
  <!-- w 100%  h 35px -->
  <div class="boxWk">
    <div class="box_but" @click="btnClick"><el-button type="primary" icon="el-icon-search" class="box">搜索</el-button></div>    
    <div class="box_int"><el-input placeholder="请输入内容"></el-input></div>
  </div>
</template>

<script>
export default {
  name:'SearchBoxAn',
  data() {
    return {
      // 按钮透明度
      opacityData:1
    }
  },
  methods:{
    btnClick(){
      var btn = document.querySelector('.box_but')
      setInterval(function(){
        if (this.) {
          
        }
      },100)
    }
  }
}
</script>

<style scoped>

.box{
  width: 100%;
  height: 35px;
  background-color: #d6dae2;
  border: none;
  color: black;
  font-weight: bold;
}
.boxWk>>>.el-icon-search:before{
  font-weight: bold;
}
.boxWk>>>.el-input__inner{
  box-shadow: 0 2px 4px rgba(50,50,93,.15), 0 2px 2px rgba(0,0,0,.02);
}
.boxWk{
  width: 100%;
  height: 35px;
  position: relative;
}
.box_but{
  position: absolute;
  width: 100%;
  top: 0!important;
}
.box_int{
  position: absolute;
  width: 100%;
  top: 0!important;
  opacity: 0;
  display: none;
}
</style>