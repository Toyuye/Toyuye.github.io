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

export const logout = () => {
  return fetch({
    url: "Users/logout",
    method: "post"
  });
};

export const accountCenter = () => {
  return fetch({
    url: "Users/center",
    method: "get"
  });
};

export const accountSetting = () => {
  return fetch({
    url: "Users/setting",
    method: "get"
  });
};

export const workplace = () => {
  return fetch({
    url: "Dashboard/workplace",
    method: "get"
  });
};
