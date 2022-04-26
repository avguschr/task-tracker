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
import { Board, BoardGroup } from "@/types";
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
      const newColumn: Board = {
        title: this.title,
        cards: [],
      };
      let ls = JSON.parse(localStorage.getItem("data") as string);
      const activeBoardId = ls.findIndex((board: BoardGroup) => board.active);
      ls[activeBoardId].boards.push(newColumn);
      localStorage.data = JSON.stringify(ls);
      this.$refs.modal.show = false;
    },
  },
};
</script>
<style lang="css"></style>
