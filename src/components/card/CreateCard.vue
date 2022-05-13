<template lang="html">
  <Modal ref="modal" title="Новая карточка">
    <form @submit="createNewCard(id)">
      <label class="mb-2" for="title">Заголовок</label>
      <input
        autocomplete="off"
        v-model="title"
        required
        id="title"
        type="text"
        min="1"
        max="20"
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
      <button class="button">Создать</button>
    </form>
  </Modal>
</template>
<script lang="ts">
import { Card, Board, WeekColors } from "@/types";
import Modal from "../common/Modal.vue";
import { ru } from "date-fns/locale";
import { format } from "date-fns";

export default {
  name: "create-card",
  components: {
    Modal,
  },
  props: {
    updateBoards: {
      type: Function,
      default: (): void => {
        return;
      },
    },
    id: {
      type: Number,
      default: () => 0,
    },
  },
  data(): {
    title: string;
    desc: string;
    deadline: Date;
    weekColors: WeekColors;
  } {
    return {
      title: "",
      desc: "",
      deadline: new Date(),
      weekColors: {
        mon: "#fdf9e0",
        tue: "#ffddd2",
        wed: "#d5c2d5",
        thu: "#5ea9bc",
        fri: "#9acdde",
        sat: "#cbe1ef",
        sun: "#dae5d9",
      },
    };
  },
  methods: {
    getWeekColor(date: Date): string {
      const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
      return this.weekColors[days[date.getDay()]];
    },
    createNewCard(id: number): void {
      const newCard: Card = {
        title: this.title,
        desc: this.desc,
        date: format(new Date(), "dd MMMM yyyy H:mm", { locale: ru }),
        deadline: format(Date.parse(this.deadline), "dd MMMM yyyy H:mm", {
          locale: ru,
        }),
        color: this.getWeekColor(new Date()),
      };
      let boards = JSON.parse(localStorage.getItem("boards") as string);
      const activeBoardId = boards.findIndex((board: Board) => board.active);
      boards[activeBoardId].columns[id].cards.push(newCard);
      localStorage.boards = JSON.stringify(boards);
      this.$refs.modal.show = false;
      this.title = "";
      this.desc = "";
      this.updateBoards();
    },
  },
};
</script>
<style lang="scss"></style>
