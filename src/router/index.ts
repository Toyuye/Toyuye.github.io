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
      path: "/",
      name: "Layout",
      component: Layout,
      meta: {
        hidden: false,
        title: "首页",
        icon: "s-promotion"
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Layout,
      redirect: "/dashboard/analysis",
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
        },
        {
          path: "monitor",
          name: "monitor",
          meta: {
            hidden: false,
            title: "监控页",
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
        },
        {
          path: "step-form",
          name: "step-form",
          meta: {
            hidden: false,
            title: "分布表单页",
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
