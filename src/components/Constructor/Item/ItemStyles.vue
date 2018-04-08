<template>
  <div class="constructor__item__styles">
    <div class="item__styles__list">
      Styles: [
        <span class="item__style" v-for="(item, index) in styles" :key="index">
          {{item}}{{styles.length !== index + 1 ? ', ' : ''}}
        </span>
        ]
    </div>
    <div class="item__styles__add">
      <input class="styles__add__input" type="text" v-model="newStyle">
      <span class="styles__add__plus">+</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemStyles',

  data: () => ({
    newStyle: ''
  }),

  props: {
    styles: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
  .constructor__item__styles {
    border: 1px solid;
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .item__styles__list {
    display: flex;
    flex-basis: 70%;
  }

  .styles__add__input {
    border: 0;
  }

  .styles__add__plus {
    margin: 0 5px;
    padding: 0 5px;
    background: lightseagreen;
  }
</style>
