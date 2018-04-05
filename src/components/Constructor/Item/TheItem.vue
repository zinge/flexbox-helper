<template>
  <div class="constructor__item">
    <ItemHeader @clickHeader="toggleOpened"
      :isOpened="isOpened"
      :itemName="container.name"
      :itemColor="itemColor"/>
    <div class="item__content" v-if="isOpened">
      <ItemClasses :classes="container.classes"/>
      <ItemStyles :styles="container.styles"/>
      <ItemActions/>
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
import ItemActions from './Actions/TheActions.vue'
import ItemHeader from './ItemHeader.vue'
export default {
  name: 'ConstructorItem',

  components: {
    ItemClasses, ItemStyles, ItemActions, ItemHeader
  },

  props: {
    container: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      isOpened: false
    }
  },

  methods: {
    toggleOpened () {
      this.isOpened = !this.isOpened
    },
    hasOwnArray (name) {
      return this.container.hasOwnProperty(name) &&
        Array.isArray(this.container[name])
    }
  },

  computed: {
    itemColor () {
      return this.container.styles.find(el => el.hasOwnProperty('background-color'))
    }
  }
}
</script>
<style>
  .constructor__item {
    display: flex;
    flex-direction: column;
    align-content: stretch;
    border: 1px solid;
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
  }

  .item__content {
    display: flex;
    flex-direction: column;
  }
</style>
