export default {
  state: {
    history: [],
    delay: 250,
  },
  mutations: {
    updateHistory (state, way) {
      state.history.push(way)
    },
    cleanHistory (state) {
      state.history = []
    },
    updateDelay (state, delay) {
      state.delay = delay
    },
  },
  actions: {
    addHistory (ctx, way) {
      ctx.commit('updateHistory', way)
    },
    clearHistory (ctx) {
      ctx.commit('cleanHistory')
    },
    setDelay (ctx, delay) {
      ctx.commit('updateDelay', delay)
    }
  },
  getters: {
    history (state) {
      return state.history
    },
    delay (state) {
      return state.delay
    },
  },
}
