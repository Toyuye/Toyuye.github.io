import Mock from "mockjs";

import { getParams, getParamsObj, hasUersFn } from "./mockMixin";
import { accountCenterData } from "./accountCenterData";

const asscessToken = "TOYUYEASSCESSTOKEN";

const userList = [
  {
    username: "Toyuye",
    password: "Toyuye",
    avatar: "../../assets/Toyuye_pic.jpg",
    age: "18",
    email: "toyue.xiao@bblink.cn",
    roles: ["amdmin"]
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
      avatar: "../../assets/Toyuye_pic.jpg",
      age: "18",
      email: "toyue.xiao@bblink.cn",
      roles: ["admin"]
    },
    msg: "suceess"
  };
  return data;
};
const logout = (opt: any) => {
  let data = {
    code: "0000",
    data: {},
    msg: "suceess"
  };
  return data;
};
const accountCenter = () => {
  let data = {
    code: "0000",
    data: accountCenterData,
    msg: "suceess"
  };
  return data;
};
Mock.mock(/\/Users\/login/, "post", loginToken);
Mock.mock(/\/Users\/info/, "post", userInfo);
Mock.mock(/\/Users\/logout/, "post", logout);

Mock.mock(/\/Users\/center/, "get", accountCenter);

export default Mock;
