<template>
  <div class="preview bordered">
    <h3>This is preview</h3>
    <PreviewBlock />
  </div>
</template>

<script>
import PreviewBlock from './PreviewBlock.vue'

export default {
  name: 'ThePreview',

  components: {
    PreviewBlock
  }
}
</script>

<style>
  .preview {
    display: flex;
    flex-basis: 100%;
    padding: 0px 10px;
    justify-content: center;
  }
</style>
