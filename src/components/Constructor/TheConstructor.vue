<template>
  <div class="constructor">
    <div class="constructor__header">
      This is constructor, change structure
    </div>
    <ConstructorItem :container="structure"/>
  </div>
</template>

<script>
import ConstructorItem from './Item/TheItem.vue'
export default {
  name: 'TheConstructor',

  components: {
    ConstructorItem
  },

  computed: {
    structure () {
      return this.$store.state.container
    }
  }
}
</script>

<style>
  .constructor {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-basis: 100%;
    background-color: lightslategray;
  }

  .constructor__header {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    padding: 5px 0;
    border-bottom: 1px solid;
  }
</style>
