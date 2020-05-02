<template>
  <div class="menu" :class="{'is-open': isActive}">
    <span class="menu-header">Constructor</span>
    <Constructor/>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Constructor from './Constructor/TheConstructor'

export default {
  name: "Menu",

  components: {
    Constructor
  },

  computed: mapState({
    isActive(state) {
      return state.menuOpened;
    }
  })
};
</script>

<style>
.menu {
  background-color: lightslategray;
  display: block;
  position: fixed;
  top: 0;
  right: -100%;
  width: 50vw;
  visibility: hidden;
  padding: 0 16px 16px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.is-open {
  visibility: visible;
  right: 0;
}

.menu-header {
  font-size: 24px;
  font-weight: bold;
  margin: 16px auto;
}
</style>
