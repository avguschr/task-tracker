type Card = {
  title: string;
  desc: string;
  date: string;
  deadline: string;
};

type Board = {
  title: string;
  cards: Card[];
};

export type BoardGroup = {
  title: string;
  boards: Board[];
};

const boardsGroup: BoardGroup[] = [
  {
    title: "Доска 1",
    boards: [
      {
        title: "Солбец 1",
        cards: [
          {
            title: "dfdfdsdsd",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
          {
            title: "dfdfdsdsd",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
        ],
      },
      {
        title: "Солбец 1",
        cards: [
          {
            title: "dfdfdsdsd",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
          {
            title: "dfdfdsdsd",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
        ],
      },
    ],
  },

  {
    title: "Доска 2",
    boards: [
      {
        title: "Солбец 1",
        cards: [
          {
            title: "dfdfdsdsd",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
          {
            title: "dfdfdsdsd",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
        ],
      },
      {
        title: "Солбец 1",
        cards: [
          {
            title: "dfdfdsdsd",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
          {
            title: "dfdfdsdsd",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
        ],
      },
    ],
  },
];

export default boardsGroup;
