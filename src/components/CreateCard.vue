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
        @keypress.enter="createNewBoard"
      />
      <label class="mb-2" for="desc">Описание</label>
      <textarea
        autocomplete="off"
        v-model="desc"
        required
        id="desc"
        type="text"
        @keypress.enter="createNewBoard"
      />
      <label class="mb-2" for="deadline">Дедлайн</label>
      <input
        autocomplete="off"
        v-model="deadline"
        required
        id="deadline"
        type="datetime-local"
        @keypress.enter="createNewBoard"
      />
      <button @click.prevent="createNewCard(id)" class="button">Создать</button>
    </form>
  </Modal>
</template>
<script lang="ts">
import { Card, BoardGroup } from "@/data";
import Modal from "./common/Modal.vue";
import { ru } from "date-fns/locale";
// import format from "date-fns/fp/formatWithOptions";
import { format } from "date-fns";

export default {
  name: "create-card",
  components: {
    Modal,
  },
  props: {
    id: Number,
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
      console.log(Date.parse(this.deadline));
      if (this.title && this.desc) {
        let ls = JSON.parse(localStorage.getItem("data") as string);
        const activeBoardId = ls.findIndex((board: BoardGroup) => board.active);
        ls[activeBoardId].boards[id].cards.push(newCard);
        localStorage.data = JSON.stringify(ls);
        this.$refs.modal.show = false;
        this.title = "";
        this.desc = "";
      }
    },
  },
};
</script>
<style lang="css"></style>
