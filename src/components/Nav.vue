<template lang="html">
  <div class="nav d-flex align-items-center justify-content-between">
    <div
      @click="openSwitchBoards"
      class="d-flex align-items-center nav-item p-2"
    >
      <i class="fa-solid fa-chalkboard"></i>
      <p>Доски</p>
    </div>
    <div>
      <p class="text-center logo">Task Tracker</p>
    </div>
    <div
      @click="openOptionsMenu"
      class="d-flex align-items-center nav-item p-2"
    >
      <i class="fa-solid fa-bars"></i>
      <p>Меню</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "nav-component",
  props: {
    openSwitchBoards: {
      type: Function,
      default: (): void => {
        () => {
          return;
        };
      },
    },
    openOptionsMenu: {
      type: Function,
      default: (): void => {
        () => {
          return;
        };
      },
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/styles/sizes";
@import "../assets/styles/colors";
.nav {
  padding: 1vh;
  width: 100%;
  background: $main;
  color: #fff;
}

.nav i {
  margin-right: 10px;
}

.nav .nav-item {
  background-color: rgba(255, 255, 255, 0.356);
  border-radius: 10px;
  font-size: $text;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}

.nav .logo {
  font-family: "Dancing Script", cursive;
  font-size: 3vh;
}

.nav .nav-item:hover {
  background-color: $secondary-translucent;
}
</style>
