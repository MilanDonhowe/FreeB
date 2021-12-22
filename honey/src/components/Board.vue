<!--
  Filename: Board.vue
  Info: Renders hexagonal board
  This will probably work: https://vmcreative.github.io/Hexi-Flexi-Grid/
-->
<template>
  <div id="hexGrid">
    <div class="hexCrop">
      <div class="hexContainer">
        <div class="hex">
          {{mainLetter}}
        </div>
        <div v-for="char in otherLetters" :key="otherLetters.indexOf(char)" v-on:click="$emit('add-letter', char)" class="hex">
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

.hex {
  background-color: blue;
  color: white;
}

/* src: https://css-tricks.com/hexagons-and-beyond-flexible-responsive-grid-patterns-sans-media-queries/*/
.hexCrop {
  display: flex;
  --sm: 100px;
  --m: 4px;
  --f: calc(var(--s) * 1.732 + 4 * var(--m) - 1px); 
}

.hexContainer {
  width: 100%;
  min-width: 15spx;
  font-size: 12px;
}

.hexContainer div {
  width: var(--s);
  margin: var(--m);
  height: calc(var(--s) * 1.1547);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  margin-bottom: calc(var(--m) - var(--s) * 0.2886); /* some negative margin to create overlap */
}

.hexContainer::before {
  content: "";
  width: calc(var(--s) / 2 + var(--m));
  float: left;
  height: 120%; 
  shape-outside: repeating-linear-gradient(#0000 0 calc(var(--f) - 3px), #000 0 var(--f));
}

</style>