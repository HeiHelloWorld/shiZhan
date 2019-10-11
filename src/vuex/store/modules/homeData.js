import {
  RECEIVE_HOMEDATA
} from '../mutation-types'

import {
  reqHomeData
} from "../../../api"

const actions = {
  async getHomeData({
    commit
  }) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {
        homeData
      })
    }

  }
}

const state = {
  homeData: {},
}

const mutations = {
  [RECEIVE_HOMEDATA] (state,{homeData}){
    console.log(homeData)
    state.homeData = homeData
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