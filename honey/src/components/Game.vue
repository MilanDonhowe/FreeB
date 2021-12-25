<!--
  Filename: Game.vue
  Description: Entry point component for displaying 7 character the game.
-->
<template>
  <div class="block mx-auto">
    <Board class="" :otherLetters="this.characterSet" :mainLetter="this.targetCharacter" v-on:add-letter="addToPattern"/>
    <div class="">
      <h2 class="h-5 pb-10 px-6 text-left">Current Try: {{currentPattern}}</h2>
      <div class="flex flex-row justify-around w-64">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" @click="clearPattern">Clear</button>
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" @click="checkPattern">Try</button>
      </div>
    </div>
    <div class="w-100 basis-100">
      <h2 class="text-left">Found Words:</h2>
      <h3 v-for="found in readWords" :key="readWords.indexOf(found)">
        {{found}}
      </h3>
    </div>
  </div>
</template>
<script>
import Board from './Board.vue'

export default {
  name: 'Game',
  components:{
    Board
  },
  data () {
    return {
      characterSet: [],
      targetCharacter: '',
      readWords: [],
      remainingWords: [],
      score: 0,
      currentPattern: ''
    }
  },
  computed:{},
  created () {
    // create new game
    this.newGame()
  },
  methods:{
    // Generate new character set & reset score
    newGame(){
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
      const n = alphabet.length
      // Fisher-yates shuffle
      for (let i = 0; i < n-2; i++) {
        // Need number from i <= j < n
        const randomIndex = Math.floor((Math.random() * (n - i))) + i
        let temp = alphabet[i]
        // Swap
        alphabet[i] = alphabet[randomIndex]
        alphabet[randomIndex] = temp
      }
      this.targetCharacter = alphabet[0]
      this.characterSet = alphabet.slice(1,7)
      this.score = 0
      this.currentPattern = ''
      this.readWords = []
    },

    addToPattern(char){
      if (this.characterSet.includes(char) || char == this.targetCharacter) this.currentPattern += char
    },

    _validPattern() {
      if (this.currentPattern.includes(this.targetCharacter)){
        if (this.$store.getters['WordModule/isValidWord'](this.currentPattern)){
          if (!this.readWords.includes(this.currentPattern)){
            return true
          }
        }
      }
      return false
    },

    checkPattern() {
      if (this._validPattern()) {
        this.readWords.push(this.currentPattern)
      } else {
        // display error message
      }
      this.clearPattern()
    },

    clearPattern(){
      this.currentPattern = ''
    }
  }
}
</script>
<style scoped>
* {
  text-align: center;
}
.debug {
  background: red;
}

</style>