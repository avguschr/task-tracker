<template lang="html">
  <div class="board-card mb-2">
    <div class="title d-flex align-items-center justify-content-between">
      {{ card.title }}
      <div class="date p-1" title="Создано">
        <p>{{ card.date }}</p>
      </div>
    </div>
    <div
      class="content d-flex justify-content-between align-items-start flex-column p-3"
    >
      <div class="mb-3">
        <div>
          <p>{{ card.desc }}</p>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="deadline p-1 d-flex align-items-center" title="Дедлайн">
          <i class="fa-solid fa-clock"></i>
          <p>{{ card.deadline }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Card } from "@/types";
import { PropType } from "@vue/runtime-core";
export default {
  name: "card-component",
  props: {
    card: {
      type: Object as PropType<Card>,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../public/styles/sizes";
@import "../../public/styles/colors";

.board-card {
  background-color: $gallery;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  -moz-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
}

.board-card .title {
  background: $locust;
  border-radius: 10px 10px 0 0;
  padding: 1vh;
  font-size: $title-3;
}

.board-card .date {
  background-color: $liberty;
}

.board-card .date,
.board-card .deadline {
  font-size: $small-text;
  border-radius: 10px;
  color: #fff;
}

.board-card .deadline {
  background-color: $pastel-red;
}

.board-card .deadline i {
  margin-right: 1vh;
  font-size: $text;
}
</style>
