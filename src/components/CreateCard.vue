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
      <button @click.prevent="createNewCard(id)" class="button">Создать</button>
    </form>
  </Modal>
</template>
<script lang="ts">
import { Card, Board } from "@/types";
import Modal from "./common/Modal.vue";
import { ru } from "date-fns/locale";
import { format } from "date-fns";

export default {
  name: "create-card",
  components: {
    Modal,
  },
  props: {
    id: {
      type: Number,
      default: () => 0,
    },
  },
  data(): { title: string; desc: string; deadline: Date } {
    return {
      title: "",
      desc: "",
      deadline: new Date(),
    };
  },
  methods: {
    createNewCard(id: number): void {
      const newCard: Card = {
        title: this.title,
        desc: this.desc,
        date: format(new Date(), "dd MMMM yyyy H:mm", { locale: ru }),
        deadline: format(Date.parse(this.deadline), "dd MMMM yyyy H:mm", {
          locale: ru,
        }),
      };
      if (this.title && this.desc && this.deadline > new Date()) {
        let boards = JSON.parse(localStorage.getItem("boards") as string);
        const activeBoardId = boards.findIndex((board: Board) => board.active);
        boards[activeBoardId].columns[id].cards.push(newCard);
        localStorage.boards = JSON.stringify(boards);
        this.$refs.modal.show = false;
        this.title = "";
        this.desc = "";
      }
    },
  },
};
</script>
<style lang="scss"></style>
