<template>
  <div class="item__header" @click="emitOpened">
    <div class="item__header__arrow">{{isOpened ? 'V' : '>>' }}</div>
    <div class="item__header__color" :style="itemColor">&nbsp;</div>
    <div class="item__header__title">{{itemName}}</div>
  </div>
</template>
<script>
export default {
  name: 'ItemHeader',

  props: {
    itemColor: {
      type: Object
    },
    itemName: {
      type: String,
      required: true
    },
    isOpened: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    emitOpened () {
      this.$emit('clickHeader')
    }
  }
}
</script>
<style>
  .item__header {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin: 0 5px;
    padding: 0 5px;
  }

  .item__header__arrow {
    display: flex;
    color: aqua;
    flex-basis: 2.5%;
  }

  .item__header__color {
    display: flex;
    flex-basis: 2.5%;
  }

  .item__header__title {
    display: flex;
    flex-basis: 95%;
    padding-left: 1%;
  }
</style>
