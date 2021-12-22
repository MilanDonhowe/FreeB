<template>
  <div class="game-view">
    <h1>Spelling B</h1>
    <Game />
  </div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'
export default {
  name: 'GameView',
  components: {
    Game
  }
}
</script>
