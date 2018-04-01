<template>
  <div id="app">
      <ThePreview />
      <TheConstructor />
  </div>
</template>

<script>
import ThePreview from './components/ThePreview.vue'
import TheConstructor from './components/TheConstructor.vue'
export default {
  name: 'app',
  components: {
    ThePreview,
    TheConstructor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  flex-basis: 99%;
}
</style>
