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
      path: "/login",
      name: "Login",
      component: () =>
        import(/* webpackChunkName: "home" */ "../views/login/Login.vue"),
      meta: {
        hidden: false,
        title: "切换用户",
        icon: "user-group-fill"
      }
    },
    {
      path: "/",
      name: "Layout",
      component: Layout,
      meta: {
        hidden: false,
        title: "首页",
        icon: "home"
      }
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Layout,
      redirect: "/dashboard/analysis",
      meta: {
        hidden: false,
        title: "数据",
        icon: "chart-line"
      },
      children: [
        {
          path: "analysis",
          name: "Analysis",
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
          name: "Monitor",
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
      name: "Form",
      component: Layout,
      meta: {
        hidden: false,
        title: "表单",
        icon: "save"
      },
      children: [
        {
          path: "basic-form",
          name: "Basic-form",
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
          name: "Step-form",
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
    },
    {
      path: "/user",
      name: "User",
      component: Layout,
      redirect: "/user/info",
      meta: {
        hidden: false,
        title: "用户",
        icon: "user-fill"
      },
      children: [
        {
          path: "info",
          name: "Info",
          meta: {
            hidden: false,
            title: "个人信息",
            icon: false,
            roles: ["admin"]
          },
          component: () =>
            import(/* webpackChunkName: "home" */ "../views/home/Home.vue")
        },
        {
          path: "settings",
          name: "Settings",
          meta: {
            hidden: false,
            title: "个人设置",
            icon: false,
            roles: ["admin"]
          },
          component: () =>
            import(/* webpackChunkName: "home" */ "../views/home/Home.vue")
        }
      ]
    }
  ]
});
