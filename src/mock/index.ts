import Mock from "mockjs";

import { getParams, getParamsObj, hasUersFn } from "./mockMixin";

const asscessToken = "TOYUYEASSCESSTOKEN";

const userList = [
  {
    username: "Toyuye",
    password: "Toyuye",
    avatar: "https://github.com/Toyuye.com",
    age: "18",
    email: "toyue.xiao@bblink.cn",
    roles: ["admin"]
  }
];

const loginToken = (opt: any) => {
  let data = {};
  if (hasUersFn(getParamsObj(opt.body), userList)) {
    data = {
      code: "0000",
      data: {
        token: "TOYUYE_SYS_TOKEN_VALUE"
      },
      msg: "success"
    };
  } else {
    data = {
      code: "1001",
      data: {},
      msg: "failed"
    };
  }
  return data;
};
const userInfo = (opt: any) => {
  let data = {
    code: "0000",
    data: {
      username: "Toyuye",
      avatar: "https://github.com/Toyuye.com",
      age: "18",
      email: "toyue.xiao@bblink.cn",
      roles: ["admin"]
    },
    msg: "suceess"
  };
  return data;
};
Mock.mock(/\/Users\/login/, "post", loginToken);
Mock.mock(/\/Users\/info/, "post", userInfo);
export default Mock;
