export type Card = {
  title: string;
  desc: string;
  date: string;
  deadline: string;
  color: string;
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

export type WeekColors = {
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  sun: string;
};

export type Background = {
  title: string;
  active: boolean;
  image?: string;
  color?: string;
};
