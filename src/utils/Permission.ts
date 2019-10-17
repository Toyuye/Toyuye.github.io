import { Route } from "vue-router";
import router from "@/router";
import store from "@/store";
import { setPageTitle, getToken } from "@/utils";

router.beforeEach(async (to: Route, from: Route, next: any) => {
  if (getToken()) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      const hasRoles = store.state.user.userInfo.roles.length === 0;
      if (hasRoles) {
        try {
          const data = await store.dispatch("user/setUserInfoFn");
          // 根据返回code 进行跳转
          if (data.code == "0000") {
            next({ ...to, replace: true });
          } else {
            next(`/login?redirect=${to.path}`);
          }
        } catch (error) {
          next(`/login?redirect=${to.path}`);
        }
      } else {
        next();
      }
    }
  } else {
    /* has no token*/
    if (!to.meta.isLogin) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
router.afterEach((to: Route, from: Route) => {
  setPageTitle(to);
});
