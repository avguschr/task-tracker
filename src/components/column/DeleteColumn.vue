<template lang="html">
  <Modal ref="modal" title="Удаление столбца">
    <div class="mb-3">
      <p>Вы хотите удалить столбец?</p>
    </div>
    <form>
      <button class="button-warning" @click.prevent="deleteColumn(id)">
        Удалить
      </button>
      <button @click.prevent="cancel" class="button">Отмена</button>
    </form>
  </Modal>
</template>
<script lang="ts">
import Modal from "../common/Modal.vue";
import { Board } from "@/types";

export default {
  name: "delete-column",
  components: {
    Modal,
  },
  props: {
    updateBoards: {
      type: Function,
      default: (): void => {
        return;
      },
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  data(): { boards: Board[]; dragStart: boolean } {
    return {
      boards: JSON.parse(localStorage.getItem("boards") as string),
      dragStart: false,
    };
  },
  methods: {
    cancel(): void {
      this.$refs.modal.show = false;
    },
    deleteColumn(id: number): void {
      const activeBoardId = this.boards.findIndex(
        (board: Board) => board.active
      );
      this.$refs.modal.show = false;
      this.boards[activeBoardId].columns.splice(id, 1);
      localStorage.boards = JSON.stringify(this.boards);
      this.updateBoards();
    },
  },
};
</script>
<style scoped lang="scss">
button {
  margin-right: 2vh;
}
</style>
