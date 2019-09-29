import { MutationTree, ActionTree, GetterTree } from "vuex";
import * as types from "../types";
import { login } from "@/fetch/api";

import { getToken, setToken, _storage } from "@/utils";

interface UserInfo {
  username: String;
  password: String;
  avatar: String;
  age: String;
  email: String;
  roles: String[];
}

interface State {
  token: String | null;
  userInfo: UserInfo;
}

const state: State = {
  token: getToken() || null,
  userInfo: {
    username: "",
    password: "",
    avatar: "",
    age: "",
    email: "",
    roles: []
  }
};

const actions: ActionTree<any, any> = {
  login({ commit }: any, userInfo: any) {
    return new Promise((resovle, reject) => {
      login(userInfo)
        .then(({ data }: any) => {
          console.log(data);
          if (data.code === "0000") {
            setToken("TOYUYE_SYS_TOKEN_VALUE");
            commit(types.SET_LOGIN_TOKEN, "TOYUYE_SYS_TOKEN_VALUE");
          }
          resovle(data);
        })
        .catch((error: any) => {
          console.log("网络异常，请稍后再试>>>>>>>");
          reject(error);
        });
    });
  }
};

const getters: GetterTree<any, any> = {
  getStateToken(state: State): any {
    return state.token;
  }
};

const mutations: MutationTree<any> = {
  [types.SET_LOGIN_TOKEN](state: State, status: String): void {
    state.token = status;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
