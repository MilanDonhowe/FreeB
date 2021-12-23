<!--
  Filename: Game.vue
  Description: Entry point component for displaying 7 character the game.
-->
<template>
  <div class="flex flex-row basis-2 flex-nowrap justify-around justify-items-center">
    <Board class="" :otherLetters="this.characterSet" :mainLetter="this.targetCharacter" v-on:add-letter="addToPattern"/>
    <div class="">
      <p>{{currentPattern}}</p>
      <button @click="clearPattern">Clear</button>
      <button>Try</button>
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

    checkPattern() {
      // if this.$store['WordModule/']
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
</style>