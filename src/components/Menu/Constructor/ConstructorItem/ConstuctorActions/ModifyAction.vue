<template>
  <ActionButton :type="type" title="Modify" @actionClicked="onClickAction" />
</template>

<script>
import ActionButton from "./ActionButton";
import { MODIFY_ACTION } from "@/constants";

export default {
  name: "ModifyAction",

  components: {
    ActionButton
  },

  data() {
    return {
      type: MODIFY_ACTION
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
