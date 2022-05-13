<template lang="html">
  <Modal ref="modal" title="Редактирование колонки">
    <form @submit="updateColumn(id)">
      <label class="mb-2" for="title">Заголовок</label>
      <input
        autocomplete="off"
        v-model="title"
        required
        id="title"
        type="text"
        min="1"
      />
      <button class="button">Изменить</button>
    </form>
  </Modal>
</template>
<script lang="ts">
import { Board } from "@/types";
import Modal from "../common/Modal.vue";

export default {
  name: "update-column",
  components: {
    Modal,
  },
  props: {
    id: {
      type: Number,
      default: (): number => 0,
    },
    updateBoards: {
      type: Function,
      default: (): void => {
        return;
      },
    },
  },
  data(): { title: string } {
    return {
      title: JSON.parse(localStorage.getItem("boards") as string).find(
        (board: Board) => board.active
      ).columns[this.id].title,
    };
  },
  methods: {
    updateColumn(id: number): void {
      let boards = JSON.parse(localStorage.getItem("boards") as string);
      const activeBoardId = boards.findIndex((board: Board) => board.active);
      boards[activeBoardId].columns[id].title = this.title;
      localStorage.boards = JSON.stringify(boards);
      this.updateBoards();
      this.$refs.modal.show = false;
    },
  },
};
</script>
<style scoped lang="scss"></style>
