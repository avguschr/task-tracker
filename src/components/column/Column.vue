<template lang="html">
  <div class="mb-2 main-column-block">
    <delete-column :updateBoards="updateBoards" :id="id" ref="deleteColumn" />
    <create-card :updateBoards="updateBoards" ref="createCard" :id="id" />
    <update-column :updateBoards="updateBoards" ref="updateColumn" :id="id" />
    <div class="column">
      <div class="column-title d-flex justify-content-between p-2">
        {{ column.title }}
        <div v-if="activeBoardId">
          <i @click="openModalUpdateColumn" class="fa-solid fa-pencil"></i>
          <i @click="openModalDeleteColumn" class="fa-solid fa-trash-can"></i>
        </div>
      </div>
      <div
        class="column-content d-flex flex-column justify-content-between align-items-start p-2"
      >
        <div class="cards">
          <draggable
            style="padding-bottom: 7vh"
            @end="end"
            :list="columns[id].cards"
            group="columns"
          >
            <card-component
              v-for="(card, index) in columns[id].cards"
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
import CardComponent from "../card/Card.vue";
import { Board, Column, Card } from "@/types";
import CreateCard from "../card/CreateCard.vue";
import DeleteColumn from "../column/DeleteColumn.vue";
import UpdateColumn from "../column/UpdateColumn.vue";
import { VueDraggableNext } from "vue-draggable-next";
export default {
  name: "board-component",
  components: {
    CardComponent,
    CreateCard,
    DeleteColumn,
    UpdateColumn,
    draggable: VueDraggableNext,
  },
  props: {
    updateBoards: {
      type: Function,
      default: (): void => {
        return;
      },
    },
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
    columns: Array,
  },
  data(): { boards: Board[]; dragStart: boolean; cards: Card[] } {
    return {
      boards: JSON.parse(localStorage.getItem("boards") as string),
      dragStart: false,
      cards: this.column.cards,
    };
  },
  methods: {
    end(): void {
      this.boards[this.activeBoardId].columns = this.columns;
      localStorage.boards = JSON.stringify(this.boards);
    },
    openModalCreateCard(): void {
      this.$refs.createCard.$refs.modal.show = true;
    },
    openModalDeleteColumn(): void {
      this.$refs.deleteColumn.$refs.modal.show = true;
    },
    openModalUpdateColumn(): void {
      this.$refs.updateColumn.$refs.modal.show = true;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/styles/sizes";
@import "../../assets/styles/colors";
.column {
  background: $light;
}

.column,
.main-column-block {
  border-radius: 10px;
}

.column .column-title {
  color: #fff;
  text-align: center;
  font-size: $title-2;
  background-color: $main;
  border-radius: 10px 10px 0 0;
}

.column .column-content button {
  background: none;
  color: $additional;
  border: none;
  outline: inherit;
  transition: color ease-in-out 1s;
}

.column .column-content button:hover {
  color: $secondary;
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
  color: $secondary;
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
