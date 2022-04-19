<template>
  <div id="app">
    <a @click="changeBoards">Поменять</a>
    <boards v-if="boards" />
  </div>
</template>

<script lang="ts">
import Boards from "./views/Boards.vue";

export default {
  components: {
    Boards,
  },
  data(): { boards: boolean; myBoards: boolean } {
    return {
      boards: true,
      myBoards: false,
    };
  },
  methods: {
    changeBoards(): void {
      this.boards = !this.boards;
      this.myBoards = !this.myBoards;
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 200px;
  height: 453px;
  background: linear-gradient(
      45deg,
      rgba(103, 0, 31, 0.8),
      rgba(34, 101, 163, 0.5)
    ),
    url(https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
  background-size: cover;

  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app h2 {
  color: #fff;
  text-align: center;
  font-size: 24px;
}
</style>
