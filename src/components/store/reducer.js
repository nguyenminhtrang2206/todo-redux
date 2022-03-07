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
            ...action.payload,
            done: false,
          },
        ],
      };
    case actionTypes.REMOVE_TODO:
      const updateArray = state.notes.filter(
        item => item.id !== action.payload
      );
      return {
        ...state,
        notes: updateArray,
      };

    case actionTypes.DONE_TODO:
      const doneToggle = state.notes.map(item => {
        return item.id === action.payload
          ? { ...item, done: !item.done }
          : { ...item };
      });
      return {
        ...state,
        notes: doneToggle,
      };

    default:
      return state;
  }
};

export default reducer;
