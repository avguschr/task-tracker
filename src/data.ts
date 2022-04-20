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
            title: "1111111111111",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
          {
            title: "2222222222222222",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
        ],
      },
      {
        title: "Солбец 2",
        cards: [
          {
            title: "Заголовок",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
          {
            title: "Ого заголовок",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
          {
            title: "Ого заголовок",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
        ],
      },
      // {
      //   title: "Солбец 3",
      //   cards: [
      //     {
      //       title: "1111111111111",
      //       desc: "addcsdsvfvs",
      //       date: "21.01.2002",
      //       deadline: "dhdshcdh",
      //     },
      //     {
      //       title: "2222222222222222",
      //       desc: "addcsdsvfvs",
      //       date: "21.01.2002",
      //       deadline: "dhdshcdh",
      //     },
      //   ],
      // },
      {
        title: "Солбец 4",
        cards: [
          {
            title: "1111111111111",
            desc: "addcsdsvfvs",
            date: "21.01.2002",
            deadline: "dhdshcdh",
          },
          {
            title: "2222222222222222",
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
