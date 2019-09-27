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

export { getParams };
