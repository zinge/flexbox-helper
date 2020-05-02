<template>
  <div class="item__actions">
    <ExpandAction />
    <ModifyAction />
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
  }
};
</script>

<style>
.item__actions > .action__button + .action__button {
  margin-left: 0.4em;
}
</style>