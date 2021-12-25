<!--
  Filename: Board.vue
  Info: Renders hexagonal board
  This will probably work: https://vmcreative.github.io/Hexi-Flexi-Grid/
-->
<template>
  <div id="hexGrid">
    <div class="hexCrop mx-20">
      <div class="hexContainer flex flex-row">
        <div class="w-10 py-1 mx-auto text-black font-bold rounded hex" v-for="char in otherLetters.slice(0, 3)" :key="otherLetters.indexOf(char)" v-on:click="$emit('add-letter', char)">
          {{char}}
        </div>
        <div class="w-10 py-1 mx-auto text-black font-bold rounded chosen" v-on:click="$emit('add-letter', mainLetter)">
          {{mainLetter}}
        </div>
        <div class="w-10 py-1 mx-auto text-black font-bold rounded hex" v-for="char in otherLetters.slice(3)" :key="otherLetters.indexOf(char)" v-on:click="$emit('add-letter', char)">
          {{char}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Board',
  props:{
    mainLetter: String,
    otherLetters: Array
  },
  methods: {}
}
</script>
<style scoped>
* {
  font-size: 25px;
}
.chosen {
  background: rgb(221, 43, 19);
  color: white;
  cursor: pointer;
}
.hex {
  background: rgb(27, 142, 86);
  color: white;
  cursor: pointer;
}
</style>