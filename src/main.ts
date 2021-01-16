import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $fetchs from "./fetch";
import "./assets/_reset.css";
import "./assets/iconfonts/iconfont.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "overlayscrollbars/css/OverlayScrollbars.css";

import "./mock";
import "./utils/permission";
Vue.config.productionTip = false;
Vue.use(ElementUI);

/**
 *@auth Toyuye
 */
declare module "vue/types/vue" {
  interface Vue {
    $HTTP: any;
  }
}
Vue.use(v => {
  v.prototype.$HTTP = $fetchs;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
