<!--
  Filename: Board.vue
  Info: Renders hexagonal board
-->
<template>
  <div>
    <ol>
      <li v-for="char in characterSet" :key="characterSet.indexOf(char)" v-on:click="$emit('add-letter', char)">
        {{char}}
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: 'Board',
  props:{
    targetCharacter,
    characterSet
  },
  methods: {}
}
</script>