<template lang="html">
  <div class="container pt-4">
    <div
      class="d-flex flex-row row row-cols-1 row-cols-sm-1 row-cols-md-3 position-relative"
    >
      <board
        v-for="(board, index) in boards[0].boards"
        :key="index"
        class="col"
        :board="board"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Board from "../components/Board.vue";
import data from "../data";
import { BoardGroup } from "../data";
export default {
  name: "boards-component",
  data(): { boards: BoardGroup[] } {
    return {
      boards: data,
    };
  },
  components: {
    Board,
  },
  mounted() {
    console.log(data[0].boards);
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 4vh;
}
</style>
