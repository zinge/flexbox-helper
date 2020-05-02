<template>
  <div class="item__header" @click="headerEmit">
    <div class="item__header__arrow">{{isOpened ? 'V' : '>>' }}</div>
    <div class="item__header__color" :style="color">&nbsp;</div>
    <div class="item__header__title">{{name}}</div>
  </div>
</template>
<script>
export default {
  name: "ItemHeader",
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
  align-items: center;
}

.item__header__color {
  width: 1em;
  height: 1em;
}

.item__header__arrow {
  color: aqua;
}

.item__header > * + * {
  margin-left: 0.3em;
}
</style>