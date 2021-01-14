import { MutationTree, ActionTree, GetterTree, Commit, Dispatch } from "vuex";

import * as types from "../types";

interface InDesignState {
  renderComponentList: any[];
  renderPageAttribute: object;
  renderComponentAttribute: object;
}

const state: InDesignState = {
  renderComponentList: [],
  renderPageAttribute: {},
  renderComponentAttribute: {}
};

const actions: ActionTree<any, any> = {
  getDesignPage({ dispatch }: { dispatch: Dispatch }, payload: any) {
    return new Promise((resolve, reject) => {
      console.log(1111);
      dispatch("updateComponentList", [
        { name: "文本", id: 1 },
        { name: "文本", id: 2 },
        { name: "文本", id: 3 },
        { name: "文本", id: 4 },
        { name: "文本", id: 5 },
        { name: "文本", id: 6 },
        { name: "文本", id: 7 },
        { name: "文本", id: 8 },
        { name: "文本", id: 9 },
        { name: "文本", id: 10 },
        { name: "文本", id: 11 },
        { name: "文本", id: 12 },
        { name: "文本", id: 13 },
        { name: "文本", id: 14 },
        { name: "文本", id: 15 },
        { name: "文本", id: 16 },
        { name: "文本", id: 17 },
        { name: "文本", id: 18 },
        { name: "文本", id: 19 },
        { name: "文本", id: 20 },
        { name: "文本", id: 21 }
      ]);
      dispatch("updatePageSetting", {});
      dispatch("updateComponentSetting", {});
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  },
  updateComponentList({ commit }: { commit: Commit }, payload: any) {
    console.log(1, payload);
    return new Promise((resolve, reject) => {
      commit("SET_COMPONENTLIST", payload);
      resolve(true);
    });
  },
  updatePageSetting({ commit }: { commit: Commit }, payload: any) {
    console.log(2, payload);
    return new Promise((resolve, reject) => {
      commit("SET_PAGESETTING", payload);
      resolve(true);
    });
  },
  updateComponentSetting({ commit }: { commit: Commit }, payload: any) {
    console.log(3, payload);
    return new Promise((resolve, reject) => {
      commit("SET_COMPONENTSETTING", payload);
      resolve(true);
    });
  }
};

const getters: GetterTree<any, any> = {
  renderComponentList: (state: InDesignState): any[] =>
    state.renderComponentList,
  renderPageAttribute: (state: InDesignState): object =>
    state.renderPageAttribute,
  renderComponentAttribute: (state: InDesignState): object =>
    state.renderComponentAttribute
};

const mutations: MutationTree<any> = {
  SET_COMPONENTLIST: (state, payload: any[]) => {
    state.renderComponentList = payload;
  },
  SET_PAGESETTING: (state, payload: object) => {
    state.renderPageAttribute = payload;
  },
  SET_COMPONENTSETTING: (state, payload: object) => {
    state.renderComponentAttribute = payload;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
