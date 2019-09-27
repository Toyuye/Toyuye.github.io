import Mock from "mockjs";

const loginToken = (opt: any) => {
  console.log(encodeURI(opt.body));
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
      name: "Toyuye",
      avatar: "https://github.com/Toyuye.com",
      age: "18",
      email: "toyue.xiao@bblink.cn"
    },
    msg: "suceess"
  };
  return data;
};
// Mock.mock(/\/Users\/login/, "post", loginToken);
// Mock.mock(/\/Users\/info/, "post", userInfo);
export default Mock;
