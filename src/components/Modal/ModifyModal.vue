<template>
  <div class="modify__modal">
    <ModalTemplate @close="closeModal">
      <h3 slot="header">Modify modal</h3>
    </ModalTemplate>
  </div>
</template>

<script>
import ModalTemplate from "./ModalTemplate";

export default {
  name: "ModifyModal",

  components: {
    ModalTemplate
  },

  props: {
    closeModal: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
</style>
