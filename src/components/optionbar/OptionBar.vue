<template>
  <!-- 右下角设置按钮 App-->
  <div class="OptionBar">
    <!-- 第一个按钮 按钮位置 -->
    <op-position @LRclick="LRclick"></op-position>
    <!-- 第二个按钮 设置框 -->
    <op-option :op_LR="op_LR"></op-option>
    <!-- 第三个按钮 已阅读区域 -->
    <op-body></op-body>
  </div>
</template>

<script>
import opPosition from './children/opPosition'
import opOption from './children/opOption'
import opBody from './children/opBody'
export default {
  name:"OptionBar",
  data() {
    return {
      op_LR:'',
      op_radius:'',
      // 夜间模式判断
      op_nightMode:false,
    }
  },
  components:{
    opPosition,
    opOption,
    opBody
  },
  created() {
    this.DefaultSettings()
  },
  mounted(){
    this.DefaultSettingsDom()
  },
  methods: {
    // 初始化获取盒子 数据 比如左右 圆角
    DefaultSettings(){
      // console.log(localStorage)
      if(localStorage.getItem('op_LR')==null){localStorage.setItem('op_LR','left')}
      if(localStorage.getItem('op_radius')==null){localStorage.setItem('op_radius',20)}
      if(localStorage.getItem('op_nightMode')==null){localStorage.setItem('op_nightMode','false')}
      if(localStorage.getItem('op_shadow')==null){localStorage.setItem('op_shadow',1)}
      

      this.op_LR = localStorage.getItem('op_LR')
      this.op_radius = localStorage.getItem('op_radius')


    },
    // 虚拟Dom处理
    DefaultSettingsDom(){
      var OptionBar = document.querySelector('.OptionBar')
      this.op_LR = localStorage.getItem('op_LR')
      if (this.op_LR==="left") {
        OptionBar.style.left = 0
        OptionBar.style.right = ""
      }else{
        OptionBar.style.left = ""
        OptionBar.style.right = 0
      }

    },
    LRclick(){
      this.DefaultSettingsDom()
    }
  },
}
</script>

<style scoped>
.OptionBar{
  position: fixed;
  right: 0;
  bottom: 0;

  height: 150px;
  width: 140px;
  /* background-color: orange; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

</style>