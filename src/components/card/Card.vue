<template lang="html">
  <div class="board-card mb-2">
    <div
      :style="{ background: card.color }"
      class="title d-flex align-items-center justify-content-between"
    >
      <h4>{{ card.title }}</h4>
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
      <div class="d-flex justify-content-between align-items-center bottom">
        <div class="deadline p-1 d-flex align-items-center" title="Дедлайн">
          <i class="fa-solid fa-clock"></i>
          <p>{{ card.deadline }}</p>
        </div>
        <div class="options d-flex">
          <i @click="openModalUpdate" class="fa-solid fa-gear"></i>
        </div>
      </div>
    </div>
    <update-card
      :updateBoards="updateBoards"
      :card="card"
      :columnId="columnId"
      :cardId="cardId"
      ref="updateCard"
      @click="log(card)"
    />
  </div>
</template>
<script lang="ts">
import { Card } from "@/types";
import { PropType } from "@vue/runtime-core";
import UpdateCard from "./UpdateCard.vue";
export default {
  name: "card-component",
  components: {
    UpdateCard,
  },
  props: {
    cardId: {
      type: Number,
      default: () => 0,
    },
    columnId: {
      type: Number,
      default: () => 0,
    },
    updateBoards: {
      type: Function,
      default: (): void => {
        return;
      },
    },
    card: {
      type: Object as PropType<Card>,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    openModalUpdate(): void {
      this.$refs.updateCard.$refs.modal.show = true;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/styles/sizes";
@import "../../assets/styles/colors";

.board-card {
  background-color: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  -moz-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  width: 100%;
}

.board-card .title {
  border-radius: 10px 10px 0 0;
  padding: 1vh;
}

.board-card .title h4 {
  font-size: $title-3;
  margin-right: 5vh !important;
}

.board-card .date {
  background-color: $main;
}

.board-card .date,
.board-card .deadline {
  font-size: $small-text;
  border-radius: 10px;
  color: #fff;
}

.board-card .deadline {
  background-color: $danger;
}

.board-card .deadline i {
  margin-right: 1vh;
  font-size: $text;
}
.board-card .bottom {
  width: 100%;
}
.board-card .options i {
  font-size: $title-2;
  color: $main;
  cursor: pointer;
}

.board-card .options i:hover {
  animation: options-rotate 4s linear infinite;
}

@keyframes options-rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
