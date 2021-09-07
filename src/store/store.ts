import { createStore } from 'vuex'

export default createStore({
  state: {
    title: "Blob Maker",
    page: "maker",
    colors: {
      color1: "#CBCBCB",
      color2: "#959595",
      secondary: "#575757"
    },
    shareUrl: ""
  },
  mutations: {
    setColors(state, payload) {
      state.colors = payload;
    },
    setTitle(state, payload){
      state.title = payload;
    },
    navigate(state, payload){
      state.page = payload;
    }
  }
})