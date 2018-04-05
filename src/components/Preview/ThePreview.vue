<template>
  <div class="preview">
    <div class="preview__header">
      This is preview, for edit use Constructor
    </div>
    <div class="preview__content">
      <PreviewBlock
        :structure="structure"
      />
    </div>
  </div>
</template>

<script>
import PreviewBlock from './PreviewBlock.vue'

export default {
  name: 'ThePreview',

  components: {
    PreviewBlock
  },

  computed: {
    structure () {
      return this.$store.state.container
    }
  }
}
</script>

<style>
  .preview {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    align-items: stretch;
    background-color: lightgray;
  }

  .preview__header {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    padding: 5px 0;
    border-bottom: 1px solid;
  }
</style>
