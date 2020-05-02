<template>
  <div>
    <PreviewContent :container="main" />
  </div>
</template>

<script>
import PreviewContent from "./PreviewContent";
import { mapState } from "vuex";

import {INITIAL_CHILD} from '@/constants'

export default {
  name: "Preview",

  components: {
    PreviewContent
  },

  computed: mapState({
    main(state) {
      return state.childs[INITIAL_CHILD];
    }
  })
};
</script>

<style>
</style>
