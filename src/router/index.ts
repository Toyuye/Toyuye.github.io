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
        title: "登录Toyuye",
        icon: "user-group-fill",
        isLogin: false,
        roles: []
      }
    },
    {
      path: "/",
      name: "Layout",
      component: Layout,
      meta: {
        hidden: false,
        title: "首页",
        icon: "home",
        isLogin: true,
        roles: ["admin"]
      }
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Layout,
      redirect: "/dashboard/analysis",
      meta: {
        hidden: false,
        title: "数据页",
        icon: "chart-line",
        isLogin: false,
        roles: ["admin"]
      },
      children: [
        {
          path: "analysis",
          name: "Analysis",
          meta: {
            hidden: false,
            title: "分析页",
            icon: false,
            isLogin: false,
            roles: ["admin"]
          },
          component: () =>
            import(
              /* webpackChunkName: "analysis" */ "../views/dashboard/Analysis.vue"
            )
        },
        {
          path: "monitor",
          name: "Monitor",
          meta: {
            hidden: false,
            title: "监控页",
            icon: false,
            isLogin: true,
            roles: ["admin"]
          },
          component: () =>
            import(
              /* webpackChunkName: "monitor" */ "../views/dashboard/Monitor.vue"
            )
        }
      ]
    },
    {
      path: "/form",
      name: "Form",
      component: Layout,
      redirect: "/form/basic-form",
      meta: {
        hidden: false,
        title: "表单页",
        icon: "database-plus",
        isLogin: true,
        roles: ["admin"]
      },
      children: [
        {
          path: "basic-form",
          name: "Basic-form",
          meta: {
            hidden: false,
            title: "基础表单",
            icon: false,
            isLogin: true,
            roles: ["admin"]
          },
          component: () =>
            import(
              /* webpackChunkName: "basic-form" */ "../views/form/BasicForm.vue"
            )
        },
        {
          path: "step-form",
          name: "Step-form",
          meta: {
            hidden: false,
            title: "分布表单页",
            icon: false,
            isLogin: true,
            roles: ["admin"]
          },
          component: () =>
            import(
              /* webpackChunkName: "step-form" */ "../views/form/StepForm.vue"
            )
        }
      ]
    },
    {
      path: "/exception",
      name: "Exception",
      component: Layout,
      meta: {
        hidden: false,
        title: "异常页",
        icon: "new-releases",
        isLogin: true,
        roles: ["admin"]
      },
      children: []
    },
    {
      path: "/account",
      name: "Account",
      component: Layout,
      redirect: "/account/center",
      meta: {
        hidden: false,
        title: "个人页",
        icon: "user-fill",
        isLogin: true,
        roles: ["admin"]
      },
      children: [
        {
          path: "center",
          name: "Center",
          meta: {
            hidden: false,
            title: "个人中心",
            icon: false,
            isLogin: true,
            roles: ["admin"]
          },
          component: () =>
            import(
              /* webpackChunkName: "userCenter" */ "../views/account/UserCenter.vue"
            )
        },
        {
          path: "settings",
          name: "Settings",
          meta: {
            hidden: false,
            title: "个人设置",
            icon: false,
            isLogin: true,
            roles: ["admin"]
          },
          component: () =>
            import(
              /* webpackChunkName: "userSettings" */ "../views/account/UserSettings.vue"
            )
        }
      ]
    }
  ]
});
