import { setPageTKD, _storage, getToken } from "../utils";

export default (router: any) => {
  router.beforeEach((to: any, from: any, next: any) => {
    setPageTKD(to);
    if (getToken()) {
      next();
    } else {
      // 是否需要登录
      if (to.meta.isLogin) {
        next(`/login?redirectURL=${to.path}`);
      } else {
        next();
      }
    }
  });
  router.afterEach((to: any, from: any) => {
    console.log(`${to.meta.title}>>>>>>>>>>>>>>>>>>>>>`);
  });
};
