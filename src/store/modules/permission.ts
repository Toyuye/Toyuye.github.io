import { MutationTree, ActionTree, GetterTree } from "vuex";
import { asyncRoutes, constantRoutes } from "@/router";

interface InPemissionState {
  routes: Array<any>;
  addRoutes: Array<any>;
}

const state: InPemissionState = {
  routes: constantRoutes,
  addRoutes: []
};

const actions: ActionTree<any, any> = {
  GenerateRoutes({ commit }: any, roles: any[]) {
    return new Promise((resolve, reject) => {
      let accessedRoutes: any[] = [];
      if (roles.includes("admin")) {
        accessedRoutes = asyncRoutes || [];
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  }
};

const getters: GetterTree<any, any> = {
  routes: (state: InPemissionState): any[] => state.routes,
  addRoutes: (state: InPemissionState): any[] => state.addRoutes
};

const mutations: MutationTree<any> = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  }
};

export function hasPermission(roles: any[], route: any) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

export function filterAsyncRoutes(routes: any[], roles: String[]) {
  const res: any[] = [];
  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });
  return res;
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
