<template>
  <div class="constructor">
    <div class="constructor__header">
      This is constructor, change structure
    </div>
    <ConstructorList />
  </div>
</template>

<script>
import ConstructorList from './ConstructorList.vue'
export default {
  name: 'TheConstructor',

  components: {
    ConstructorList
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
  }
</style>
