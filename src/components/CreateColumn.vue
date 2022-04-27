<template lang="html">
  <Modal ref="modal" title="Новый столбец">
    <form>
      <label class="mb-2" for="title">Заголовок</label>
      <input
        autocomplete="off"
        v-model="title"
        required
        id="title"
        type="text"
        @keypress.enter="createNewColumn"
      />
      <button @click.prevent="createNewColumn" class="button">Создать</button>
    </form>
  </Modal>
</template>
<script lang="ts">
import { Board, Column } from "@/types";
import Modal from "./common/Modal.vue";

export default {
  name: "create-column",
  components: {
    Modal,
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
        let boards = JSON.parse(localStorage.getItem("boards") as string);
        const activeBoardId = boards.findIndex((board: Board) => board.active);
        boards[activeBoardId].columns.push(newColumn);
        localStorage.boards = JSON.stringify(boards);
        this.$refs.modal.show = false;
        this.title = "";
      }
    },
  },
};
</script>
<style lang="scss"></style>
