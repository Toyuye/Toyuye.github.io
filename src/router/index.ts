import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layout",
      component: () =>
        import(/* webpackChunkName: "layout" */ "../views/layout/index.vue"),
      meta: {
        title: "欢迎登陆Toyuye系统"
      },
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          meta: {
            title: "Dashboard",
            icon: "stopwatch"
          },
          children:[
            {
              path:"/dashboard/analysis",
              name:"分析页",
              meta: {
                title:"分析页",
                icon: false
              },
              component: () =>
                import(/* webpackChunkName: "home" */ "../views/home/Home.vue")
            }
          ]
        },
        {
          path: "/form",
          name: "about",
          meta: {
            title: "表单页",
            icon:'edit-outline'
          },
          children:[
            {
              path:"/form/basic-form",
              name:"基础表单",
              meta:{
                title:"基础表单页",
                icon:false
              },
              component: () =>
                import(/* webpackChunkName: "about" */ "../views/about/About.vue")
            }
          ]
        }
      ]
    }
  ]
});
