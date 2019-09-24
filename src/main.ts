import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $fetchs from "./fetch";
Vue.config.productionTip = false;

import "./assets/_reset.css";
import "./assets/iconfonts/iconfont.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

declare module "vue/types/vue" {
  interface Vue {
    $HTTP: any;
  }
}
/**
 *@auth Toyuye
 */
Vue.use(v => {
  v.prototype.$HTTP = $fetchs;
});
import { setTKD } from "./utils";
router.beforeEach((to, from, next) => {
  setTKD(to);
  next();
});
router.afterEach((to, from) => {
  console.log(`${to.meta.title}>>>>>>>>>>>>>>>>>>>>>`);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
