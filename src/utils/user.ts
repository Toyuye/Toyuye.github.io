import { _storage } from "./";

const getToken = (): String | null => {
  return _storage().getItem("TOYUYE_SYS_TOKEN") || null;
};
const setToken = (val: String) => {
  return _storage().getItem("TOYUYE_SYS_TOKEN", val);
};
export { getToken, setToken };
