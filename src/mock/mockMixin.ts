const getParams = (url: String, name: String): String | null => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = url
    .split("?")
    .join("")
    .match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};

const getParamsObj = (url: String): any => {
  let obj: any = {};
  let r =
    url.split("?").length > 1
      ? url.split("?")[1].split("&")
      : url.split("?")[0].split("&");
  r.forEach(item => {
    item.split("=")[0];
    obj[item.split("=")[0]] = item.split("=")[1];
  });

  return obj;
};

const hasUersFn = (user: any, List: any[]): Boolean => {
  let hasUers = false;
  List.forEach(item => {
    item.username == user.username && item.password == user.password
      ? (hasUers = true)
      : "";
  });
  return hasUers;
};
export { getParams, getParamsObj, hasUersFn };
