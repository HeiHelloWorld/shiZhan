import Vue from 'vue'
import Vuex from "vuex"

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import category from './modules/category'
import categoryList from './modules/categoryList'
import homeData from "./modules/homeData"

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules:{
    category,
    categoryList,
    homeData
  }
})