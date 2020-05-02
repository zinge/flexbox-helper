<template>
  <ActionButton type="del" title="Delete" @actionClicked="onClickAction" />
</template>

<script>
import ActionButton from "./ActionButton";
export default {
  name: "DeleteAction",

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