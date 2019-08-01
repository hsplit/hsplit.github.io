export default {
  state: {
    winsX: 0,
    winsO: 0,
  },
  mutations: {
    xWin (state) {
      state.winsX++
    },
    oWin (state) {
      state.winsO++
    },
    resetScore (state) {
      state.winsX = 0
      state.winsO = 0
    },
  },
  actions: {
    win (ctx, player) {
      ctx.commit(player === 'X' ? 'xWin' : 'oWin')
    },
    resetXO (ctx) {
      ctx.commit('resetScore')
    },
  },
  getters: {
    winsX (state) {
      return state.winsX
    },
    winsO (state) {
      return state.winsO
    },
  },
}
