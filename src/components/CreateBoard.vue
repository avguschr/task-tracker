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
      <button @click.prevent="createNewBoard" class="button">Создать</button>
    </form>
  </Modal>
</template>
<script lang="ts">
import { BoardGroup } from "@/data";
import Modal from "./common/Modal.vue";

export default {
  name: "create-board",
  components: {
    Modal,
  },
  data(): { title: string } {
    return {
      title: "",
    };
  },
  methods: {
    createNewBoard(): void {
      const newBoard: BoardGroup = {
        title: this.title,
        boards: [],
      };
      let ls = JSON.parse(localStorage.getItem("data") as string);
      ls.push(newBoard);
      localStorage.data = JSON.stringify(ls);
    },
  },
};
</script>
<style lang="css"></style>
