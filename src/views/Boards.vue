<template lang="html">
  <div class="container pt-4">
    <create-column :updateBoards="updateBoards" ref="createColumn" />
    <delete-board :updateBoards="updateBoards" ref="deleteBoard" />
    <div
      class="d-flex flex-row row row-cols-1 row-cols-sm-1 row-cols-md-3 row-col-lg-3 position-relative"
    >
      <column
        :updateBoards="updateBoards"
        v-for="(column, index) in boards.find((board: Board) => board.active).columns"
        :key="index"
        class="col"
        :column="column"
        :id="index"
        :boards="boards"
      />
    </div>
    <div
      class="position-fixed d-flex justify-content-center align-items-center bottom-0 start-50 translate-middle"
    >
      <div
        @click="openCreateModal"
        class="create-board board-action d-flex justify-content-center align-items-center p-2"
      >
        <i class="fa-solid fa-plus"></i>
      </div>
      <div
        v-if="boards.findIndex((board: Board) => board.active)"
        @click="openDeleteModal"
        class="board-action d-flex justify-content-center align-items-center p-2"
      >
        <i class="fa-solid fa-trash-can"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Column from "../components/Column.vue";
import CreateColumn from "../components/CreateColumn.vue";
import DeleteBoard from "../components/DeleteBoard.vue";
import { Board } from "@/types";
import { PropType } from "@vue/runtime-core";
export default {
  name: "boards-component",
  props: {
    boards: {
      type: Array as PropType<Board[]>,
      default: (): Board[] => {
        return [];
      },
    },
    updateBoards: Function,
  },
  components: {
    Column,
    CreateColumn,
    DeleteBoard,
  },
  methods: {
    openCreateModal(): void {
      this.$refs.createColumn.$refs.modal.show = true;
    },
    openDeleteModal(): void {
      this.$refs.deleteBoard.$refs.modal.show = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/styles/sizes";
@import "../../public/styles/colors";
.board-action {
  background: $liberty;
  color: #fff;
  border-radius: 100px;
  height: 7vh;
  width: 7vh;
  cursor: pointer;
}
.board-action:hover {
  background: $deep-koamaru;
}

.create-board {
  margin-right: 1vh;
}
</style>
