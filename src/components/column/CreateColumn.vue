<template lang="html">
  <Modal ref="modal" title="Новый столбец">
    <form @submit="createNewColumn">
      <label class="mb-2" for="title">Заголовок</label>
      <input
        autocomplete="off"
        v-model="title"
        required
        id="title"
        type="text"
        @keypress.enter="createNewColumn"
      />
      <button class="button">Создать</button>
    </form>
  </Modal>
</template>
<script lang="ts">
import { Board, Column } from "@/types";
import Modal from "../common/Modal.vue";

export default {
  name: "create-column",
  components: {
    Modal,
  },
  props: {
    updateBoards: Function,
  },
  data(): { title: string } {
    return {
      title: "",
    };
  },
  methods: {
    createNewColumn(): void {
      const newColumn: Column = {
        title: this.title,
        cards: [],
      };
      if (this.title) {
        this.$refs.modal.show = false;
        let boards = JSON.parse(localStorage.getItem("boards") as string);
        const activeBoardId = boards.findIndex((board: Board) => board.active);
        boards[activeBoardId].columns.push(newColumn);
        localStorage.boards = JSON.stringify(boards);
        this.title = "";
      }
      this.updateBoards();
    },
  },
};
</script>
<style lang="scss"></style>
