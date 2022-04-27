export type Card = {
  title: string;
  desc: string;
  date: string;
  deadline: string;
};

export type Column = {
  title: string;
  cards: Card[];
};

export type Board = {
  title: string;
  active: boolean;
  columns: Column[];
};
