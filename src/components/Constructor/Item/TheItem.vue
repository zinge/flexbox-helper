<template>
  <div class="constructor__item">
    <ItemHeader @openHeader="toggleOpened"
      :isOpened="isOpened"
      :name="container.name"
      :color="getColor"/>
    <div class="item__content" v-if="isOpened">
      <ItemParams :params="container.classes" name="classes" :path="path"/>
      <ItemParams :params="container.styles" name="styles" :path="path"/>
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
import ItemActions from './Actions/TheActions.vue'
import ItemParams from './Params/TheParams.vue'
import ItemHeader from './ItemHeader.vue'
export default {
  name: 'ConstructorItem',

  components: {
    ItemActions, ItemHeader, ItemParams
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
      const hasProperty = Object.prototype.hasOwnProperty.call(this.container, 'childs')

      return hasProperty &&
        Array.isArray(this.container.childs)
    },
    childPath (child) {
      return [...this.path, child]
    }
  },

  computed: {
    getColor () {
      return this.container.styles.find(el => {
        return Object.prototype.hasOwnProperty.call(el, 'background-color')
      })
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
