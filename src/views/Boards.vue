<template lang="html">
  <div class="container pt-4">
    <div
      class="d-flex justify-content-between row row-cols-1 row-cols-sm-1 row-cols-md-3 position-relative"
    >
      <board class="col" title="Планируется" />
      <board class="col" title="В работе" />
      <board class="col" title="Выполнено" />
    </div>
  </div>
</template>
<script lang="ts">
import Board from "../components/Board.vue";
export default {
  name: "boards-component",
  components: {
    Board,
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 4vh;
}
</style>
