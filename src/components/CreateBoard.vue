<template lang="html">
  <Modal ref="modal" v-if="show" title="Новая доска">
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
  data(): { title: string; show: boolean } {
    return {
      title: "",
      show: this.$refs.modal.show,
    };
  },
};
</script>
<style lang="css"></style>
