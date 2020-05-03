<template>
  <div class="modal">
    <ExpandModal v-if="showExpandModal" :closeModal="closeModal" />
    <ModifyModal v-if="showModifyModal" :closeModal="closeModal" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ExpandModal from "./ExpandModal";
import ModifyModal from "./ModifyModal";

import { MODIFY_ACTION, EXPAND_ACTION } from "@/constants";

export default {
  name: "Modal",

  components: {
    ExpandModal,
    ModifyModal
  },

  computed: mapState({
    showExpandModal(state) {
      return state.showModal === EXPAND_ACTION;
    },

    showModifyModal(state) {
      return state.showModal === MODIFY_ACTION;
    }
  }),

  methods: {
    closeModal() {
      this.$store.commit("closeModal");
    }
  }
};
</script>

<style>
</style>
