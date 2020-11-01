<template>
  <div class="searchBox">
    <div class="searchNav">
      老陈博客丶
    </div>
    <div class="searchInput">
      <search-box-an></search-box-an>
    </div>
  </div>
</template>

<script>
import SearchBoxAn from '../../../components/searchboxan/SearchBoxAn'
export default {
  name:'LeftSearchBox',
  mounted(){
    window.addEventListener('scroll',this.handleScroll,true)
  },
  methods:{
    handleScroll(){
      console.log('22')
    }
  },
  components:{
    SearchBoxAn
  }
}
</script>

<style scoped>
.searchBox{
  width: 100%;
  height: 160px;
  border-radius: 30px;
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important
}
.searchNav{
  width: 100%;
  height: 50%;
  background: linear-gradient(to right, #a887e6 , #643ab2); 
  background: -webkit-linear-gradient(to right, #a887e6 , #643ab2); 
  background: -o-linear-gradient(to right, #a887e6, #643ab2); 
  background: -moz-linear-gradient(to right, #a887e6, #643ab2); 
  border-radius: 30px 30px 0 0;

  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchInput{
  width: 100%;
  height: 50%;
  background-color: #ffffff;
  border-radius: 0 0 30px 30px;
}
</style>