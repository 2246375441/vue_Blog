<template>
  <div class="Item">
    <div class="item-title"><router-link :to="itemUrl">js代理模式理解和应用场景</router-link></div>
    
    <div class="item-nav">
      <div class="nav hg"><i class="el-icon-timer"></i>2020-11-02 11:47 </div>
      <div class="nav hg"><i class="el-icon-view"></i>4</div>
      <div class="nav hg"><i class="el-icon-chat-dot-square"></i>0</div>
      <div class="nav"><i class="el-icon-collection-tag"></i>js设计模式</div>
    </div>
    <div class="item-nav">
      <div class="nav"><i class="el-icon-edit-outline"></i>334 字</div>
      <div class="nav"><i class="el-icon-alarm-clock"></i>2 分钟</div>
    </div>
    <div class="item-content">@[toc] 代理模式的理解 Proxy（代理模式）：为其他对象提供一种代理以控制这个对象的访问 使用者无权访问目标对象 中间加代理，通过哦代理做授权和控制 比方：比如买火车票这件小事：黄牛相当于是我们本人的的代理，我们可以通过黄牛买票。通过黄牛买票，我们可以避免与火车站的直接交互，可以省很多事，并且还能享受到黄牛更好的服务(如果钱给够的话) 类图…</div>
  </div>
</template>

<script>
export default {
  name:'rightItem',
  props:{
    itemUrl:{
      type:[String],
      default:'999999999999999999'
    }
  }
}
</script>

<style scoped>
@media screen and (min-width:900px){

}
@media screen and (max-width:900px){
.item-nav{
  flex-wrap: wrap;
  justify-content: center;
}
.item-title:hover{
  font-size: 26px!important;
}
}
a{
  text-decoration: none;
  color: #5e72e4;

}
.Item{
  width: 100%;
  box-shadow: var(--bodyShadow);
  border-radius: var(--borderRadius);
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px;
  box-sizing: border-box;

  margin-bottom: 50px;

  background-color: var(--nightText2);

  position: relative;
  
}

.item-title{
  font-size: 26px;
  letter-spacing: .5px;
  transition: all .35s ease;
  height: 50px;
  color: #5e72e4;
  /* line-height: 50px; */
}
.item-title:hover{
  font-size: 32px;
}

.item-nav{
  display: flex;
}
.nav{
  margin: 5px 5px; 
  color: #80838d; 
}
.nav i{
  margin-right: 4px;
}
.hg{
  border-right: solid 1px #80838d;
  padding-right: 10px;
}

.item-content{
  margin-top: 5px;
  margin-bottom: 10px;
  line-height: 30px;
  color: var(--nightText4);
}
</style>