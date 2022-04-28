<template lang="html">
  <div class="mb-2">
    <create-card :updateBoards="updateBoards" ref="createCard" :id="id" />
    <div class="column">
      <div class="column-title d-flex justify-content-between p-2">
        {{ column.title }}
        <div>
          <i @click="deleteColumn(id)" class="fa-solid fa-trash-can"></i>
        </div>
      </div>
      <div
        class="column-content d-flex flex-column justify-content-between align-items-start p-2"
      >
        <div class="cards">
          <Card
            :card="card"
            v-for="(card, index) in column.cards"
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
    updateBoards: Function,
    column: {
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
  data(): { boards: Board[] } {
    return {
      boards: JSON.parse(localStorage.getItem("boards") as string),
    };
  },
  methods: {
    openModal() {
      this.$refs.createCard.$refs.modal.show = true;
    },
    deleteColumn(id: number): void {
      const activeBoardId = this.boards.findIndex(
        (board: Board) => board.active
      );
      console.log(this.boards[activeBoardId].columns.splice(id, 1));
      this.boards[activeBoardId].columns.splice(id, 1);
      localStorage.boards = JSON.stringify(this.boards);
      this.updateBoards();
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../public/styles/sizes";
@import "../../public/styles/colors";
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
  background-color: $liberty;
  border-radius: 10px 10px 0 0;
}

.column .column-content button {
  background: none;
  color: $locust;
  border: none;
  outline: inherit;
  transition: color ease-in-out 1s;
}

.column .column-content button:hover {
  color: $deep-koamaru;
}

.column .column-content .cards {
  width: 100%;
}

.column .column-title i {
  cursor: pointer;
}
</style>
