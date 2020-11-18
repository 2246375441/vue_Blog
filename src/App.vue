<template>
  <div id="app">
    <nav-bar></nav-bar>
    <background-map></background-map>
    <router-view></router-view>
    <option-bar></option-bar>
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar'
import BackgroundMap from './components/backgroundmap/BackgroundMap'
import OptionBar from './components/optionbar/OptionBar'
export default {
  name:'App',
  components:{
    NavBar,
    BackgroundMap,
    OptionBar
  },
  data () {
    return {
     
    }
  },
  mounted() {
    
  },
}
</script>


<style scoped>

</style>
