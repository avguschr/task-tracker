<template lang="html">
  <div class="nav d-flex align-items-center justify-content-between">
    <div @click="openSwitchBoards" class="d-flex align-items-center item p-2">
      <i class="fa-solid fa-clipboard"></i>
      <p>Доски</p>
    </div>
    <div>
      <p class="text-center">Task Tracker</p>
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
  background: grey;
}

.nav i {
  margin-right: 10px;
}

.nav .item {
  background-color: rgba(255, 255, 255, 0.203);
  border-radius: 10px;
  cursor: pointer;
}
</style>
