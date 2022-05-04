<template lang="html">
  <div class="mb-2 main-column-block">
    <delete-column :updateBoards="updateBoards" :id="id" ref="deleteColumn" />
    <create-card :updateBoards="updateBoards" ref="createCard" :id="id" />
    <div class="column">
      <div class="column-title d-flex justify-content-between p-2">
        {{ column.title }}
        <div v-if="activeBoardId">
          <i class="fa-solid fa-pencil"></i>
          <i @click="openModalDeleteColumn" class="fa-solid fa-trash-can"></i>
        </div>
      </div>
      <div
        class="column-content d-flex flex-column justify-content-between align-items-start p-2"
      >
        <div class="cards">
          <draggable
            style="min-height: 10vh"
            @start="dragStart = true"
            :list="column.cards"
            group="columns"
          >
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
import Card from "../card/Card.vue";
import { Board, Column } from "@/types";
import CreateCard from "../card/CreateCard.vue";
import DeleteColumn from "../column/DeleteColumn.vue";
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
  data(): { boards: Board[]; dragStart: boolean } {
    return {
      boards: JSON.parse(localStorage.getItem("boards") as string),
      dragStart: false,
    };
  },
  methods: {
    // add(card: Card, columnId: number): void {
    //   const activeBoardId = this.boards.findIndex(
    //     (board: Board) => board.active
    //   );
    //   this.boards[activeBoardId].columns[columnId].cards.push(card);
    //   localStorage.boards = JSON.stringify(this.boards);
    // },
    openModalCreateCard(): void {
      this.$refs.createCard.$refs.modal.show = true;
    },
    openModalDeleteColumn(): void {
      this.$refs.deleteColumn.$refs.modal.show = true;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/styles/sizes";
@import "../../assets/styles/colors";
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
  transition-property: color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}
.column .column-title i:first-child {
  margin-right: 2vh;
}
.column .column-title i:hover {
  color: $deep-koamaru;
  animation: icons-rotate 0.5s;
}
@keyframes icons-rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
