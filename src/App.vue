<template>
  <div id="app">
    <Menu ref="switchBoards" />
    <Nav :openSwitchBoards="openSwitchBoards" />
    <boards />
  </div>
</template>

<script lang="ts">
import Boards from "./views/Boards.vue";
import Menu from "./components/Menu.vue";
import Nav from "./components/Nav.vue";

export default {
  components: {
    Boards,
    Menu,
    Nav,
  },
  methods: {
    openSwitchBoards(): void {
      this.$refs.switchBoards.showMenu = true;
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 200px;
  height: 453px;
  background: red;
  background-size: cover;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
}

#app h2 {
  color: #fff;
  text-align: center;
  font-size: 24px;
}
</style>
