<template>
  <div>
    <boards-menu :switchBoards="switchBoards" ref="switchBoards" />
    <options-menu ref="optionsMenu" />
    <Nav
      :openSwitchBoards="openSwitchBoards"
      :openOptionsMenu="openOptionsMenu"
    />
    <boards />
  </div>
</template>

<script lang="ts">
import Boards from "./views/Boards.vue";
import BoardsMenu from "./components/BoardsMenu.vue";
import OptionsMenu from "./components/OptionsMenu.vue";
import Nav from "./components/Nav.vue";
import { Board } from "./types";
import { mainBoard } from "./mainBoard";
import boards from "./data";

export default {
  components: {
    Boards,
    BoardsMenu,
    OptionsMenu,
    Nav,
  },
  methods: {
    openSwitchBoards(): void {
      this.$refs.optionsMenu.showMenu = false;
      this.$refs.switchBoards.showMenu = true;
      this.$refs.switchBoards.animation = "forward";
    },
    openOptionsMenu(): void {
      this.$refs.switchBoards.showMenu = false;
      this.$refs.optionsMenu.showMenu = true;
      this.$refs.optionsMenu.animation = "forward";
    },
    switchBoards(id: number): void {
      console.log(boards);
      boards.filter((board: Board) => board.active === true)[0].active = false;
      boards[id].active = true;
      localStorage.boards = JSON.stringify(boards);
    },
    addLocalStorage() {
      let boards: Board[] = [];
      boards.push(mainBoard);
      localStorage.setItem("boards", JSON.stringify(boards));
    },
    openModal(): void {
      this.$refs.createBoard.show = true;
    },
  },
  created() {
    if (!localStorage.getItem("boards")) {
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

  input,
  textarea {
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
  input:focus,
  textarea:active,
  textarea:focus {
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
