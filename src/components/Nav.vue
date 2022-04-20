<template lang="html">
  <div class="nav d-flex align-items-center justify-content-between">
    <div @click="openSwitchBoards" class="d-flex align-items-center item p-2">
      <i class="fa-solid fa-chalkboard"></i>
      <p>Доски</p>
    </div>
    <div>
      <p class="text-center title">Task Tracker</p>
    </div>
    <div class="d-flex align-items-center item p-2">
      <i class="fa-solid fa-bars"></i>
      <p>Меню</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "nav-component",
  props: {
    openSwitchBoards: Function,
  },
};
</script>
<style scoped lang="css">
.nav {
  padding: 1vh;
  width: 100%;
  background: #4257a6;
}

.nav i {
  margin-right: 10px;
}

.nav i,
.nav p {
  color: white;
}

.nav .item {
  background-color: rgba(255, 255, 255, 0.356);
  border-radius: 10px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}

.nav .title {
  font-family: "Dancing Script", cursive;
  color: #fff;
  font-size: 3vh;
}

.nav .item:hover {
  background-color: rgba(39, 45, 107, 0.356);
}
</style>
