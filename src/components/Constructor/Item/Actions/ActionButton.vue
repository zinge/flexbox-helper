<template>
  <div class="action__button" :class="classModifier" @click="actionEmit"> {{title}} </div>
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
    classModifier () {
      return `action__button--${this.action}`
    }
  },

  methods: {
    actionEmit () {
      this.$emit('actionSelected', {
        action: this.action
      })
    }
  }
}
</script>
<style>
  .action__button {
    border: 1px solid;
    margin: 5px;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    cursor: pointer;
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
