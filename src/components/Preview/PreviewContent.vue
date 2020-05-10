<template>
  <component :is="type" :class="classes" :style="styles">
    <template v-if="hasChilds">
      <template v-for="(child, index) in childs">
        <PreviewContent :container="child" :key="index" />
      </template>
    </template>

    <template v-else>
      <template v-if="root">
        <span
          class="empty-childs"
        >This is empty `Main` element in tree. Add childs with constructor.</span>
      </template>

      <template v-else>{{name}}</template>
    </template>
  </component>
</template>
<script>
export default {
  name: "PreviewContent",

  props: {
    container: {
      type: Object,
      required: true
    },

    root: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    name() {
      return this.container.name;
    },

    type() {
      return this.container.type;
    },

    styles() {
      return this.container.styles;
    },

    classes() {
      return this.container.classes;
    },

    childs() {
      return this.container.childs;
    },

    hasChilds() {
      return this.childs.length > 0
    }
  }
};
</script>
<style>
.root-element > .empty-childs {
  margin: 60px auto;
  font-size: 24px;
}
</style>
