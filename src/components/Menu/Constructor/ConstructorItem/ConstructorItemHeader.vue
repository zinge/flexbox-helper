<template>
  <div class="item__header" @click="headerEmit">
    <div class="item__header__left">
      <div class="item__header__arrow">{{isOpened ? 'V' : '>>' }}</div>
      <div class="item__header__color" :style="color">&nbsp;</div>
      <div class="item__header__title">{{name}}</div>
    </div>
    <div class="right">
      <ConstuctorActions />
    </div>
  </div>
</template>

<script>
import ConstuctorActions from "./ConstuctorActions/TheActions";
export default {
  name: "ItemHeader",

  components: {
    ConstuctorActions
  },

  props: {
    color: {
      type: Object
    },
    name: {
      type: String,
      required: true
    },
    isOpened: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    headerEmit() {
      this.$emit("openHeader");
    }
  }
};
</script>

<style>
.item__header {
  display: flex;
  cursor: pointer;
  line-height: 1em;
  justify-content: space-between;
}

.item__header__color {
  width: 1em;
  height: 1em;
}

.item__header__arrow {
  widows: 1.2em;
  color: aqua;
}

.item__header__left {
  display: flex;
  align-items: center;
}

.item__header__left > * + * {
  margin-left: 0.3em;
}
</style>
