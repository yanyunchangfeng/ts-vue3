import { IGlobalState } from "../";
import { CATEGORY_TYPES, IHomeState } from "@/typings/home";
import { Module } from "vuex";
import * as Types from "../action-types";
// 首页里应该存哪些数据

const state: IHomeState = {
  currentCategory: CATEGORY_TYPES.ALL,
  sliders: [],
  lessons: {
    hasMore: true,
    loading: false,
    offset: 0,
    limit: 5,
    list: [],
  },
};
// Module里的参数 1）自己状态 2) 全局状态
const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SET_CATEGORY](state, payload: CATEGORY_TYPES) {
      state.currentCategory = payload;
    },
  },
};

export default home;
