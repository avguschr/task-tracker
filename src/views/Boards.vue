<template lang="html">
  <div class="container pt-5">
    <div
      class="d-flex align-items-stretch justify-content-between row row-cols-1 row-cols-sm-1 row-cols-md-3"
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

<style scoped lang="scss"></style>
