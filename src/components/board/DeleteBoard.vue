<template lang="html">
  <Modal ref="modal" title="Удаление доски">
    <div class="mb-3">
      <p>Вы хотите удалить текущую доску?</p>
    </div>
    <form>
      <button class="button-warning" @click.prevent="deleteBoard">
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
  name: "delete-board",
  components: {
    Modal,
  },
  props: {
    updateBoards: Function,
  },
  methods: {
    cancel(): void {
      this.$refs.modal.show = false;
    },
    deleteBoard(): void {
      let boards = JSON.parse(localStorage.getItem("boards") as string);
      const activeBoardId = boards.findIndex((board: Board) => board.active);
      boards[activeBoardId].active = false;
      this.$refs.modal.show = false;
      boards.splice(activeBoardId, 1);
      boards[0].active = true;
      localStorage.boards = JSON.stringify(boards);
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
