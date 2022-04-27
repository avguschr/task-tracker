<template lang="html">
  <div class="mb-2">
    <create-card ref="createCard" :id="id" />
    <div class="column">
      <div class="column-title d-flex justify-content-between p-2">
        {{ board.title }}
        <div>
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>
      <div
        class="column-content d-flex flex-column justify-content-between align-items-start p-2"
      >
        <div class="cards">
          <Card
            :card="card"
            v-for="(card, index) in board.cards"
            :key="index"
          />
        </div>
        <button @click="openModal" class="text-start">
          Добавить карточку...
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from "@vue/runtime-core";
import Card from "./Card.vue";
import { Board, Column } from "@/types";
import CreateCard from "./CreateCard.vue";
export default {
  name: "board-component",
  components: {
    Card,
    CreateCard,
  },
  props: {
    board: {
      type: Object as PropType<Column>,
      default: () => ({
        title: "Карточка",
        cards: [],
      }),
    },
    id: {
      type: Number,
      default: 0,
    },
    data: {
      type: Array as PropType<Board[]>,
      default: () => [],
    },
  },
  methods: {
    openModal() {
      this.$refs.createCard.$refs.modal.show = true;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../public/styles/sizes";
.column {
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  -moz-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
}

.column .column-title {
  color: #fff;
  text-align: center;
  font-size: $title-2;
  background-color: #4257a6;
  border-radius: 10px 10px 0 0;
}

.column .column-content button {
  background: none;
  color: #a1ae90;
  border: none;
  outline: inherit;
  transition: color ease-in-out 1s;
}

.column .column-content button:hover {
  color: #272d6b;
}

.column .column-content .cards {
  width: 100%;
}
</style>
