import { setPageTKD, _storage, getToken } from "../utils";

import store from "../store";

export default (router: any) => {
  router.beforeEach(async (to: any, from: any, next: any) => {
    setPageTKD(to);
    if (getToken()) {
      if (to.path === "/login") {
        next({ path: "/" });
      } else {
        const hasRoles = store.state.user.userInfo.roles.length > 0;
        if (hasRoles) {
          next();
        } else {
          try {
            // get user info
            // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
            const { data } = await store.dispatch("user/setUserInfoFn");
            if (data.code === "0000") {
              // generate accessible routes map based on roles
              // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

              // dynamically add accessible routes
              // router.addRoutes(accessRoutes)

              // hack method to ensure that addRoutes is complete
              // set the replace: true, so the navigation will not leave a history record
              next({ ...to, replace: true });
            } else {
              next(`/login?redirect=${to.path}`);
            }
          } catch (error) {
            // remove token and go to login page to re-login
            // await store.dispatch('user/resetToken')
            next(`/login?redirect=${to.path}`);
          }
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
  router.afterEach((to: any, from: any) => {
    // console.log(`${to.meta.title}>>>>>>>>>>>>>>>>>>>>>`);
  });
};
