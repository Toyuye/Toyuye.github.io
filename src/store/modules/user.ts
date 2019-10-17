import { MutationTree, ActionTree, GetterTree } from "vuex";
import * as types from "../types";
import { login, getUserInfo } from "@/fetch/api";
import { getToken, setToken, _storage } from "@/utils";

interface UserInfo {
  username: String;
  avatar: String;
  age: String;
  email: String;
  roles: String[];
}

interface InState {
  token: String | null;
  userInfo: UserInfo;
}

const state: InState = {
  token: getToken() || null,
  userInfo: {
    username: "",
    avatar: "",
    age: "",
    email: "",
    roles: []
  }
};

const actions: ActionTree<any, any> = {
  loginFn({ commit }: any, userInfo: any) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(({ data }: any) => {
          if (data.code === "0000") {
            setToken(data.data.token);
            commit(types.SET_LOGIN_TOKEN, data.data.token);
          }

          resolve(data);
        })
        .catch((error: any) => {
          console.log("网络异常，请稍后再试>>>>>>>");
          reject(error);
        });
    });
  },
  setUserInfoFn({ commit }: any) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then(({ data }: any) => {
          if (data.code === "0000") {
            commit(types.SET_USER_INFO, data.data);
          }
          resolve(data);
        })
        .catch((error: any) => {
          console.log("网络异常，请稍后再试>>>>>>>>");
          reject(error);
        });
    });
  }
};

const getters: GetterTree<any, any> = {
  token: (state: InState): String | null => state.token,
  userInfo: (state: InState): UserInfo => state.userInfo
};

const mutations: MutationTree<any> = {
  [types.SET_LOGIN_TOKEN](state: InState, payload: String): void {
    state.token = payload;
  },
  [types.SET_USER_INFO](state: InState, payload: UserInfo): void {
    state.userInfo = payload;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
