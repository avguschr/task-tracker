<template lang="html">
  <Modal ref="modal" title="Новая карточка">
    <form>
      <label class="mb-2" for="title">Заголовок</label>
      <input
        autocomplete="off"
        v-model="title"
        required
        id="title"
        type="text"
        min="1"
      />
      <label class="mb-2" for="desc">Описание</label>
      <textarea
        autocomplete="off"
        v-model="desc"
        required
        id="desc"
        type="text"
        min="10"
      />
      <label class="mb-2" for="deadline">Дедлайн</label>
      <input
        autocomplete="off"
        v-model="deadline"
        required
        id="deadline"
        type="datetime-local"
      />
      <div>
        <button @click.prevent="updateCard(columnId, cardId)" class="button">
          Изменить
        </button>
        <button @click.prevent="deleteCard" class="button-warning">
          Удалить
        </button>
      </div>
    </form>
  </Modal>
</template>
<script lang="ts">
import { Card, Board } from "@/types";
import Modal from "./common/Modal.vue";
import { PropType } from "@vue/runtime-core";

export default {
  name: "create-card",
  components: {
    Modal,
  },
  props: {
    updateBoards: Function,
    cardId: {
      type: Number,
      default: () => 0,
    },
    columnId: {
      type: Number,
      default: () => 0,
    },
    card: {
      type: Object as PropType<Card>,
    },
  },
  data(): { title: string; desc: string; deadline: string } {
    return {
      title: this.card.title,
      desc: this.card.desc,
      deadline: this.card.deadline,
    };
  },
  methods: {
    updateCard(columnId: number, cardId: number): void {
      const updatedCard = {
        title: this.title,
        desc: this.desc,
        deadline: this.deadline,
        date: this.card.date,
      };
      console.log("колонка " + columnId);
      console.log("карточка " + cardId);
      let boards = JSON.parse(localStorage.getItem("boards") as string);
      const activeBoardId = boards.findIndex((board: Board) => board.active);
      boards[activeBoardId].columns[columnId].cards[cardId] = updatedCard;
      localStorage.boards = JSON.stringify(boards);
      this.updateBoards();
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
