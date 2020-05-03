<template>
  <div class="item__actions">
    <ExpandAction :openModal="openModal"/>
    <ModifyAction :openModal="openModal"/>
    <DeleteAction />
  </div>
</template>

<script>
import ExpandAction from "./ExpandAction";
import ModifyAction from "./ModifyAction";
import DeleteAction from "./DeleteAction";

export default {
  name: "ItemActions",

  components: {
    ExpandAction,
    ModifyAction,
    DeleteAction
  },

  methods: {
    openModal(type) {
      this.$store.commit("openModal", type);
    }
  }
};
</script>

<style>
.item__actions > .action__button + .action__button {
  margin-left: 0.4em;
}
</style>
