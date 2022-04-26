<template lang="html">
  <div v-if="showMenu" :class="animation" class="menu pt-2 position-absolute">
    <div
      class="title container d-flex justify-content-between align-items-center mb-1"
    >
      <h3>Меню</h3>
      <i @click="closeMenu" class="fa-solid fa-xmark"></i>
    </div>
    <div></div>
  </div>
</template>
<script lang="ts">
export default {
  name: "boards-menu",
  props: {
    switchBoards: Function,
  },
  data(): {
    showMenu: boolean;
    animation: string;
  } {
    return {
      showMenu: false,
      animation: "forward",
    };
  },
  methods: {
    closeMenu(): void {
      this.animation = "back";
      setTimeout(() => {
        this.showMenu = false;
      }, 1000);
    },
  },
};
</script>
<style scoped lang="css">
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

.menu .title i {
  font-size: 35px;
  cursor: pointer;
}

.menu ul {
  padding: 0;
}
.menu ul li {
  list-style: none;
}

.menu h3 {
  color: rgba(39, 45, 107);
}

.menu i {
  margin-right: 1vh;
  color: #4257a6;
}

.menu i:hover {
  color: rgba(39, 45, 107);
}

.back {
  animation: menu-animation-back 1s ease;
}

.forward {
  animation: menu-animation 1s ease forwards;
}

.create-board {
  cursor: pointer;
  color: #4257a6;
}

.create-board:hover i,
.create-board:hover p {
  color: rgba(39, 45, 107);
}

.active {
  background: red;
  background: #4257a6;
  color: #fff;
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
