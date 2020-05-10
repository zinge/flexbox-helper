<template>
  <div class="item__actions">
    <ExpandAction :execAction="execAction" />
    <ModifyAction :execAction="execAction" />
    <DeleteAction v-if="!root" :execAction="execAction" />
  </div>
</template>

<script>
import ExpandAction from "./ExpandAction";
import ModifyAction from "./ModifyAction";
import DeleteAction from "./DeleteAction";

import { DELETE_ACTION } from "@/constants";

export default {
  name: "ItemActions",

  components: {
    ExpandAction,
    ModifyAction,
    DeleteAction
  },

  props: {
    setModalPath: {
      type: Function,
      required: true
    },

    root: {
      type: Boolean,
      required: true
    },

    setShowDelete: {
      type: Function,
      required: true
    }
  },

  methods: {
    execAction(type) {
      if (type === DELETE_ACTION) {
        this.setShowDelete(true);
        return
      }

      this.setModalPath();
      this.$store.commit("setModalName", type);
    }
  }
};
</script>

<style>
.item__actions > .action__button + .action__button {
  margin-left: 0.4em;
}
</style>
