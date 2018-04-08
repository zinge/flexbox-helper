<template>
  <div class="constructor__item">
    <ItemHeader @openHeader="toggleOpened"
      :isOpened="isOpened"
      :name="container.name"
      :color="getColor"/>
    <div class="item__content" v-if="isOpened">
      <ItemClasses :classes="container.classes"/>
      <ItemStyles :styles="container.styles"/>
      <ItemActions :path="path"/>
      <template v-if="hasChilds">
        <constructor-item
          v-for="(child, index) in container.childs"
          :key="index"
          :container="child"
          :path="childPath(child.name)"
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
    },
    path: {
      type: Array,
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
    hasChilds () {
      return this.container.hasOwnProperty('childs') &&
        Array.isArray(this.container.childs)
    },
    childPath (child) {
      return [...this.path, child]
    }
  },

  computed: {
    getColor () {
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
    margin: 5px;
    padding: 5px;
  }

  .item__content {
    display: flex;
    flex-direction: column;
  }
</style>
