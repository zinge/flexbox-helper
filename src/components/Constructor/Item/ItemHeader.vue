<template>
  <div class="item__header" @click="headerEmit">
    <div class="item__header__arrow">{{isOpened ? 'V' : '>>' }}</div>
    <div class="item__header__color" :style="color">&nbsp;</div>
    <div class="item__header__title">{{name}}</div>
  </div>
</template>
<script>
export default {
  name: 'ItemHeader',

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
    headerEmit () {
      this.$emit('openHeader')
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
