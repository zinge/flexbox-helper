<template>
  <div class="constructor__item">
    <div class="item__header" @click="toggleOpened">
      <div class="item__header__arrow">{{opened ? 'V' : '>>' }}</div>
      <div class="item__header__title">{{container.name}}</div>
    </div>
    <div class="item__content" v-if="opened">content</div>
    <ConstructorItemChilds
      v-if="container.childs.length"
      :childs="container.childs"
    />
  </div>
</template>
<script>
import ConstructorItemChilds from './ConstructorItemChilds.vue'
export default {
  name: 'ConstructorItem',

  components: {
    ConstructorItemChilds
  },

  props: {
    container: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      opened: false,
      childs: false
    }
  },

  methods: {
    toggleOpened () {
      this.opened = !this.opened
    }
  }
}
</script>
<style>
  .constructor__item {
    display: flex;
    flex-direction: column;
    align-content: stretch;
  }

  .item__header {
    display: flex;
    cursor: pointer;
  }

  .item__header__arrow {
    display: flex;
    color: aqua;
    padding-right: 1em;
  }

  .item__header__title {
    display: flex;
    justify-content: center;
  }
</style>
