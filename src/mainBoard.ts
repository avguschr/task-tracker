import { Board, Background } from "./types";

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
export const backgrounds: Background[] = [
  {
    title: "Светлый",
    active: true,
    color: "#f7f7f7",
  },
  {
    title: "Темный",
    active: false,
    color: "#bec9b0",
  },
  {
    title: "Узор",
    active: false,
    image: "./assets/backgrounds/b1.svg",
  },
];
