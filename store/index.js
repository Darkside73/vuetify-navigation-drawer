export const state = () => ({
  sidebar: false
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  'vuetify/SIDEBAR' (state, payload) {
    state.sidebar = payload
  }
}
