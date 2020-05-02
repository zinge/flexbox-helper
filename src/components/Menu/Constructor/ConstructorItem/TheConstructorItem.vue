<template>
  <div class="constructor__item" :style="borderColor">
    <ItemHeader
      @openHeader="toggleOpened"
      :isOpened="isOpened"
      :name="container.name"
      :color="color"
    />
    <div class="item__content" v-if="isOpened">
      <span>Constuctor Item</span>
    </div>
  </div>
</template>

<script>
import ItemHeader from "./ConstructorItemHeader";
import { BACKGROUND_COLOR } from "@/constants";

export default {
  name: "ConstructorItem",

  components: {
    ItemHeader
  },

  data() {
    return {
      isOpened: false
    };
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

  methods: {
    toggleOpened() {
      this.isOpened = !this.isOpened;
    },

    hasChilds() {
      return this.container.childs.length > 1;
    }
  },

  computed: {
    color() {
      return {
        [BACKGROUND_COLOR]: this.container.styles[BACKGROUND_COLOR]
      };
    },
    borderColor() {
      return {
        borderColor: this.container.styles[BACKGROUND_COLOR]
      };
    }
  }
};
</script>

<style>
.constructor__item {
  display: flex;
  flex-direction: column;
  align-content: stretch;
  border: 1px solid;
  padding: 4px;
}
.item__content {
  display: flex;
  flex-direction: column;
}
</style>
