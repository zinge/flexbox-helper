<template>
  <ActionButton :type="type" title="Add Childs" @actionClicked="onClickAction" />
</template>

<script>
import ActionButton from "./ActionButton";
import { EXPAND_ACTION } from "@/constants";

export default {
  name: "ExpandAction",

  components: {
    ActionButton
  },

  data() {
    return {
      type: EXPAND_ACTION
    };
  },

  props: {
    execAction: {
      type: Function,
      required: true
    }
  },

  methods: {
    onClickAction(payload) {
      this.execAction(payload);
    }
  }
};
</script>

<style>
</style>
