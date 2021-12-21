/*
  Filename: words.js
  Info: Store for set of English letters
*/

import Words from '@/assets/words.json'

const state = {
  Words
}

const getters = {
  isValidWord: (state) => (word) => {
    return state.Words.includes(word)
  }
}

const mutations = {}
const actions = {}


export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}