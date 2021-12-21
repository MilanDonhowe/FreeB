/*
  Filename: words.js
  Info: Store for set of English letters
*/

import Words from '@/assets/words.json'

const state = {
  validWords: new Set(Words['dictionary'])
}

const getters = {
  // Check if word is real
  isValidWord: (state) => (word) => {
    return state.validWords.includes(word)
  }
}

const mutations = {

}

const actions = {

}


export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}