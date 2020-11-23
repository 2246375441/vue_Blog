<template>
  <div class="op_LR">
    <!-- 左右切换按钮 -->
    <el-tooltip
      class="item"
      effect="dark"
      content="移至左侧"
      placement="left"
      id="op_LR_left"
    >
      <el-button
        icon="el-icon-caret-left"
        size="mini"
        @click="leftClick"
      ></el-button>
    </el-tooltip>

    <el-tooltip
      class="item"
      effect="dark"
      content="移至右侧"
      placement="left"
      id="op_LR_right"
    >
      <el-button
        icon="el-icon-caret-right"
        size="mini"
        @click="rightClick"
      ></el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "opPosition",
  mounted() {
    // console.log(localStorage.getItem("op_LR"));
    if (localStorage.getItem("op_LR") === "left") {
      document.querySelector("#op_LR_left").style.display = "none";
      document.querySelector("#op_LR_right").style.display = "inline-block";
      // console.log("left");
    } else {
      document.querySelector("#op_LR_left").style.display = "inline-block";
      document.querySelector("#op_LR_right").style.display = "none";
      // console.log("right");
    }
  },
  methods: {
    leftClick() {
      // console.log("left");
      localStorage.op_LR = "left";
      this.$emit("LRclick", "发送修改事件触发");
      document.querySelector("#op_LR_left").style.display = "none";
      document.querySelector("#op_LR_right").style.display = "inline-block";
    },
    rightClick() {
      // console.log("right");
      localStorage.op_LR = "right";
      this.$emit("LRclick", "发送修改事件触发");
      document.querySelector("#op_LR_left").style.display = "inline-block";
      document.querySelector("#op_LR_right").style.display = "none";
    },
  },
};
</script>

<style scoped>
#op_LR_left{
  /* box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important; */
  box-shadow: var(--bodyShadow);
}
#op_LR_left >>>.el-icon-caret-left{
  color:#5e72e4;
  font-size: 18px;
}


#op_LR_right{
  margin: 0;
  /* box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important; */
  box-shadow: var(--bodyShadow);
}
#op_LR_right >>>.el-icon-caret-right{
  color:#5e72e4;
  font-size: 18px;
}


</style>