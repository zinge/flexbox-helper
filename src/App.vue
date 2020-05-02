<template>
  <div id="app">
    <Preview />
    <Menu />
    <Hambureger />
  </div>
</template>

<script>
import Menu from "@/components/Menu/TheMenu";
import Hambureger from "@/components/TheHamburger";
import Preview from "@/components/Preview/ThePreview";

export default {
  name: "App",
  components: {
    Menu,
    Hambureger,
    Preview
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
