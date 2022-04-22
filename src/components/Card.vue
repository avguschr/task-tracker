<template lang="html">
  <div class="board-card mb-2">
    <div class="title">{{ card.title }}</div>
    <div
      class="content d-flex justify-content-between align-items-start flex-column p-3"
    >
      <div class="mb-3">
        <div>
          <p>{{ card.desc }}</p>
        </div>
      </div>
      <div class="bottom d-flex justify-content-between">
        <div class="deadline p-1">
          <p>{{ card.deadline }}</p>
        </div>
        <div class="date p-1">
          <p>{{ card.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "card-component",
  props: {
    card: Object,
  },
};
</script>
<style scoped lang="css">
.board-card {
  background-color: #f1f0ee;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  -moz-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
}

.board-card .title {
  background: #a1ae90;
  border-radius: 10px 10px 0 0;
  padding: 1vh;
}

.board-card .date {
  background-color: #4257a6;
}

.board-card .deadline {
  background-color: #ff6666;
}

.bottom div {
  border-radius: 10px;
  color: #fff;
}

.board-card .bottom {
  width: 100%;
  font-size: 1.3vh;
}
</style>
