<template lang="html">
  <div class="menu-container" v-if="showMenu">
    <div :class="animation" class="menu pt-2 position-absolute">
      <div
        class="menu-title container d-flex justify-content-between align-items-center mb-1"
      >
        <h3>Меню</h3>
        <i @click="closeMenu" class="fa-solid fa-xmark"></i>
      </div>
      <div class="container">
        <div>
          <h5 class="mb-1">Фон</h5>
          <div
            class="d-flex flex-row row row-cols-1 row-cols-sm-1 row-cols-md-3 row-col-lg-3"
          >
            <div class="background-item col"></div>
            <div class="background-item col"></div>
            <div class="background-item col"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "boards-menu",
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
      }, 500);
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
  z-index: 99;
}

.menu .title i {
  font-size: 35px;
  cursor: pointer;
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

.back {
  animation: menu-animation-back 1s ease;
}

.forward {
  animation: menu-animation 1s ease forwards;
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

.background-item {
  background: rgb(0, 255, 13);
  background-clip: content-box;
  height: 10vh;
}
</style>
