import {
  RECEIVE_IDENTIFY_TABS,
  RECEIVE_IDENTIFY_MANUAL
} from '../mutation-types'

import {
  reqGetTabs,
  reqGetManual
} from "../../../api"

const actions = {
  async getTabs({
    commit
  }) {
    const result = await reqGetTabs()
    if (result.code === '200') {
      const tabsArr = result.data
      //console.log(tabsArr)
      commit(RECEIVE_IDENTIFY_TABS, {
        tabsArr
      })
    }

  },

  async getManual({
    commit
  }) {
    const result = await reqGetManual()
    if (result.code === '200') {
      const recManual = result.data
      console.log(result.data)
      commit(RECEIVE_IDENTIFY_MANUAL, {
        recManual
      })
    }

  }

}

const state = {
  tabsArr: [],
  recManual: []
}

const mutations = {
  [RECEIVE_IDENTIFY_TABS](state, {
    tabsArr
  }) {
    state.tabsArr = tabsArr
  },
  [RECEIVE_IDENTIFY_MANUAL](state, {
    recManual
  }) {
    state.recManual = recManual
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