<template>
  <!-- 搜索框自带特效  -->
  <!-- w 100%  h 35px -->
  <div class="boxWk">
    <div class="box_but" @click="btnClick"><el-button type="primary" icon="el-icon-search" class="box">搜索</el-button></div>    
    <div class="box_int"><el-input v-model="inputValue" placeholder="请输入内容"  clearable @blur="inpBlur" class="fj" ref="input"></el-input></div>
  </div>
</template>

<script>
export default {
  name:'SearchBoxAn',
  data() {
    return {
      // 按钮透明度
      opacityData:1,
      // 搜索值
      inputValue:''
    }
  },
  methods:{
    btnClick(){
      var btn = document.querySelector('.box_but')
      var int = document.querySelector('.box_int')

      var that = this
      var timeBtn = setInterval(function(){
        if (that.opacityData > 0) {
          that.opacityData =that.opacityData - 0.1

          btn.style.opacity = that.opacityData
          int.style.display= 'inline-block';
          int.style.opacity = 1 - that.opacityData

          // console.log(that.opacityData)
        }else{
          that.$refs.input.focus()
          btn.style.display = 'none'
          clearInterval(timeBtn)
        }
      },50)
    },
    inpBlur(){
      var btn = document.querySelector('.box_but')
      var int = document.querySelector('.box_int')

      var that = this
      var timeBlur = setInterval(function(){
        if (that.opacityData < 1) {
          that.opacityData =that.opacityData + 0.1

          btn.style.opacity = that.opacityData
          btn.style.display= 'inline-block';
          int.style.opacity = 1 - that.opacityData
        }else{
          int.style.display = 'none'
          clearInterval(timeBlur)
        }
      },50)
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
.fj{
  box-shadow: 0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02);
}
</style>