import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Bus from './components/bus/bus'
import $ from 'jquery' 

import './assets/css/overallSituation.css' //导入全局默认css
import './assets/css/root.css' //设置全局颜色--xx  var(--xx)
import 'element-ui/lib/theme-chalk/index.css'; //导入element的css
import './assets/js/element.js'                //导入element的全部组件
import fz from './assets/js/encapsulationJS'    //导入自己封装的js

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$bus = Bus  //将事件总线bus挂载到vue原型对象上
Vue.prototype.$fz = fz    //将封装的JS挂载到vue原型对象上
Vue.prototype.$ = $ //挂载jQuery

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
