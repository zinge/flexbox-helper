<template>
  <div class="action__button" :class="classModifier"> {{title}} </div>
</template>
<script>
export default {
  name: 'ActionButton',

  props: {
    action: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    }
  },

  computed: {
    classModifier (modifier) {
      return `action__button--${this.action}`
    }
  }
}
</script>
<style>
  .action__button {
    border: 1px solid;
    border-radius: 3px;
    margin: 5px;
    padding: 0 5px;
    display: flex;
    justify-content: center;
  }

  .action__button--add {
    flex-basis: 80%;
    background: lightseagreen;
  }

  .action__button--edit {
    flex-basis: 20%;
    background: steelblue;
  }

  .action__button--del {
    flex-basis: 10%;
    background: crimson;
  }
</style>
