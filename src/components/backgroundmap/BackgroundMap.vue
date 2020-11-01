<template>
  <!-- 背景图 z-index:-999 高度400 -->
  <div class="back_Map">
    <!-- 左边圆圈 -->
    <div class="yl">
      <div class="y1"></div>
      <div class="y2"></div>
      <div class="y3"></div>
    </div>
    <!-- 右边圆圈 -->
    <div class="yr">
      <div class="y4"></div>
      <div class="y5"></div>
      <div class="y6"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      busBfb:0
    }
  },
  methods:{
    // 页面滚动事件
    handleScroll(){
      var bgHeight = document.querySelector('.back_Map')
      var y1 = document.querySelector('.y1')
      var y2 = document.querySelector('.y2')
      var y3 = document.querySelector('.y3')
      var y4 = document.querySelector('.y4')
      var y5 = document.querySelector('.y5')
      var y6 = document.querySelector('.y6')

        this.$bus.$on('scrollTop',item=>{
        // this.busBfb = item
        var bfb = item/400
        if (bfb>1) {
          bgHeight.style.height = '0px'
        }else{
          bgHeight.style.height = (500*(1-bfb)) +'px'
          y1.style.top = 0 - item + 'px'
          y2.style.top = 100 - item + 'px'
          y3.style.top = 195 - item + 'px'
          y4.style.top = 0 - item + 'px'
          y5.style.top = 185 - item + 'px'
          y6.style.top = 100 - item + 'px'

        }
      })
    }
  },
  mounted(){
    // 给页面添加滚动事件
    window.addEventListener('scroll',this.handleScroll,true)
  },
}
</script>

<style scoped>
.back_Map{
  width: 100%;
  height: 500px;
  position: fixed;
  z-index: -999;
  top: 0;
  left: 0;
  right: 0;
  
  background: linear-gradient(to top left, #b588e6,#281483);
  display: flex;

  -webkit-overflow-scrolling: touch;
}
.yl{
  position: relative;
  left: 0;
  height: 100%;
  width: 48%;
}
.yr{
  position: relative;
  right: 0;
  height: 100%;
  width: 48%;

}
.y1{
  position: absolute;
  z-index: -877;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #422ba8;
  left: -40px;
}
.y2{
  position: absolute;
  z-index: -888;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #816dd4;
  opacity: 0.4;
  top: 100px;
  left: 40px;
}
.y3{
  position: absolute;
  z-index: -900;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #816dd4;
  opacity: 0.4;
  top: 195px;
  left: 190px;
}
.y4{
  position: absolute;
  z-index: -900;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #816dd4;
  opacity: 0.4;

  right: 0px;
}
.y5{
  position: absolute;
  z-index: -900;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #7661c9;
  opacity: .4;
  top: 185px;
  right: 190px;
}
.y6{
  position: absolute;
  z-index: -900;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #7661c9;
  opacity: .4;
  top: 100px;
  right: 400px;
}
</style>