<template>
  <div id="app">
    <a @click="changeBoards">Поменять</a>
    <boards v-if="boards" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
