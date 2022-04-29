<template>
  <div>
    <boards-menu
      :switchBoards="switchBoards"
      :boards="boards"
      :updateBoards="updateBoards"
      ref="switchBoards"
    />
    <options-menu ref="optionsMenu" />
    <Nav
      :openSwitchBoards="openSwitchBoards"
      :openOptionsMenu="openOptionsMenu"
    />
    <boards
      :boards="boards"
      :activeBoardId="boards.findIndex(
        (board: Board) => board.active
      )"
      :updateBoards="updateBoards"
    />
  </div>
</template>

<script lang="ts">
import Boards from "./views/Boards.vue";
import BoardsMenu from "./components/BoardsMenu.vue";
import OptionsMenu from "./components/OptionsMenu.vue";
import Nav from "./components/Nav.vue";
import { Board } from "./types";
import { mainBoard } from "./mainBoard";

export default {
  components: {
    Boards,
    BoardsMenu,
    OptionsMenu,
    Nav,
  },
  data(): { boards: Board[] } {
    return {
      boards: JSON.parse(localStorage.getItem("boards") as string),
    };
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
    updateBoards(): void {
      this.boards = JSON.parse(localStorage.getItem("boards") as string);
    },
    addLocalStorage() {
      let boards: Board[] = [];
      boards.push(mainBoard);
      localStorage.setItem("boards", JSON.stringify(boards));
    },
    openModal(): void {
      this.$refs.createBoard.show = true;
    },
    switchBoards(id: number): void {
      this.boards.find((board: Board) => board.active === true).active = false;
      this.boards[id].active = true;
      localStorage.boards = JSON.stringify(this.boards);
      this.updateBoards();
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
@import "../public/styles/colors";
#app {
  height: 200px;
  height: 453px;
  background: $gainsboro;
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
    background-color: $gallery;
    border: solid $gallery 1.5px;
    margin-bottom: 1rem;
    outline: none;
  }
  input:active,
  input:focus,
  textarea:active,
  textarea:focus {
    background-color: #fff;
    border: solid $deep-koamaru 1.5px;
  }
  .button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: $liberty;
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    color: #fff;
    transition: box-shadow linear 0.1s;
  }

  .button-warning {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: $pastel-red;
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    color: #fff;
    transition: box-shadow linear 0.1s;
  }
}
</style>
