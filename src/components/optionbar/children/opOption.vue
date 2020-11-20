<template>
  <div class="op">
    <el-tooltip
      class="item"
      effect="dark"
      content="打开设置"
      placement="left"
      id="op_OP"
    >
      <el-button
        icon="el-icon-s-tools"
        size="mini"
        @click="btnClick"
      ></el-button>
    </el-tooltip>

    <div class="op_OPK" v-show="OPK_IS">
      
      <div class="op_OPK_mode">
        <div>夜间模式{{nightMode_Value}}</div>
        <el-switch
          v-model="nightMode_Value"
          active-color="#1a78c2"
          inactive-color="#dddddd"
          :width="50"
          @change="mode_change">
        </el-switch>
      </div>

      <div class="op_OPK_font">字体</div>

      <div class="op_OPK_borr">圆角</div>

      <div class="op_OPK_bodyColor">主题色</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'opOption',
  data () {
    return {
      // 设置框显示或隐藏
      OPK_IS:false,
      // 夜间模式是否开启
      nightMode_Value:false
    }
  },
  props:{
    op_LR:{
      type:[String],
      default:'未获得值'
    }
  },
  watch: {
    // 监听设置框位置
    'op_LR'(val,oldVal){
      // console.log(val)
      // console.log(oldVal)
      this.watch_op_LR(val)
    },
    // 监听是否启动了黑夜模式
    'nightMode_Value'(val,oldVal){
      this.watch_nightMode_Value()
    }
  },
  created() {
    
  },
  mounted() {
    // 默认初始化显示框位置
    this.watch_op_LR(this.op_LR)
    // 默认初始化是否夜间模式
    this.nightMode_Value = localStorage.op_nightMode=="false"?false:true;
    this.watch_nightMode_Value()
    
  },
  methods:{
    // 点击设置框的显示与隐藏
    btnClick(){
      this.OPK_IS = !this.OPK_IS
    },
    // 监听显示框应该在哪边
    watch_op_LR(val){
      var op_OPK = document.querySelector('.op_OPK')
      if (val=="left") {
        op_OPK.style.left = ""
        op_OPK.style.right = "-320px"
        // console.log(this.op_LR)
      }else{
        op_OPK.style.right = ""
        op_OPK.style.left = "-320px"
        // console.log(this.op_LR)
      }
    },
    // 夜间模式判断 
    mode_change(){
      localStorage.op_nightMode = this.nightMode_Value
    },
    // 夜间模式初始化css
    watch_nightMode_Value(){
      var root = document.querySelector(':root')
      if (this.nightMode_Value===true ||this.nightMode_Value==="true") {
        // 黑夜模式启动
        root.setAttribute('style',`
        --nightMode1:rgb(26, 26, 26);
        --nightMode2:rgb(54, 54, 54);
        --nightMode3:rgb(255,255,255);
        --nightjb1:rgb(26, 26, 26);
        --nightjb2:rgb(26,26,26);
        --nightFont:rgb(184, 184, 184);
        --nightjbser1:rgb(42, 42, 42); 
        --nightjbser2:rgb(42, 42, 42); 
        --nightText1:rgb(42, 42, 42);
        --nightText2:rgb(53, 53, 53);
        --nightText3:rgb(68, 68, 68);
        --nightText4:rgb(190, 190, 190);
        --nightLeftSite:rgb(53, 53, 53);
        --nightLeftSite2:rgb(190, 190, 190);
        `) 
      }else{
        // 关闭黑夜模式
        root.setAttribute('style',`
        --nightMode1:rgb(255, 255, 255);
        --nightMode2:rgb(255, 255, 255);
        --nightMode3:rgb(0,0,0);
        --nightjb1:rgb(181, 136, 230);
        --nightjb2:rgb(40, 20, 131);
        --nightFont:rgb(255,255,255);
        --nightjbser1:rgb(181, 136, 230); 
        --nightjbser2:rgb(100, 58, 178); 
        --nightText1:rgb(255,255,255);
        --nightText2:rgb(255,255,255);
        --nightText3:rgb(214, 218, 226);
        --nightText4:rgb(0, 0, 0);
        --nightLeftSite:rgb(255,255,255);
        --nightLeftSite2:rgb(111, 84, 186);
        `)
      }

      this.$bus.$emit('nightMode',this.nightMode_Value)
    }
  }
}
</script>

<style scoped>
#op_OP{
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important;
  margin: 10px 0;
  
}
#op_OP >>>.el-icon-s-tools{
  color:#5e72e4;
  font-size: 18px;
}


.op{
  position: relative;
}


.op_OPK{
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: 10px;
  border-radius:var(--borderRadius);
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important;
  background-color:var(--nightMode2);
  animation: op_OPKDH 0.4s ease;
  opacity: 1;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;

  color: var(--nightMode3);
}

@keyframes op_OPKDH{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.op_OPK_mode{
  display: flex;
  justify-content: space-between;
}
</style>