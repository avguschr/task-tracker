import { Board } from "./types";

export const mainBoard: Board = {
  title: "Основные доски",
  active: true,
  columns: [
    {
      title: "Планируется",
      cards: [],
    },
    {
      title: "В работе",
      cards: [],
    },
    {
      title: "Выполнено",
      cards: [],
    },
  ],
};
