<template lang="html">
  <div class="container pt-4">
    <create-column :updateBoards="updateBoards" ref="createColumn" />
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
      />
    </div>
    <div
      @click="openModal"
      class="create-board d-flex justify-content-center align-items-center position-fixed bottom-0 start-50 translate-middle p-2"
    >
      <i class="fa-solid fa-plus"></i>
    </div>
  </div>
</template>
<script lang="ts">
import Column from "../components/Column.vue";
import CreateColumn from "../components/CreateColumn.vue";
import { Board } from "@/types";
export default {
  name: "boards-component",
  components: {
    Column,
    CreateColumn,
  },
  data(): { boards: Board[] } {
    return {
      boards: JSON.parse(localStorage.getItem("boards") as string),
    };
  },
  methods: {
    openModal(): void {
      this.$refs.createColumn.$refs.modal.show = true;
    },
    updateBoards(): void {
      this.boards = JSON.parse(localStorage.getItem("boards") as string);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/styles/sizes";
@import "../../public/styles/colors";
.create-board {
  background: $liberty;
  color: #fff;
  border-radius: 100px;
  height: 7vh;
  width: 7vh;
  cursor: pointer;
}
.create-board:hover {
  background: $deep-koamaru;
}
</style>
