const initialState = {
  notes: [
    {
      id: 1,
      title: "title 1",
      task: "task 1",
      done: false,
    },
    {
      id: 2,
      title: "title 2",
      task: "task 2",
      done: true,
    },
    {
      id: 3,
      title: "title 3",
      task: "task 3",
      done: false,
    },
  ],
};

const reducer = (initialState, action) => {
  return initialState;
};

export default reducer;
