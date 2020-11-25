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

    <!-- 关闭按钮 -->
    <div class="op_OPK" v-show="OPK_IS" ref="_op">
      <div class="op_kg">
        <i class="el-icon-close" @click="op_kg"></i>
      </div>

      <div class="op_OPK_mode">
        <div>夜间模式</div>
        <el-switch
          v-model="nightMode_Value"
          active-color="#1a78c2"
          inactive-color="#dddddd"
          :width="50"
          @change="mode_change">
        </el-switch>
      </div>

      <div class="op_OPK_borr">
        <div class="block">
          <span class="demonstration">圆角</span>
          <el-slider v-model="op_radius_value" :min="0" :max="55"  :format-tooltip="sliderTooltip" @change="sliderChange"></el-slider>
        </div>
      </div>

      <div class="op_OPK_showYY">
        <div>阴影</div>
        <div class="showYY_btns">
          <div class="btn" :class="{'btn_active':btn_ac_is===0}" style="border-radius:5px 0 0 5px;">浅阴影</div>
          <div class="btn" style="border-radius:0 5px 5px 0;" :class="{'btn_active':btn_ac_is===1}" >深阴影</div>
        </div>
      </div>

      <div class="op_OPK_bodyColor">
        <div>主题色</div>
        <div class="bodyColorDiv">
          <el-color-picker v-model="bodyColor" size="small" @change="bodyColorChange" :predefine="bodyColorFine" color-format="rgb"></el-color-picker>
        </div>
      </div>
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
      nightMode_Value:false,
      // 圆角值
      op_radius_value:0,
      // 阴影模式
      btn_ac_is:-1,
      // 主题色
      bodyColor:'',
      // 主题色 预定义
      bodyColorFine:[`rgb(116,134,231)`,`rgb(68, 68, 68)`,`rgb(26, 26, 26)`]
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
    },
  },
  created() {
    // 获取localStorage.op_radius中全局圆角值
    this.op_radius_value = localStorage.op_radius * 1
  },
  mounted() {
    // 默认初始化显示框位置
    this.watch_op_LR(this.op_LR)
    // 默认初始化是否夜间模式
    this.nightMode_Value = localStorage.op_nightMode=="false"?false:true;
    // 初始化 夜间模式开启或关闭页面
    this.watch_nightMode_Value()
    // 初始化 全局圆角值
    this.$fz.VarCssSet('--borderRadius',this.op_radius_value+'px')
    // 初始化阴影设置
    this.btn_ac_is = localStorage.op_shadow
    // 初始化主题色
    this.bodyColor = localStorage.op_bodyColor


    // 阴影按钮初始化
    this.getBtn()
    this.btn_click_mou()
  },
  methods:{
    // 显示框关闭按钮
    op_kg(){
      this.$refs._op.className='op_OPK op_gb_dh'
      setTimeout(()=>{
        this.OPK_IS = false
        this.$refs._op.className='op_OPK'
      },700)
    },
    // 点击设置框的显示与隐藏
    btnClick(){
      this.OPK_IS = !this.OPK_IS
    },
    // 监听显示框应该在哪边
    watch_op_LR(val){
      var op_OPK = document.querySelector('.op_OPK')
      if (val=="left") {
        op_OPK.style.left = ""
        op_OPK.style.right = "-370px"
        // console.log(this.op_LR)
      }else{
        op_OPK.style.right = ""
        op_OPK.style.left = "-370px"
        // console.log(this.op_LR)
      }
    },
    // 夜间模式判断 
    mode_change(){
      localStorage.op_nightMode = this.nightMode_Value
    },
    // 夜间模式初始化css
    watch_nightMode_Value(){
      if (this.nightMode_Value===true ||this.nightMode_Value==="true") {
        // 黑夜模式启动
        this.$fz.VarCssSet('--nightMode1',"rgb(26, 26, 26)")
        this.$fz.VarCssSet('--nightMode2',"rgb(54, 54, 54)")
        this.$fz.VarCssSet('--nightMode3',"rgb(255,255,255)")
        this.$fz.VarCssSet('--nightjb1',"rgb(26, 26, 26)")
        this.$fz.VarCssSet('--nightjb2',"rgb(26,26,26)")
        this.$fz.VarCssSet('--nightFont',"rgb(184, 184, 184)")
        this.$fz.VarCssSet('--nightjbser1',"rgb(42, 42, 42)")
        this.$fz.VarCssSet('--nightjbser2',"rgb(42, 42, 42)")
        this.$fz.VarCssSet('--nightText1',"rgb(42, 42, 42)")
        this.$fz.VarCssSet('--nightText2',"rgb(53, 53, 53)")
        this.$fz.VarCssSet('--nightText3',"rgb(68, 68, 68)")
        this.$fz.VarCssSet('--nightText4',"rgb(190, 190, 190)")
        this.$fz.VarCssSet('--nightLeftSite',"rgb(53, 53, 53)")
        this.$fz.VarCssSet('--nightLeftSite2',"rgb(190, 190, 190)")
      }else{
        // 关闭黑夜模式
        this.$fz.VarCssSet('--nightMode1',"rgb(255, 255, 255)")
        this.$fz.VarCssSet('--nightMode2',"rgb(255, 255, 255)")
        this.$fz.VarCssSet('--nightMode3',"rgb(0,0,0)")
        this.$fz.VarCssSet('--nightjb1',"rgb(181, 136, 230)")
        this.$fz.VarCssSet('--nightjb2',"rgb(40, 20, 131)")
        this.$fz.VarCssSet('--nightFont',"rgb(255,255,255)")
        this.$fz.VarCssSet('--nightjbser1',"rgb(181, 136, 230)")
        this.$fz.VarCssSet('--nightjbser2',"rgb(100, 58, 178)")
        this.$fz.VarCssSet('--nightText1',"rgb(255,255,255)")
        this.$fz.VarCssSet('--nightText2',"rgb(255,255,255)")
        this.$fz.VarCssSet('--nightText3',"rgb(214, 218, 226)")
        this.$fz.VarCssSet('--nightText4',"rgb(0, 0, 0)")
        this.$fz.VarCssSet('--nightLeftSite',"rgb(255,255,255)")
        this.$fz.VarCssSet('--nightLeftSite2',"rgb(111, 84, 186)")
      }

      this.$bus.$emit('nightMode',this.nightMode_Value)
    },
    
    // 滑动框提示文字
    sliderTooltip(e){
      return e + ' px'
    },
    // 滑动块拖动触发
    sliderChange(val){
      localStorage.op_radius = val
      var value = val + 'px'
      this.$fz.VarCssSet('--borderRadius',value)
    },
    // 阴影按钮
    getBtn(){
      var btns = document.querySelectorAll('.btn')
      var that = this
      for (let i = 0; i < btns.length; i++) {
        btns[i].onmouseover = function(){
          var ls = this.className.split(' ')
          if (ls.indexOf('btn_mou')===-1) {
            ls.push('btn_mou')
          }
          this.className = ls.join(' ')
      }
        btns[i].onmouseout  = function(){
          var ls = this.className.split(' ')
          if (ls.indexOf('btn_mou')!==-1) {
            var i = ls.indexOf('btn_mou')
            ls.splice(i,1)
          }
          this.className = ls.join(' ')
        }
        btns[i].onclick  = function(){
          that.btn_ac_is = i
          if (i===0) {
            that.$fz.VarCssSet('--bodyShadow','0 4px 13px rgba(48, 1, 1, 0.1) !important')
            window.localStorage.op_shadow = i
          }else{
            that.$fz.VarCssSet('--bodyShadow','0 15px 35px rgba(48, 1, 1, 0.1),0 5px 15px rgba(0,0,0,.07)!important')
            window.localStorage.op_shadow = i
          }
        }
      }
    },
    // 阴影按钮初始化
    btn_click_mou(){
      this.btn_ac_is = localStorage.op_shadow * 1

      if (this.btn_ac_is ===0) {
        this.$fz.VarCssSet('--bodyShadow','0 4px 13px rgba(48, 1, 1, 0.1) !important')
      }else{
        this.$fz.VarCssSet('--bodyShadow','0 15px 35px rgba(48, 1, 1, 0.1),0 5px 15px rgba(0,0,0,.07)!important')
      }
    },
    // 
    bodyColorChange(){
      localStorage.op_bodyColor = this.bodyColor
      this.$bus.$emit('op_bodyColor',this.bodyColor)

    }
  }
}
</script>

<style scoped>
/* pc端 */
@media screen and (min-width:450px){
.op_OPK{
  width: 350px;
  height: 350px;
  position: absolute;
  bottom: 10px;
  border-radius:var(--borderRadius);
  box-shadow: var(--bodyShadow);
  background-color:var(--nightMode2);
  animation: op_OPKDH 0.7s ease;
  opacity: 1;
  padding: 18px 28px 28px 28px;
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
}
/* 移动端 小于450触发 */
@media screen and (max-width:450px){
.op_OPK{
  width: 96%;
  height: 350px;
  position: fixed;
  bottom: 0 !important;
  left: 0 !important;
  right: 0 !important;
  margin: auto;
  border-radius:var(--borderRadius) var(--borderRadius) 0 0;
  box-shadow: var(--bodyShadow);
  background-color:var(--nightMode2);
  animation: op_OPKDH 0.7s ease;
  opacity: 1;
  padding: 18px 28px 28px 28px;
  box-sizing: border-box;
  font-size: 20px;

  color: var(--nightMode3);
  z-index: 999;
}

@keyframes op_OPKDH{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
}


#op_OP{
  box-shadow: var(--bodyShadow);
  margin: 10px 0;
}
#op_OP >>>.el-icon-s-tools{
  color:#5e72e4;
  font-size: 18px;
}


.op{
  position: relative;
}




.op_kg{
  width: 100%;
  display: flex;
  justify-content:flex-end;
}
.op_kg>>>.el-icon-close{
  cursor:pointer;
  font-weight: bold;
  display: inline-block;
}
.op_gb_dh{
  animation: op_gb_dh_false 0.7s ease;
}
@keyframes op_gb_dh_false{
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}





.op_OPK_mode{
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
}



.block{
  width: 100%;
  display: flex;
  flex-direction:row ;
  justify-content: space-between;
}
.demonstration{
  line-height: 40px;
}
.block>>>.el-slider__runway{
  width: 200px;
}


.btn{
  background-color: white;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor:pointer;
}
.op_OPK_showYY{
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.showYY_btns{
  display: flex;
}
.showYY_btns .btn{
  height: 30px;
  width: 70px;
  text-align: center;
  line-height: 30px;
  border-radius: 2px;
  border: solid 1px #5e72e4;
  color: #6377e4;
  font-size: 16px;
  font-weight: bold;
}
.btn_active{
  color: #ffffff !important;
  background-color: #5e72e4;
}
.btn_mou{
  background-color: #3b4ebd !important;
  color: #ffffff !important;
}

.op_OPK_bodyColor{
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bodyColorDiv{
  display: flex;
  align-items: center;
}
</style>