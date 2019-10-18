import { $storage } from "./";

const getToken = (): String | null => {
  return $storage().getItem("TOYUYE_SYS_TOKEN") || null;
};

const setToken = (val: String) => {
  return $storage().setItem("TOYUYE_SYS_TOKEN", val);
};

export { getToken, setToken };
