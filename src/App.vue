<template>
  <div id="app">
    <BoardsMenu :switchBoards="switchBoards" ref="switchBoards" />
    <Nav :openSwitchBoards="openSwitchBoards" />
    <boards :boardsId="boardsId" />
  </div>
</template>

<script lang="ts">
import Boards from "./views/Boards.vue";
import BoardsMenu from "./components/BoardsMenu.vue";
import Nav from "./components/Nav.vue";

export default {
  components: {
    Boards,
    BoardsMenu,
    Nav,
  },
  data(): { boardsId: number } {
    return {
      boardsId: 0,
    };
  },
  methods: {
    openSwitchBoards(): void {
      this.$refs.switchBoards.showMenu = true;
      this.$refs.switchBoards.animation = "forward";
      console.log(this.$refs.switchBoards.animation);
    },
    switchBoards(id: number): void {
      this.boardsId = id;
      console.log(this.boardsId);
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 200px;
  height: 453px;
  background: #dddcd7;
  background-size: cover;
  height: 100vh;
  font-family: "Dancing Script", cursive;
  font-family: "Nunito", sans-serif;

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
</style>
