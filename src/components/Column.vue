<template lang="html">
  <div class="mb-2 main-column-block">
    <delete-column :deleteColumn="deleteColumn" :id="id" ref="deleteColumn" />
    <create-card :updateBoards="updateBoards" ref="createCard" :id="id" />
    <div class="column">
      <div class="column-title d-flex justify-content-between p-2">
        {{ column.title }}
        <div v-if="activeBoardId">
          <i @click="openModalDeleteColumn" class="fa-solid fa-trash-can"></i>
        </div>
      </div>
      <div
        class="column-content d-flex flex-column justify-content-between align-items-start p-2"
      >
        <div class="cards mb-3">
          <draggable @end="end" :list="column.cards" group="columns">
            <Card
              v-for="(card, index) in column.cards"
              :key="index"
              :updateBoards="updateBoards"
              :card="card"
              :cardId="index"
              :columnId="id"
            />
          </draggable>
        </div>
        <button @click="openModalCreateCard" class="text-start">
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
import DeleteColumn from "./DeleteColumn.vue";
import { VueDraggableNext } from "vue-draggable-next";
export default {
  name: "board-component",
  components: {
    Card,
    CreateCard,
    DeleteColumn,
    draggable: VueDraggableNext,
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
    activeBoardId: {
      type: Number,
      default: () => 0,
    },
  },
  data(): { boards: Board[] } {
    return {
      boards: JSON.parse(localStorage.getItem("boards") as string),
    };
  },
  methods: {
    end() {
      console.log(this.boards);
      localStorage.boards = JSON.stringify(this.boards);
    },
    openModalCreateCard(): void {
      this.$refs.createCard.$refs.modal.show = true;
    },
    openModalDeleteColumn(): void {
      this.$refs.deleteColumn.$refs.modal.show = true;
    },
    deleteColumn(id: number): void {
      const activeBoardId = this.boards.findIndex(
        (board: Board) => board.active
      );
      this.$refs.deleteColumns.$refs.modal.show = false;
      this.boards[activeBoardId].columns.splice(id, 1);
      localStorage.boards = JSON.stringify(this.boards);
      this.updateBoards();
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/styles/sizes";
@import "../assets/styles/colors";
.column {
  background: $gallery;
}

.column,
.main-column-block {
  border-radius: 10px;
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
