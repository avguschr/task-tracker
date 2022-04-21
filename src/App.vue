<template>
  <div id="app">
    <BoardsMenu :switchBoards="switchBoards" ref="switchBoards" />
    <Nav :openSwitchBoards="openSwitchBoards" />
    <boards :boardsId="boardsId" :data="data" />
  </div>
</template>

<script lang="ts">
import Boards from "./views/Boards.vue";
import BoardsMenu from "./components/BoardsMenu.vue";
import Nav from "./components/Nav.vue";
import { BoardGroup } from "./data";
import { mainBoard } from "./mainBoard";

export default {
  components: {
    Boards,
    BoardsMenu,
    Nav,
  },
  data(): { boardsId: number; data: BoardGroup[] } {
    return {
      boardsId: 0,
      data: JSON.parse(localStorage.getItem("data") as string) || [],
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
    addLocalStorage() {
      let data: BoardGroup[] = [];
      data.push(mainBoard);
      localStorage.setItem("data", JSON.stringify(data));
    },
  },
  created() {
    if (!localStorage.getItem("data")) {
      this.addLocalStorage();
    }
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
