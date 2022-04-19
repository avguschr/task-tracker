<template lang="html">
  <div v-if="showMenu" class="menu pt-2 position-absolute">
    <div
      class="container d-flex justify-content-between align-items-center mb-2"
    >
      <h3>Доски</h3>
      <i @click="closeMenu" class="fa-solid fa-xmark"></i>
    </div>
    <div class="container">
      <ul>
        <li v-for="(desk, index) in menuItems" :key="index">
          {{ desk.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import data from "../data";

export default {
  name: "menu-component",
  data(): { showMenu: boolean; menuItems: any[] } {
    return {
      showMenu: true,
      menuItems: data,
    };
  },
  methods: {
    closeMenu(): void {
      this.showMenu = false;
      console.log(data);
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
}

.menu i {
  font-size: 35px;
}

.menu ul {
  padding: 0;
}
.menu ul li {
  list-style: none;
}
</style>
