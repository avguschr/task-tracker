<template>
  <div
    id="page"
    :class="getActiveBackground.image ? 'pattern' : null"
    :style="
      getActiveBackground.color
        ? { background: getActiveBackground.color }
        : null
    "
  >
    <boards-menu
      :switchBoards="switchBoards"
      :boards="boards"
      :updateBoards="updateBoards"
      ref="switchBoards"
    />
    <options-menu :updateBackgrounds="updateBackgrounds" ref="optionsMenu" />
    <Nav
      :openSwitchBoards="openSwitchBoards"
      :openOptionsMenu="openOptionsMenu"
    />
    <active-board
      :openSwitchBoards="openSwitchBoards"
      :boards="boards"
      :activeBoardId="boards.findIndex(
        (board: Board) => board.active
      )"
      :updateBoards="updateBoards"
    />
  </div>
</template>

<script lang="ts">
import ActiveBoard from "../components/board/Board.vue";
import BoardsMenu from "../components/BoardsMenu.vue";
import OptionsMenu from "../components/OptionsMenu.vue";
import Nav from "../components/Nav.vue";
import { Board, Background } from "../types";
import { mainBoard, backgrounds } from "../mainBoard";

type PatternBg = {
  backgroundImage: string;
  backgroundRepeat: string;
  backgroundSize: string;
};

export default {
  name: "page-component",
  components: {
    ActiveBoard,
    BoardsMenu,
    OptionsMenu,
    Nav,
  },
  data(): {
    boards: Board[];
    backgrounds: Background;
    patternBg: PatternBg;
  } {
    return {
      boards: JSON.parse(localStorage.getItem("boards") as string),
      backgrounds: JSON.parse(localStorage.getItem("backgrounds") as string),
      patternBg: {
        backgroundImage: "url(../assets/backgrounds/pattern1.svg)",
        backgroundRepeat: "repeat",
        backgroundSize: "100px",
      },
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
    addBoards(): void {
      let boards: Board[] = [];
      boards.push(mainBoard);
      localStorage.setItem("boards", JSON.stringify(boards));
    },
    addBackgrounds(): void {
      localStorage.setItem("backgrounds", JSON.stringify(backgrounds));
    },
    openModal(): void {
      this.$refs.createBoard.show = true;
    },
    switchBoards(id: number): void {
      this.boards.find((board: Board) => board.active === true).active = false;
      this.boards[id].active = true;
      localStorage.boards = JSON.stringify(this.boards);
      this.$refs.switchBoards.closeMenu();
      this.updateBoards();
    },
    updateBackgrounds(): void {
      this.backgrounds = JSON.parse(
        localStorage.getItem("backgrounds") as string
      );
    },
  },
  created() {
    if (!localStorage.getItem("boards")) {
      this.addBoards();
    }
    if (!localStorage.getItem("backgrounds")) {
      this.addBackgrounds();
    }
  },
  computed: {
    getActiveBackground(): Background {
      return this.backgrounds.find(
        (background: Background) => background.active
      );
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/sizes";
@import "../assets/styles/colors";
#app {
  height: 100vh;
  background-size: cover;
  font-family: "Nunito", sans-serif;
  scrollbar-width: thin;

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
    border: solid $light 1.5px;
    background-color: $light;
    margin-bottom: 1rem;
    outline: none;
  }
  input:active,
  input:focus,
  textarea:active,
  textarea:focus {
    background-color: #fff;
    border: solid $secondary 1.5px;
  }
  .button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: $main;
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    color: #fff;
    transition: background ease 1s;
  }

  .button-warning {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: $danger;
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    color: #fff;
    transition: background ease 1s;
  }

  .button::before {
    pointer-events: none;
  }
  .button:hover {
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(66, 87, 166, 1) 0%,
      rgba(112, 134, 216, 1) 41%,
      rgba(147, 167, 245, 1) 100%
    );
  }
  .button-warning:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 102, 102, 1) 0%,
      rgba(255, 131, 131, 1) 41%,
      rgba(255, 193, 193, 1) 100%
    );
  }
  #page {
    height: 100vh;
  }
  .pattern {
    background-image: url(../assets/backgrounds/pattern1.svg);
    background-repeat: repeat;
    background-size: 15vh;
  }
  ::-webkit-scrollbar {
    width: 2vh;
    height: 2vh;
  }

  ::-webkit-scrollbar-track {
    background-color: $secondary-light;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: $additional;
    border-radius: 100px;
  }
  @keyframes icons-rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>
