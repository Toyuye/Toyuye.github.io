import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const Layout = () =>
  import(/* webpackChunkName: "layout" */ "../views/layout/index.vue");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: Layout,
      meta: {
        hidden: false,
        title: "仪表盘",
        icon: "stopwatch"
      },
      children: [
        {
          path: "analysis",
          name: "analysis",
          meta: {
            hidden: false,
            title: "分析页",
            icon: false,
            roles: ["admin"]
          },
          component: () =>
            import(/* webpackChunkName: "home" */ "../views/home/Home.vue")
        }
      ]
    },
    {
      path: "/form",
      name: "form",
      component: Layout,
      meta: {
        hidden: false,
        title: "表单",
        icon: "edit-outline"
      },
      children: [
        {
          path: "basic-form",
          name: "basic-form",
          meta: {
            hidden: false,
            title: "基础表单",
            icon: false,
            roles: ["admin"]
          },
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/about/About.vue")
        }
      ]
    }
  ]
});
