<template>
  <div class="constructor-item">
    <div class="item__header" @click="toggleOpened">
      <div class="item__header__arrow">{{opened ? 'V' : '>>' }}</div>
      <div class="item__header__title">{{container.name}}</div>
    </div>
    <div class="item__content" v-if="opened">
      <template v-if="hasOwnArray('classes')">
        <ItemClasses :classes="container.classes"/>
      </template>
      <template v-if="hasOwnArray('styles')">
        <ItemStyles :styles="container.styles"/>
      </template>
      <template v-if="hasOwnArray('childs')">
        <constructor-item
          v-for="(child, index) in container.childs"
          :key="index"
          :container="child"
        />
      </template>
    </div>
  </div>
</template>
<script>
import ItemClasses from './ItemClasses.vue'
import ItemStyles from './ItemStyles.vue'
export default {
  name: 'ConstructorItem',

  components: {
    ItemClasses, ItemStyles
  },

  props: {
    container: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      opened: false
    }
  },

  methods: {
    toggleOpened () {
      this.opened = !this.opened
    },
    hasOwnArray (name) {
      return this.container.hasOwnProperty(name) &&
        Array.isArray(this.container[name])
    }
  }
}
</script>
<style>
  .constructor-item {
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
    padding-right: 10px;
  }

  .item__header__title {
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>
