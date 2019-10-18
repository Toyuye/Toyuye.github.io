import { Route } from "vue-router";
import router from "@/router";
import store from "@/store";
import { setPageTitle, getToken } from "@/utils";

router.beforeEach(async (to: Route, from: Route, next: any) => {
  if (getToken()) {
    if (to.path === "/login") {
      next();
    } else {
      const hasRoles = store.state.user.userInfo.roles.length === 0;
      if (hasRoles) {
        try {
          const { data } = await store.dispatch("user/GetUserInfo");
          const asyncRoutes = await store.dispatch(
            "permission/GenerateRoutes",
            data.roles
          );
          router.addRoutes(asyncRoutes);
          next({ ...to, replace: true });
        } catch (error) {
          next(`/login?redirect=${to.path}`);
        }
      } else {
        next();
      }
    }
  } else {
    /* has no token*/
    to.meta.isLogin ? next(`/login?redirect=${to.path}`) : next();
  }
});
router.afterEach((to: Route, from: Route) => {
  setPageTitle(to);
});
