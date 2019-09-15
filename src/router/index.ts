import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'layout',
      component:()=>
        import (/* webpackChunkName: "layout" */ "../views/layout/index.vue"),
      meta:{
        title:'欢迎登陆Toyuye系统'
      },
      children:[
        {
          path: "/home",
          name: "home",
          meta:{
            title:'首页'
          },
          component: () =>
            import(/* webpackChunkName: "home" */ "../views/home/Home.vue")
        },
        {
          path: "/about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          meta:{
            title:'关于'
          },
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/about/About.vue")
        }
      ]
    }
  ]  
});
