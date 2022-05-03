<template lang="html">
  <Modal ref="modal" title="Редактирование карточки">
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
        <button
          @click.prevent="deleteCard(columnId, cardId)"
          class="button-warning"
        >
          Удалить
        </button>
      </div>
    </form>
  </Modal>
</template>
<script lang="ts">
import { Card, Board } from "@/types";
import Modal from "../common/Modal.vue";
import { PropType } from "@vue/runtime-core";
import { ru } from "date-fns/locale";
import { format } from "date-fns";

export default {
  name: "update-card",
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
        deadline: Date.parse(this.deadline)
          ? format(Date.parse(this.deadline), "dd MMMM yyyy H:mm", {
              locale: ru,
            })
          : this.deadline,
        date: this.card.date,
      };
      let boards = JSON.parse(localStorage.getItem("boards") as string);
      const activeBoardId = boards.findIndex((board: Board) => board.active);
      boards[activeBoardId].columns[columnId].cards[cardId] = updatedCard;
      localStorage.boards = JSON.stringify(boards);
      this.updateBoards();
      this.$refs.modal.show = false;
    },
    deleteCard(columnId: number, cardId: number): void {
      let boards = JSON.parse(localStorage.getItem("boards") as string);
      const activeBoardId = boards.findIndex((board: Board) => board.active);
      boards[activeBoardId].columns[columnId].cards.splice(cardId, 1);
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
