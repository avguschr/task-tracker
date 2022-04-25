<template lang="html">
  <div class="mb-2">
    <create-card ref="createCard" :id="id" />
    <div class="board">
      <div class="title d-flex justify-content-between p-2">
        {{ board.title }}
        <div>
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>
      <div
        class="content d-flex flex-column justify-content-between align-items-start p-2"
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
import { Board } from "@/data";
import CreateCard from "./CreateCard.vue";
export default {
  name: "board-component",
  components: {
    Card,
    CreateCard,
  },
  props: {
    board: Object as PropType<Board>,
    id: Number,
  },
  methods: {
    openModal() {
      this.$refs.createCard.$refs.modal.show = true;
    },
  },
};
</script>
<style scoped lang="css">
.board {
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  -moz-box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
  box-shadow: 0px 0px 78px -60px rgba(34, 60, 80, 0.3);
}

.board .title {
  color: #fff;
  text-align: center;
  font-size: 18px;
  background-color: #4257a6;
  border-radius: 10px 10px 0 0;
}

.board .content {
  height: 90%;
}

.content button {
  background: none;
  color: #a1ae90;
  border: none;
  outline: inherit;
  transition: color ease-in-out 1s;
}

.content button:hover {
  color: #272d6b;
}
.cards {
  width: 100%;
}
</style>
