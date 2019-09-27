import Mock from "mockjs";
import { getParams } from "./mockMixin";
const asscessToken = "TOYUYEASSCESSTOKEN";
const userList = [
  {
    username: "Toyuye",
    password: "Toyuye",
    avatar: "https://github.com/Toyuye.com",
    age: "18",
    email: "toyue.xiao@bblink.cn"
  }
];

const loginToken = (opt: any) => {
  let username = getParams(opt.body, "username");
  let password = getParams(opt.body, "password");
  console.log(username, password);
  let data = {
    code: "0000",
    data: {
      token: "TOYUYE_SYS_TOKEN_VALUE"
    },
    msg: "success"
  };
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
      password: "Toyuye"
    },
    msg: "suceess"
  };
  return data;
};
Mock.mock(/\/Users\/login/, "post", loginToken);
Mock.mock(/\/Users\/info/, "post", userInfo);
export default Mock;
