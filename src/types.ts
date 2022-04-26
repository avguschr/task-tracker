export type Card = {
  title: string;
  desc: string;
  date: string;
  deadline: string;
};

export type Board = {
  title: string;
  cards: Card[];
};

export type BoardGroup = {
  title: string;
  active: boolean;
  boards: Board[];
};
