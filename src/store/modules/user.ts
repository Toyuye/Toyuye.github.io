import * as types from '../types'
import {login} from '@/fetch/api'
import { MutationTree, ActionTree, GetterTree } from 'vuex';

const state: any = {
    loginStatus: (localStorage.getItem('loginStatus') === 'true') || false,
    bblinkToken: localStorage.getItem('bblinkToken') || '',
}

const actions: ActionTree<any, any> = {
    login({commit}: any, {userInfo, login_URL}: any) {
        return new Promise((resovle, reject) => {
            login(userInfo).then((res: any) => {
                if(res.data.code === '0000') {
                    localStorage.setItem('loginStatus', 'true')
                    localStorage.setItem('bblinkToken', res.data.data.bblinkToken)
                    commit(types.SET_LOGIN_STATUS, true)
                }else {
                    console.log(`${res.data.msg}>>>>>>>>>>>>>>>`)
                }
                resovle(res)
            }).catch((error: any) => {
                console.log('服务器异常，稍后再试>>>>>>>')
                reject(error)
            })
        })
    }
}


const getters: GetterTree<any, any> = {
    loginStatus(state: any): any { return state.loginStatus }

}

const mutations: MutationTree<any> = {
    [types.SET_LOGIN_STATUS](state:any, status:any): void {
        state.loginStatus = status
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}