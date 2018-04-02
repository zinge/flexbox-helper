<template>
  <div class="constructor__list">
    <ConstructorItem :container="structure"/>
  </div>
</template>
<script>
import ConstructorItem from './ConstructorItem'
export default {
  name: 'ConstructorList',

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
  .constructor__list {
    font-style: italic;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
</style>
