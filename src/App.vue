<template>
  <div>
    <BoardsMenu :switchBoards="switchBoards" ref="switchBoards" />
    <Nav :openSwitchBoards="openSwitchBoards" />
    <boards :boardsId="boardsId" :data="data" />
    <create-board ref="createBoard" />
  </div>
</template>

<script lang="ts">
import Boards from "./views/Boards.vue";
import BoardsMenu from "./components/BoardsMenu.vue";
import Nav from "./components/Nav.vue";
import CreateBoard from "./components/CreateBoard.vue";
import { BoardGroup } from "./data";
import { mainBoard } from "./mainBoard";

export default {
  components: {
    Boards,
    BoardsMenu,
    Nav,
    CreateBoard,
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
    },
    switchBoards(id: number): void {
      this.boardsId = id;
    },
    addLocalStorage() {
      let data: BoardGroup[] = [];
      data.push(mainBoard);
      localStorage.setItem("data", JSON.stringify(data));
    },
    openModal(): void {
      this.$refs.createBoard.show = true;
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

  input {
    width: 100%;
    border-radius: 10px;
    padding: 8px 16px;
    color: black;
    border: none;
    background-color: #f1f0ee;
    border: solid #f1f0ee 1.5px;
    margin-bottom: 1rem;
    outline: none;
  }
  input:active,
  input:focus {
    background-color: #fff;
    border: solid #272d6b 1.5px;
  }
  .button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: #4257a6;
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    color: #fff;
    transition: box-shadow linear 0.1s;
  }
}
</style>
