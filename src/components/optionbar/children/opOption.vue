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
      // 按钮处于左边还是右边
      // op_LR:'left',
    }
  },
  props:{
    op_LR:{
      type:[String],
      default:'未获得值'
    }
  },
  watch: {
    'op_LR'(val,oldVal){
      // console.log(val)
      // console.log(oldVal)
      this.watch_op_LR(val)
    }
  },
  mounted() {
    // 默认初始化显示框位置
    this.watch_op_LR(this.op_LR)
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
  background-color: #fff;
  animation: op_OPKDH 0.4s ease;
  opacity: 1;

}

@keyframes op_OPKDH{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>