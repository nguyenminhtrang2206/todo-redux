import * as actionTypes from "./actions";

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
    {
      id: 4,
      title: "title 4",
      task: "task 4",
      done: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        notes: [
          ...state.notes,
          {
            id: new Date().valueOf(),
            ...action.todo,
            done: false,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
