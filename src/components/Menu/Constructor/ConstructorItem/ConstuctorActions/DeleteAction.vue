<template>
  <ActionButton :type="type" title="Delete" @actionClicked="onClickAction" />
</template>

<script>
import ActionButton from "./ActionButton";
import { DELETE_ACTION } from "@/constants";

export default {
  name: "DeleteAction",

  components: {
    ActionButton
  },

  data() {
    return {
      type: DELETE_ACTION
    };
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
