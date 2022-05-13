<template lang="html">
  <div class="all container pt-4">
    <create-column :updateBoards="updateBoards" ref="createColumn" />
    <delete-board
      :openSwitchBoards="openSwitchBoards"
      :updateBoards="updateBoards"
      ref="deleteBoard"
    />
    <update-board :updateBoards="updateBoards" ref="updateBoard" />
    <div class="boards d-flex position-relative">
      <div
        class="col-md-4 col-sm-6 p-2 col-12 col-lg-4"
        v-for="(column, index) in boards.find((board: Board) => board.active).columns"
        :key="index"
      >
        <column
          :updateBoards="updateBoards"
          :column="column"
          :id="index"
          :boards="boards"
          :activeBoardId="activeBoardId"
          :columns="boards.find((board: Board) => board.active).columns"
        />
      </div>
    </div>
    <div
      v-if="boards.findIndex((board: Board) => board.active)"
      class="position-fixed d-flex justify-content-center align-items-center bottom-0 start-50 translate-middle"
    >
      <div
        @click="openCreateModal"
        class="create-board board-action d-flex justify-content-center align-items-center p-2"
      >
        <i class="fa-solid fa-plus"></i>
      </div>
      <div
        @click="openUpdateModal"
        class="board-action d-flex justify-content-center align-items-center p-2"
      >
        <i class="fa-solid fa-pencil"></i>
      </div>
      <div
        @click="openDeleteModal"
        class="board-action d-flex justify-content-center align-items-center p-2"
      >
        <i class="fa-solid fa-trash-can"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Column from "../column/Column.vue";
import CreateColumn from "../column/CreateColumn.vue";
import DeleteBoard from "./DeleteBoard.vue";
import UpdateBoard from "../board/UpdateBoard.vue";
import { Board } from "@/types";
import { PropType } from "@vue/runtime-core";
export default {
  name: "boards-component",
  props: {
    openSwitchBoards: Function,
    boards: {
      type: Array as PropType<Board[]>,
      default: (): Board[] => [],
    },
    activeBoardId: {
      type: Number,
      default: () => 0,
    },
    updateBoards: {
      type: Function,
      default: (): void => {
        return;
        //
      },
    },
  },
  components: {
    Column,
    CreateColumn,
    DeleteBoard,
    UpdateBoard,
  },
  methods: {
    openCreateModal(): void {
      this.$refs.createColumn.$refs.modal.show = true;
    },
    openDeleteModal(): void {
      this.$refs.deleteBoard.$refs.modal.show = true;
    },
    openUpdateModal(): void {
      this.$refs.updateBoard.$refs.modal.show = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/sizes";
@import "../../assets/styles/colors";
.board-action {
  background: $main;
  color: #fff;
  border-radius: 100px;
  height: 7vh;
  width: 7vh;
  cursor: pointer;
  transition-property: background;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}
.board-action:hover {
  background: $secondary;
}

.create-board,
.board-action {
  margin-right: 1vh;
}

.board-action:hover i {
  animation: icons-rotate 0.5s;
}

.create-board,
.board-action {
  z-index: 999;
}
.boards {
  overflow: auto;
  height: 75vh;
}

.boards::-webkit-scrollbar {
  width: 3vh;
  height: 3vh;
}

.boards::-webkit-scrollbar-track {
  background-color: $secondary-light;
  border-radius: 100px;
}

.boards::-webkit-scrollbar-thumb {
  background-color: $additional;
  border-radius: 100px;
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
