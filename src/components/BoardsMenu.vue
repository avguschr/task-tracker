<template lang="html">
  <div v-if="showMenu" class="menu-container">
    <div :class="animation" class="menu pt-2 position-absolute">
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
            v-for="(board, index) in boards"
            :key="index"
            :class="[board.active ? 'active' : null]"
          >
            {{ board.title }}
          </li>
        </ul>
      </div>
      <create-board :updateBoards="updateBoards" ref="createBoard" />
    </div>
  </div>
</template>
<script lang="ts">
import CreateBoard from "./board/CreateBoard.vue";

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
    boards: {
      type: Array,
    },
    updateBoards: Function,
  },
  data(): {
    showMenu: boolean;
    animation: string;
    active: boolean;
  } {
    return {
      showMenu: false,
      animation: "forward",
      active: false,
    };
  },
  methods: {
    closeMenu(): void {
      this.animation = "back";
      setTimeout(() => {
        this.showMenu = false;
      }, 500);
    },
    openModal(): void {
      this.$refs.createBoard.$refs.modal.show = true;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/styles/sizes";
@import "../assets/styles/colors";
.menu-container {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.24);
  left: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
.menu {
  width: 30%;
  height: 100vh;
  background-color: white;
  border-radius: 0 20px 20px 0;
  -webkit-box-shadow: 9px 0px 25px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 9px 0px 25px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 9px 0px 25px 0px rgba(34, 60, 80, 0.2);
  z-index: 999;
}

.menu .menu-title i {
  cursor: pointer;
  color: $main;
}

.menu .menu-title {
  font-size: $title-1;
}

.menu .menu-title,
.menu .menu-title i:hover {
  color: $secondary;
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
  color: $main;
}

.create-board:hover i,
.create-board:hover p {
  color: $secondary;
}

.active {
  background: $main;
  color: #fff;
}

.menu ul {
  padding: 0;
  list-style: none;
}

.menu ul li {
  cursor: pointer;
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
