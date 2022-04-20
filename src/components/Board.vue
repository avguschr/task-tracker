<template lang="html">
  <div>
    <div class="board p-3">
      <h2 class="mb-3">{{ title }}</h2>
      <div></div>
    </div>
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
  height: 80vh;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  -moz-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
}

.board > h2 {
  color: rgba(39, 45, 107);
  text-align: center;
  font-size: 24px;
}
</style>
