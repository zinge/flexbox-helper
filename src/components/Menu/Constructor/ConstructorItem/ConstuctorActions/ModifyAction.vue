<template>
  <ActionButton type="modify" title="Modify" @actionClicked="onClickAction" />
</template>

<script>
import ActionButton from "./ActionButton";
export default {
  name: "ModifyAction",

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
