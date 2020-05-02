<template>
  <ConstructorItem :container="main" :path="path" />
</template>

<script>
import { mapState } from "vuex";
import ConstructorItem from "./ConstructorItem/TheConstructorItem";

import { INITIAL_CHILD } from "@/constants";

export default {
  name: "Constructor",

  components: {
    ConstructorItem
  },

  computed: mapState({
    main(state) {
      return state.childs[INITIAL_CHILD];
    },

    path(state) {
      return [state.childs[INITIAL_CHILD].hash];
    }
  })
};
</script>

<style>
</style>