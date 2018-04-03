<template>
  <div class="constructor__item__classes">
    Classes: [
      <span class="item__class" v-for="(item, index) in classes" :key="index">{{item}}</span>
       ]
  </div>
</template>
<script>
export default {
  name: 'ItemClasses',

  props: {
    classes: {
      type: Array,
      required: true
    }
  }
}
</script>
