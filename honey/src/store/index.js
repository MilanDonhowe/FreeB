/*
  Filename: index.js
  Info: Store for game state
*/
import Vue from 'vue'
import Vuex from 'vuex'
import WordModule from './words.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    WordModule
  }
})
