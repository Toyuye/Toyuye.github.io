import fetch from "./";

// 用户登录
export const login = (data: any) => {
  return fetch({
    url: "/Users/login",
    method: "post",
    data
  });
};

export const getUserInfo = (data: any) => {
  return fetch({
    url: "/users/info",
    method: "get",
    data
  });
};
