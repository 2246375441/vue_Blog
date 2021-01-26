<template>
  <div class="Item">
    <div class="item-title">js代理模式理解和应用场景</div>
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
    <div class="item-content" ref="itemContent">

    </div>
  </div>
</template>

<script>
export default {
  name:'rightItem',
  data(){
    return{
      NewData:{
        content:`<h1 style="font-size: 40px">123241421</h1>
掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言，它消除了不同计算机之间信息交流的障碍。因此，它是网络上应用最为广泛的语言，也是构成网页文档的主要语言，学好HTML是成为Web开发人员的基本条件。
HTML是一种标记语言，能够实现Web页面并在浏览器中显示。HTML5作为HTML的最新版本，引入了多项新技术，大大增强了对于应用的支持能力，使得Web技术不再局限于呈现网页内容。
随着CSS、JavaScript、Flash等技术的发展，<h1 style="font-size: 40px">Hxxxxxx</h1>Web对于应用的处理能力逐渐增强，用户浏览网页的体验已经有了较大的改善。不过HTML5中的几项新技术实现了质的突破，使得Web技术首次被认为能够接近于本地原生应用技术，开发Web应用真正成为开发者的一个选择。
HTML5可以使开发者的工作大大简化，理论上单次开发就可以在不同平台借助浏览器运行，降低开发的成本，这也是产业界普遍认为HTML5技术的主要优点之一。AppMobi、摩托罗拉、Sencha、Appcelerator等公司均已推出了较为成熟的开发工具，支持HTML5应用的发展。 [3]
\tCSS
学好CSS是网页外观的重要一点，CSS可以帮助把网页外观做得更加美观。
\tJavaScript
学习JavaScript的基本语法，以及如何使用JavaScript编程将会提高开发人员的个人技能。
\t操作系统
了解Unix和Linux的基本知识，对于开发人员有益无害。
\t网络服务器
了解Web服务器，包括对Apache的基本配置，htaccess配置技巧的掌握等。<h1 style="font-size: 40px">HTML语言1111</h1>
掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言，它消除了不同计算机之间信息交流的障碍。因此，它是网络上应用最为广泛的语言，也是构成网页文档的主要语言，学好HTML是成为Web开发人员的基本条件。
HTML是一种标记语言，能够实现Web页面并在浏览器中显示。HTML5作为HTML的最新版本，引入了多项新技术，大大增强了对于应用的支持能力，使得Web技术不再局限于呈现网页内容。
随着CSS、JavaScript、Flash等技术的发展，Web对于应用的处理能力逐渐增强，用户浏览网页的体验已经有了较大的改善。不过HTML5中的几项新技术实现了质的突破，使得Web技术首次被认为能够接近于本地原生应用技术，开发Web应用真正成为开发者的一个选择。
HTML5可以使开发者的工作大大简化，理论上单次开发就可以在不同平台借助浏览器运行，降低开发的成本，这也是产业界普遍认为HTML5技术的主要优点之一。AppMobi、摩托罗拉、Sencha、Appcelerator等公司均已推出了较为成熟的开发工具，支持HTML5应用的发展。 [3]
\tCSS
学好CSS是网页外观的重要一点，CSS可以帮助把网页外观做得更加美观。
\tJavaScript
学习JavaScript的基本语法，以及如何使用JavaScript编程将会提高开发人员的个人技能。
\t操作系统
了解Unix和Linux的基本知识，对于开发人员有益无害。
\t网络服务器
了解Web服务器，包括对Apache的基本配置，htaccess配置技巧的掌握等。<h1 style="font-size: 40px">HTML语言2222</h1>
掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言，它消除了不同计算机之间信息交流的障碍。因此，它是网络上应用最为广泛的语言，也是构成网页文档的主要语言，学好HTML是成为Web开发人员的基本条件。
HTML是一种标记语言，能够实现Web页面并在浏览器中显示。HTML5作为HTML的最新版本，引入了多项新技术，大大增强了对于应用的支持能力，使得Web技术不再局限于呈现网页内容。
随着CSS、JavaScript、Flash等技术的发展，Web对于应用的处理能力逐渐增强，用户浏览网页的体验已经有了较大的改善。不过HTML5中的几项新技术实现了质的突破，使得Web技术首次被认为能够接近于本地原生应用技术，开发Web应用真正成为开发者的一个选择。
HTML5可以使开发者的工作大大简化，理论上单次开发就可以在不同平台借助浏览器运行，降低开发的成本，这也是产业界普遍认为HTML5技术的主要优点之一。AppMobi、摩托罗拉、Sencha、Appcelerator等公司均已推出了较为成熟的开发工具，支持HTML5应用的发展。 [3]
\tCSS
学好CSS是网页外观的重要一点，CSS可以帮助把网页外观做得更加美观。
\tJavaScript
学习JavaScript的基本语法，以及如何使用JavaScript编程将会提高开发人员的个人技能。
\t操作系统
了解Unix和Linux的基本知识，对于开发人员有益无害。
\t网络服务器
了解Web服务器，包括对Apache的基本配置，htaccess配置技巧的掌握等。<h1 style="font-size: 40px">HTML语言3333</h1>
掌握HTML是网页的核心，是一种制作万维网页面的标准语言，是万维网浏览器使用的一种语言，它消除了不同计算机之间信息交流的障碍。因此，它是网络上应用最为广泛的语言，也是构成网页文档的主要语言，学好HTML是成为Web开发人员的基本条件。
HTML是一种标记语言，能够实现Web页面并在浏览器中显示。HTML5作为HTML的最新版本，引入了多项新技术，大大增强了对于应用的支持能力，使得Web技术不再局限于呈现网页内容。
随着CSS、JavaScript、Flash等技术的发展，Web对于应用的处理能力逐渐增强，用户浏览网页的体验已经有了较大的改善。不过HTML5中的几项新技术实现了质的突破，使得Web技术首次被认为能够接近于本地原生应用技术，开发Web应用真正成为开发者的一个选择。
HTML5可以使开发者的工作大大简化，理论上单次开发就可以在不同平台借助浏览器运行，降低开发的成本，这也是产业界普遍认为HTML5技术的主要优点之一。AppMobi、摩托罗拉、Sencha、Appcelerator等公司均已推出了较为成熟的开发工具，支持HTML5应用的发展。 [3]
\tCSS
学好CSS是网页外观的重要一点，CSS可以帮助把网页外观做得更加美观。
\tJavaScript
学习JavaScript的基本语法，以及如何使用JavaScript编程将会提高开发人员的个人技能。
\t操作系统
了解Unix和Linux的基本知识，对于开发人员有益无害。
\t网络服务器
了解Web服务器，包括对Apache的基本配置，htaccess配置技巧的掌握等。`
      }
    }
  },
  mounted() {
    // 渲染文章
    this.$refs.itemContent.innerHTML = this.NewData.content
    // 获取所有的h1标签
    const h1Dom = this.$refs.itemContent.querySelectorAll('h1')
    // 将node节点转换为数组
    const arr = []
    const nodeArr = Array.prototype.slice.call(h1Dom)
    // 获取盒子距离顶部距离
    const itemContentTop =  this.$refs.itemContent.offsetTop
    // 处理数组 获取所有h1标签数据
    const newsData = nodeArr.map(item=>{
      return {
        uuid:this.$uuid(),
        title:item.innerHTML,
        ItemTop:item.offsetTop + itemContentTop * 2
      }
    })
    console.log(newsData)
    this.$bus.$emit("newsContentData",newsData)
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
.Item{
  width: 100%;
  /* height: 300px; */
  /* background-color: #ffffff; */
  /* box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)!important; */
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

  animation: itemDH 1s ease;

}
@keyframes itemDH{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
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
h1{
  font-size: 20px!important;
}
</style>
