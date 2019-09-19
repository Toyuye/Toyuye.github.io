import { getCookie, setCookie, delCookie, clearCookie } from "./cookie";

const OS = (): any => {
  let u = navigator.userAgent;
  return {
    webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
    iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1, //是否为iPhone或者QQHD浏览器
    windowPhone: u.indexOf("Windows Phone") >= 0,
    iPad: u.indexOf("iPad") > -1, //是否iPad
    iPod: u.indexOf("iPod") > -1, //是否iPod
    weChat: u.match(/MicroMessenger/i) !== null, //是否为微信
    isQQBuiltIn: `${u.toLowerCase().match(/qq/i)}` === "qq" ? true : false // 判断是否为qq 内置浏览器
  };
};
const throttle = function(fn: any, interval: number, _this: any = window) {
  let _self = fn,
    timer: any,
    firstTimer: boolean = true;
  return () => {
    var args: IArguments = arguments,
      _me: any = _this;
    if (firstTimer) {
      _self.apply(_me, args);
      return (firstTimer = false);
    }
    if (timer) {
      return false;
    }
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, interval || 500);
  };
};

const _storage = () => {
  let testKey: string = "_LOCALSTORAGETEST",
    storage: any = window.localStorage;
  try {
    storage.setItem(testKey, "TOYUYE_LOCALSTORAGETEST");
    storage.removeItem(testKey);
    return storage;
  } catch (error) {
    storage.setItem = (key: string, value: string) => {
      setCookie(key, value, "M1");
    };
    storage.getItem = (key: string, value: string) => {
      return getCookie(key);
    };
    storage.removeItem = (key: string) => {
      delCookie(key);
    };
    storage.clear = () => {
      clearCookie();
      console.log("---->>>>>>>>>>>>>");
    };
    return storage;
  }
};
const setTKD = (to: any): void => {
  let t: any = to.meta.title || "欢迎登陆Toyuye系统";
  document.title = t;
  // let d: any = document.querySelector("meta[name=description]")
  // let k: any = document.querySelector("meta[name=keywords]")
  // d.setAttribute("content", to.meta.description)
  // k.setAttribute("content", to.meta.keywords)
};

const checkPhone = (num: string): Boolean => {
  let Reg = /^1(3|4|5|6|7|8|9)\d{9}$/;
  return Reg.test(num);
};

export {
  getCookie,
  setCookie,
  delCookie,
  clearCookie,
  OS,
  throttle,
  _storage,
  setTKD
};
