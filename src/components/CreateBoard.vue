<template lang="html">
  <Modal ref="modal" title="Новая доска">
    <form>
      <label class="mb-2" for="title">Заголовок</label>
      <input v-model="title" required id="title" type="text" />
      <button class="button">Создать</button>
    </form>
  </Modal>
</template>
<script lang="ts">
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
};
</script>
<style lang="css"></style>
