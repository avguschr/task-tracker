<template lang="html">
  <div>
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
  background: wheat;
  min-height: 25vh;
  border-radius: 10px;
}
</style>
