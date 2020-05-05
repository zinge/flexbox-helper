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
