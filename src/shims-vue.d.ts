
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "vue/types/vue" {
  import Vue from "vue";
  import VueRouter ,{Route } from 'vue-router';
  interface Vue {    
    $router: VueRouter;        
    $route: Route;    
  }
}
declare module "qs"



