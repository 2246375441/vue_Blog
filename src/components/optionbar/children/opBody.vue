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
      opBody_value:100
    }
  },
}
</script>

<style scoped>
#op_Body{
  /* box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.17)!important; */
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