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
          <h5 class="mb-2 text-center">Фон</h5>
          <ul class="d-flex">
            <li
              @click="changeBackground(index)"
              v-for="(background, index) in backgrounds"
              :key="index"
              class="background-item col text-center"
              :class="[background.active ? 'menu-item-active' : 'inactive']"
            >
              {{ background.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Background } from "@/types";
export default {
  name: "boards-menu",
  props: {
    updateBackgrounds: {
      type: Function,
      default: () => {
        return;
      },
    },
  },
  data(): {
    showMenu: boolean;
    animation: string;
    backgrounds: Background;
  } {
    return {
      showMenu: false,
      animation: "forward",
      backgrounds: JSON.parse(localStorage.getItem("backgrounds") as string),
    };
  },
  methods: {
    closeMenu(): void {
      this.animation = "back";
      setTimeout(() => {
        this.showMenu = false;
      }, 300);
    },
    changeBackground(id: number): void {
      this.backgrounds.find(
        (background: Background) => background.active
      ).active = false;
      this.backgrounds[id].active = true;
      localStorage.backgrounds = JSON.stringify(this.backgrounds);
      this.updateBackgrounds();
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
  animation: menu-animation-back 0.5s ease;
}

.forward {
  animation: menu-animation 0.5s ease forwards;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu ul li {
  cursor: pointer;
  border-radius: 100px;
  padding: 0;
  transition: background ease 1s;
}

.inactive:hover {
  background: $main-translucent;
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
  background-clip: content-box;
}

.menu-item-active {
  background: $main;
  color: #fff;
}
</style>
