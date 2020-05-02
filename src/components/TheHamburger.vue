<template>
  <div class="hamburger hamburger--slider" :class="{'is-active': isActive}" @click="toggleMenu">
    <div class="hamburger-box">
      <div class="hamburger-inner"></div>
    </div>
  </div>
</template>

<script>
import "hamburgers/dist/hamburgers.min.css";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Hamburger",

  computed: mapState({
    isActive(state) {
      return state.menuOpened;
    }
  }),

  methods: mapMutations({
    toggleMenu: "toggleMenu"
  })
};
</script>

<style>
.hamburger {
  position: fixed;
  right: 0;
  top: 0;
  background-color: lightslategray;
}
</style>
