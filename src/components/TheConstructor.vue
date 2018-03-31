<template>
  <div class="constructor bordered">
    <h3>Change options in constructor</h3>
  </div>
</template>

<script>
import { hexGen } from '@/utils'

export default {
  name: 'TheConstructor',

  mounted () {
    (() => console.log(`TheConstructor -> color will mount: ${hexGen()}`))()
  }
}
</script>

<style>
  .constructor {
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    padding: 0px 10px;
  }
</style>
