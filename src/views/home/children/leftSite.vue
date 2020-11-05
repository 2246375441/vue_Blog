<template>
  <div>
    <div :class="{'pc1':IsPc1,'pc2':!IsPc1}" >
      111111
    </div>
  </div>
</template>

<script>
export default {
  name:'leftSite',
  data(){
    return {
      pcIS:true
    }
  },
  mounted(){

  },
  computed: {
    IsPc1(){
      this.$bus.$on('scrollTop',item=>{
        if (item<340) {
          this.pcIS = true
        }else{
          this.pcIS = false
        }
      })
      return this.pcIS
    }
  },
}
</script>

<style scoped>
.pc1{
  width: 100%;
  height: 450px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important;
  border-radius: 20px;
  margin-top: 10px;
}
.pc2{
  width: 100%;
  height: 450px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 15px 35px rgba(50,50,93,.2),0 5px 15px rgba(0,0,0,.2)!important;
  border-radius: 20px;
  position: fixed;
  top: 90px;
  width: 240px;
}
</style>