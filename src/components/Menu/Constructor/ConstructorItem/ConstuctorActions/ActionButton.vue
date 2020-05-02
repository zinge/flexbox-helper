<template>
  <button class="action__button" :class="style" @click="onClick" type="button">{{title}}</button>
</template>

<script>
export default {
  name: "ActionButton",

  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },

  methods: {
    onClick(e) {
      e.stopPropagation();
      this.$emit("actionClicked", this.type);
    }
  },

  computed: {
    style() {
      return "action__button--" + this.type;
    }
  }
};
</script>

<style>
.action__button {
  border: 1px solid;
  padding: 0 0.3em;
  cursor: pointer;
}

.action__button--modify {
  background: steelblue;
}

.action__button--del {
  background: crimson;
}

.action__button--expand {
  background: lightseagreen;
}

.action__button:hover {
  opacity: 0.7;
}
</style>