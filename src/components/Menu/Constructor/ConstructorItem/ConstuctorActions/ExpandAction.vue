<template>
  <ActionButton type="expand" title="Expand" @actionClicked="onClickAction" />
</template>

<script>
import ActionButton from "./ActionButton";
export default {
  name: "ExpandAction",

  components: {
    ActionButton
  },

  methods: {
    onClickAction(payload) {
      console.log("onClickAction", payload);
    }
  }
};
</script>

<style>
</style>