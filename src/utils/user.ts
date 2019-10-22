import { $storage } from "./";

const getToken = (): String | null => {
  return $storage().getItem("TOYUYE_SYS_TOKEN") || null;
};

const setToken = (val: String) => {
  return $storage().setItem("TOYUYE_SYS_TOKEN", val);
};

const removeToken = () => {
  return $storage().removeItem("TOYUYE_SYS_TOKEN");
};
const clearStorage = () => {
  return $storage().clear();
};
export { getToken, setToken, removeToken, clearStorage };
