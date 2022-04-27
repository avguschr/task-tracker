<template lang="html">
  <div v-if="showMenu" :class="animation" class="menu pt-2 position-absolute">
    <div
      class="menu-title container d-flex justify-content-between align-items-center mb-2"
    >
      <h3>Доски</h3>
      <i @click="closeMenu" class="fa-solid fa-xmark"></i>
    </div>
    <div>
      <div @click="openModal" class="create-board mb-4 container">
        <i class="fa-solid fa-plus mr-3 d-inline"></i>
        <p class="d-inline">Создать доску</p>
      </div>
      <ul>
        <li
          @click="switchBoards(index)"
          class="mb-2 container pb-1 pt-1"
          v-for="(board, index) in menuItems"
          :key="index"
          :class="[board.active ? 'active' : null]"
        >
          {{ board.title }}
        </li>
      </ul>
    </div>
    <create-board ref="createBoard" />
  </div>
</template>
<script lang="ts">
// import data from "../data";
import { Board } from "../types";
import CreateBoard from "./CreateBoard.vue";

export default {
  name: "boards-menu",
  components: {
    CreateBoard,
  },
  props: {
    switchBoards: {
      type: Function,
      default: (): void => {
        () => {
          return;
        };
      },
    },
  },
  data(): {
    showMenu: boolean;
    menuItems: Board[];
    animation: string;
    active: boolean;
  } {
    return {
      showMenu: false,
      menuItems: JSON.parse(localStorage.getItem("boards") as string),
      animation: "forward",
      active: false,
    };
  },
  methods: {
    closeMenu(): void {
      this.animation = "back";
      setTimeout(() => {
        this.showMenu = false;
      }, 1000);
    },
    openModal(): void {
      this.$refs.createBoard.$refs.modal.show = true;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../public/styles/sizes";
@import "../../public/styles/colors";
.menu {
  width: 30%;
  height: 100vh;
  background-color: white;
  border-radius: 0 20px 20px 0;
  -webkit-box-shadow: 9px 0px 25px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 9px 0px 25px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 9px 0px 25px 0px rgba(34, 60, 80, 0.2);
  z-index: 99;
}

.menu .menu-title i {
  cursor: pointer;
  color: $liberty;
}

.menu .menu-title {
  font-size: $title-1;
}

.menu .menu-title,
.menu .menu-title i:hover {
  color: $deep-koamaru;
}

.menu .create-board i {
  margin-right: 1vh;
}

.back {
  animation: menu-animation-back 1s ease;
}

.forward {
  animation: menu-animation 1s ease forwards;
}

.create-board {
  cursor: pointer;
  color: $liberty;
}

.create-board:hover i,
.create-board:hover p {
  color: $deep-koamaru;
}

.active {
  background: $liberty;
  color: #fff;
}

.menu ul {
  padding: 0;
  list-style: none;
}

@keyframes menu-animation {
  0% {
    left: -50%;
  }
  100% {
    left: 0;
  }
}

@keyframes menu-animation-back {
  0% {
    left: 0;
  }
  100% {
    left: -50%;
  }
}
</style>
