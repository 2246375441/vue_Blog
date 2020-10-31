<template>
  <div id="app">
    <nav-bar></nav-bar>
    <background-map></background-map>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/navbar/NavBar'
import BackgroundMap from './components/backgroundmap/BackgroundMap'
export default {
  name:'App',
  components:{
    NavBar,
    BackgroundMap
  }
}
</script>


<style scoped>

</style>
