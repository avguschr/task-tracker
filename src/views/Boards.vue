<template lang="html">
  <div class="container pt-4">
    <create-column ref="createColumn" />
    <div
      class="d-flex flex-row row row-cols-1 row-cols-sm-1 row-cols-md-3 row-col-lg-3 position-relative"
    >
      <board
        v-for="(board, index) in data.filter((board: BoardGroup) => board.active)[0].boards"
        :key="index"
        class="col"
        :board="board"
        :id="index"
      />
    </div>
    <div
      @click="openModal"
      class="create d-flex justify-content-center align-items-center position-absolute bottom-0 start-50 translate-middle p-2"
    >
      <i class="fa-solid fa-plus"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { BoardGroup } from "@/types";
import Board from "../components/Board.vue";
import { PropType } from "@vue/runtime-core";
import CreateColumn from "../components/CreateColumn.vue";
export default {
  name: "boards-component",
  props: {
    data: Array as PropType<BoardGroup[]>,
  },
  components: {
    Board,
    CreateColumn,
  },
  methods: {
    openModal(): void {
      this.$refs.createColumn.$refs.modal.show = true;
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 4vh;
}
.create {
  background: #4257a6;
  color: #fff;
  border-radius: 100px;
  height: 7vh;
  width: 7vh;
  cursor: pointer;
}
.create:hover {
  background: rgba(39, 45, 107);
}
</style>
