import { BoardGroup } from "./types";

export const mainBoard: BoardGroup = {
  title: "Основные доски",
  active: true,
  boards: [
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
