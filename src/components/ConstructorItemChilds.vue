<template>
  <div class="constructor__item__childs">
    <div v-for="(child, index) in childs" :key="index">
      {{child.name}} - {{index}}
    </div>
  </div>
</template>
<script>
import ConstructorItem from './ConstructorItem.vue'
export default {
  name: 'ConstructorItemChilds',

  components: {
    ConstructorItem
  },

  props: {
    childs: {
      type: Array,
      required: true
    }
  },

  mounted () {
    (() => console.log('childs', this.childs))()
  }
}
</script>
