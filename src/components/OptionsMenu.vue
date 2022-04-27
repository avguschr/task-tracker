<template lang="html">
  <div v-if="showMenu" :class="animation" class="menu pt-2 position-absolute">
    <div
      class="menu-title container d-flex justify-content-between align-items-center mb-1"
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

.menu .title i {
  font-size: 35px;
  cursor: pointer;
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
</style>
