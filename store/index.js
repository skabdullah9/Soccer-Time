export const state = () => ({
  darkMode: false,
})

export const mutations = {
  DARKMODE_TOGGLE(state) {
    state.darkMode = !state.darkMode
  },
}
