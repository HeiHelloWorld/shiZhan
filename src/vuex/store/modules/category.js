import {
  RECEIVE_CATEGORYDATA
} from '../mutation-types'

import {
  reqCateGoryData
} from "../../../api"

const actions = {
  async getCateGoryData({
    commit
  }) {
    const result = await reqCateGoryData()
    if (result.code === 0) {
      const category = result.data
      console.log(category)
      commit(RECEIVE_CATEGORYDATA, {
        category
      })
    }

  }
}

const state = {
  category: {},
}

const mutations = {
  [RECEIVE_CATEGORYDATA](state, {
    category
  }) {
    state.category = category
  }
}



const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}