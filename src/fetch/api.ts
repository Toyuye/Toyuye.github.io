import fetch from "./";

// 用户登录
export const login = (data: any) => {
  return fetch({
    url: "/Users/login",
    method: "post",
    data
  });
};

export const getUserInfo = () => {
  return fetch({
    url: "/Users/info",
    method: "post"
  });
};
