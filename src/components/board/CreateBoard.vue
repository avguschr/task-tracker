<template lang="html">
  <Modal ref="modal" title="Новая доска">
    <form @submit="createNewBoard">
      <label class="mb-2" for="title">Заголовок</label>
      <input
        autocomplete="off"
        v-model="title"
        required
        id="title"
        type="text"
        @keypress.enter.prevent="createNewBoard"
      />
      <button class="button">Создать</button>
    </form>
  </Modal>
</template>
<script lang="ts">
import { Board } from "@/types";
import Modal from "../common/Modal.vue";

export default {
  name: "create-board",
  components: {
    Modal,
  },
  props: {
    closeMenu: Function,
    updateBoards: {
      type: Function,
      default: (): void => {
        return;
      },
    },
  },
  data(): { title: string } {
    return {
      title: "",
    };
  },
  methods: {
    createNewBoard(): void {
      const newBoard: Board = {
        title: this.title,
        active: true,
        columns: [],
      };
      let boards = JSON.parse(localStorage.getItem("boards") as string);
      boards.forEach((board: Board) => {
        board.active = false;
      });
      boards.push(newBoard);
      localStorage.boards = JSON.stringify(boards);
      this.$refs.modal.show = false;
      this.title = "";
      this.closeMenu();
      this.updateBoards();
    },
  },
};
</script>
<style lang="scss"></style>
