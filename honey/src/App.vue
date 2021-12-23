<template>
  <div id="app" class="container mx-auto">
    <div id="nav" class="flex flex-row mx-auto">
      <router-link class="mx-auto" to="/">7 Letter Game</router-link>
    </div>
    <router-view class=""/>
  </div>
</template>
<style>
#nav {
  font-family: 'Courier New', Courier, monospace;
}
</style>
