<template>
  <div class="searchBox">
    <div class="searchNav">
      老陈博客丶
    </div>
    <div class="searchInput">
      <search-box-an class="search-box-a"></search-box-an>
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
      
    }
  },
  components:{
    SearchBoxAn
  },
  computed:{
    
  }
}
</script>

<style scoped>
.searchBox{
  width: 100%;
  height: 160px;
  border-radius: var(--borderRadius);
  box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important;
}
.searchNav{
  width: 100%;
  height: 50%;
  background-color: rgb(100, 58, 178);
  background: -webkit-linear-gradient(to right,var(--nightjbser1),var(--nightjbser2)); 
  background: -o-linear-gradient(to right,var(--nightjbser1),var(--nightjbser2)); 
  background: -moz-linear-gradient(to right,var(--nightjbser1),var(--nightjbser2)); 
  background: linear-gradient(to right,var(--nightjbser1),var(--nightjbser2)); 
  border-radius: var(--borderRadius) var(--borderRadius) 0 0;

  font-size: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchInput{
  width: 100%;
  height: 50%;
  /* background-color: #ffffff; */
  border-radius: 0 0 var(--borderRadius) var(--borderRadius);
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--nightText2);
}
.searchInput>>>.el-button--primary{
  background-color: var(--nightText3);
  color:var(--nightText4);
}
.searchInput>>>.el-input__inner{
  background-color:var(--nightText2);
}

.search-box-a{
  width: 80%!important;
}



</style>