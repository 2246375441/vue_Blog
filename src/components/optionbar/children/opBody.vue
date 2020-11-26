<template>
  <div>
    <el-tooltip
      class="item"
      effect="dark"
      content="阅读进度"
      placement="left"
      id="op_Body"
    >
      <el-button
        size="mini"
      >
      {{opBody_value}}%
      </el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name:'opBody',
  data() {
    return {
      // 界面显示值
      opBody_value:0,
      // 页面可见区域高度
      op_Height:0,
      // 页面整体高度
      op_Height_body:0,

    }
  },
  mounted() {
    this.getHeight()
    window.addEventListener('scroll',this.getHeight)
  },
  methods: {
    getHeight(){
      this.op_Height = document.documentElement.clientHeight 
      this.op_Height_body = document.body.clientHeight
      
      //判断浏览器类型(IE/FF)
      var scr = document.documentElement.scrollTop || document.body.scrollTop;

      var _scr = this.op_Height_body - this.op_Height //可卷高度
      var bfb =  scr/_scr * 100
      var jg = bfb >> 0
      this.opBody_value = jg

    }
  },
}
</script>

<style scoped>
#op_Body{
  box-shadow: var(--bodyShadow);
  margin-bottom: 10px;
  height: 33.78px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing:border-box;
}
#op_Body >>>.el-icon-s-tools{
  color:#5e72e4;
  font-size: 18px;
}
#op_Body >>>span{
  color:#5e72e4;
  font-size: 13px;
  font-weight: bold;
}
</style>