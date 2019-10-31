import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
Vue.use(Router);

const Layout = () =>
  import(/* webpackChunkName: "layout" */ "../views/layout/index.vue");

export const constantRoutes: RouteConfig[] = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/Login.vue"),
    meta: {
      hidden: true,
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
    redirect: "/dashboard/analysis",
    meta: {
      hidden: true,
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
      title: "Dashboard",
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
          icon: "wind-smile",
          isLogin: true,
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
          icon: "wind-smile",
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
    children: [
      {
        path: "403",
        name: "403",
        meta: {
          hidden: false,
          title: "403",
          icon: "wind-smile",
          isLogin: true,
          roles: ["admin"]
        },
        component: () =>
          import(
            /* webpackChunkName: "step-form" */ "../views/exception/403.vue"
          )
      },
      {
        path: "404",
        name: "404",
        meta: {
          hidden: false,
          title: "404",
          icon: "wind-smile",
          isLogin: true,
          roles: ["admin"]
        },
        component: () =>
          import(
            /* webpackChunkName: "step-form" */ "../views/exception/404.vue"
          )
      },
      {
        path: "500",
        name: "500",
        meta: {
          hidden: false,
          title: "500",
          icon: "wind-smile",
          isLogin: true,
          roles: ["admin"]
        },
        component: () =>
          import(
            /* webpackChunkName: "step-form" */ "../views/exception/500.vue"
          )
      }
    ]
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
          icon: "wind-smile",
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
          icon: "wind-smile",
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
];

export const asyncRoutes: RouteConfig[] = [
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
          icon: "wind-smile",
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
          icon: "wind-smile",
          isLogin: true,
          roles: ["admin"]
        },
        component: () =>
          import(
            /* webpackChunkName: "step-form" */ "../views/form/StepForm.vue"
          )
      }
    ]
  }
];

const createRouter = () =>
  new Router({
    // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    base: process.env.BASE_URL,
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher; // reset router
}

export default router;
