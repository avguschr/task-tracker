<template lang="html">
  <div class="container pt-4">
    <div
      class="d-flex flex-row row row-cols-1 row-cols-sm-1 row-cols-md-3 position-relative"
    >
      <board
        v-for="(board, index) in data[boardsId].boards"
        :key="index"
        class="col"
        :board="board"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Board from "../components/Board.vue";
export default {
  name: "boards-component",
  props: {
    boardsId: Number,
    data: Array,
  },
  components: {
    Board,
  },
  mounted() {
    console.log(this.data[0].boards);
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 4vh;
}
</style>
