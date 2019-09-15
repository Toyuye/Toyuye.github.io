import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $fetchs from './fetch'
//import { prototype } from 'mocha';
import './assets/_reset.scss'
Vue.config.productionTip = false;


/** 
 *@auth Toyuye 
*/
Vue.use(v=>{
  v.prototype.$HTTP = $fetchs
})

declare module 'vue/types/vue' {
  interface Vue {
    $HTTP: any
  }
}

import { setTKD } from './utils'

router.beforeEach((to, from, next) => {
  setTKD(to)
  next()
})
router.afterEach((to, from) => {
  console.log(`${to.meta.title}>>>>>>>>>>>>>>>>>>>>>`)
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

