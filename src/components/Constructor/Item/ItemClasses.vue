<template>
  <div class="constructor__item__classes">
    <div class="item__classes__list">
      Classes: [
        <span class="item__class" v-for="(item, index) in classes" :key="index">
          {{item}}{{classes.length !== index + 1 ? ', ' : ''}}
        </span>
        ]
    </div>
    <div class="item__classes__add">
        <input class="classes__add__input" type="text" v-model="newClass">
        <span class="classes__add__plus">+</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemClasses',

  data: () => ({
    newClass: ''
  }),

  props: {
    classes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
  .constructor__item__classes {
    border: 1px solid;
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .item__classes__list {
    display: flex;
    flex-basis: 70%;
  }

  .classes__add__input {
    border: 0;
  }

  .classes__add__plus {
    margin: 0 5px;
    padding: 0 5px;
    background: lightseagreen;
  }
</style>
