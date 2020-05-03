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
    openModal: {
      type: Function,
      required: true
    }
  },

  methods: {
    onClickAction(payload) {
      this.openModal(payload);
    }
  }
};
</script>

<style>
</style>
