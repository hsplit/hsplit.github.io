import Vue from 'vue'
import Vuex from 'vuex'

import chessHorse from '@/modules/chessHorse'
import xo from '@/modules/xo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chessHorse,
    xo,
  },
})
