<template lang="html">
  <Modal ref="modal" title="Удаление столбца">
    <div class="mb-3">
      <p>Вы хотите удалить столбец?</p>
    </div>
    <form>
      <button class="button-warning" @click.prevent="deleteColumn(id)">
        Удалить
      </button>
      <button @click.prevent="cancel" class="button">Отмена</button>
    </form>
  </Modal>
</template>
<script lang="ts">
import Modal from "./common/Modal.vue";

export default {
  name: "delete-column",
  components: {
    Modal,
  },
  props: {
    updateBoards: Function,
    deleteColumn: Function,
    id: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    cancel(): void {
      this.$refs.modal.show = false;
    },
  },
};
</script>
<style scoped lang="scss">
button {
  margin-right: 2vh;
}
</style>
