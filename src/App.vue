<template>
  <div id="app">
    <Preview />
    <Menu />
    <Hambureger />
    <Modal />
  </div>
</template>

<script>
import Menu from "@/components/Menu/TheMenu";
import Hambureger from "@/components/TheHamburger";
import Preview from "@/components/Preview/ThePreview";
import Modal from "@/components/Modal/TheModal";

export default {
  name: "App",
  components: {
    Menu,
    Hambureger,
    Preview,
    Modal
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
}
</style>
