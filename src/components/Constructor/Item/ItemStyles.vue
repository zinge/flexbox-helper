<template>
  <div class="constructor__item__styles">
    Styles: [
      <span class="item__style" v-for="(item, index) in styles" :key="index">
        {{item}}{{styles.length !== index + 1 ? ', ' : ''}}
      </span>
       ]
  </div>
</template>
<script>
export default {
  name: 'ItemStyles',

  props: {
    styles: {
      type: Array,
      required: true
    }
  }
}
</script>
