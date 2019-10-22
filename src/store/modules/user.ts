import { MutationTree, ActionTree, GetterTree } from "vuex";
import * as types from "../types";
import { login, getUserInfo, logout } from "@/fetch/api";
import { getToken, setToken, removeToken } from "@/utils";
import { resetRouter } from "@/router";

interface InState {
  token: String | null;
  username: String;
  avatar: String;
  age: String;
  email: String;
  roles: String[];
}

const state: InState = {
  token: getToken() || null,
  username: "",
  avatar: "",
  age: "",
  email: "",
  roles: []
};

const actions: ActionTree<any, any> = {
  Login({ commit }: any, userInfo: any) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(({ data }: any) => {
          if (data.code === "0000") {
            setToken(data.data.token);
            commit(types.SET_USER_TOKEN, data.data.token);
          }
          resolve(data);
        })
        .catch((error: any) => {
          console.log("网络异常，请稍后再试>>>>>>>");
          reject(error);
        });
    });
  },
  Logout({ commit }: any, payload: any) {
    return new Promise((resolve, reject) => {
      logout()
        .then(({ data }: any) => {
          if (data.code === "0000") {
            removeToken();
            resetRouter();
            commit(types.SET_USER_NAME, "");
            commit(types.SET_USER_AVATAR, "");
            commit(types.SET_USER_AGE, "");
            commit(types.SET_USER_EMAIL, "");
            commit(types.SET_USER_ROLES, []);
          }
          resolve(data);
        })
        .catch((error: any) => {
          console.log("网络异常，请稍后再试>>>>>>>>");
          reject(error);
        });
    });
  },
  GetUserInfo({ commit }: any) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then(({ data }: any) => {
          if (data.code === "0000") {
            commit(types.SET_USER_NAME, data.data.username);
            commit(types.SET_USER_AVATAR, data.data.avatar);
            commit(types.SET_USER_AGE, data.data.age);
            commit(types.SET_USER_EMAIL, data.data.email);
            commit(types.SET_USER_ROLES, data.data.roles);
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
  username: (state: InState): String => state.username,
  avatar: (state: InState): String => state.avatar,
  age: (state: InState): String => state.age,
  email: (state: InState): String => state.email,
  roles: (state: InState): String[] => state.roles
};

const mutations: MutationTree<any> = {
  [types.SET_USER_TOKEN](state: InState, payload: String): void {
    state.token = payload;
  },
  [types.SET_USER_NAME](state: InState, payload: String): void {
    state.username = payload;
  },
  [types.SET_USER_AVATAR](state: InState, payload: String): void {
    state.avatar = payload;
  },
  [types.SET_USER_AGE](state: InState, payload: String): void {
    state.age = payload;
  },
  [types.SET_USER_EMAIL](state: InState, payload: String): void {
    state.email = payload;
  },
  [types.SET_USER_ROLES](state: InState, payload: String[]): void {
    state.roles = payload;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
