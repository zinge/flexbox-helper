<template>
  <div class="constructor__item" :style="borderColor">
    <DeleteHelper
      :path="path"
      :showDelete="showDelete"
      :setShowDelete="setShowDelete"
      :toggleOpened="toggleOpened"
    />
    <ItemHeader
      @openHeader="toggleOpened"
      :isOpened="isOpened"
      :name="container.name"
      :color="color"
      :setModalPath="setModalPath"
      :hasChilds="hasChilds"
      :setShowDelete="setShowDelete"
      :root="root"
    />
    <div class="item__content" v-if="isOpened">
      <ConstructorItem
        v-for="(child, index) in container.childs"
        :key="index"
        :container="child"
        :path="childPath(child.hash)"
      />
    </div>
  </div>
</template>

<script>
import ItemHeader from "./ConstructorItemHeader";
import DeleteHelper from "./ConstructorItemDeleteHelper";
import { BACKGROUND_COLOR } from "@/constants";

export default {
  name: "ConstructorItem",

  components: {
    ItemHeader,
    DeleteHelper
  },

  data() {
    return {
      isOpened: false,
      showDelete: false
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
    },

    root: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    toggleOpened() {
      this.isOpened = !this.isOpened;
    },

    childPath(hash) {
      return [...this.path, hash];
    },

    setModalPath() {
      this.$store.commit("setModalPath", this.path);
    },

    setShowDelete(payload) {
      this.showDelete = payload || false;
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
    },
    hasChilds() {
      return this.container.childs.length > 0;
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
  position: relative;
}

.item__content {
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
}

.item__content > .constructor__item + .constructor__item {
  margin-top: 0.5em;
}
</style>
