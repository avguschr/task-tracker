<template lang="html">
  <div class="">
    <h2>{{ title }}</h2>
    <div class="board"></div>
  </div>
</template>
<script lang="ts">
export default {
  name: "board-component",
  props: {
    title: String,
  },
};
</script>
<style scoped lang="css">
.board {
  background: #fff;
  min-height: 90vh;
  border-radius: 10px;
}
</style>
