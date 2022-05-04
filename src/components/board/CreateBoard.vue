<template lang="html">
  <Modal ref="modal" title="Новая доска">
    <form>
      <label class="mb-2" for="title">Заголовок</label>
      <input
        autocomplete="off"
        v-model="title"
        required
        id="title"
        type="text"
        @keypress.enter="createNewBoard"
      />
      <e-input></e-input>
      <button @click.prevent="createNewBoard" class="button">Создать</button>
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
    updateBoards: Function,
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
      this.updateBoards();
    },
  },
};
</script>
<style lang="scss"></style>
