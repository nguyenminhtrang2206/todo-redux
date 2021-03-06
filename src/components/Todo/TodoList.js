import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actionTypes from "..//store/actions";

import classes from "./TodoList.module.css";

const TodoList = () => {
  const notes = useSelector(state => state.notes);

  const dispatch = useDispatch();

  const removeHandler = id => {
    dispatch({
      type: actionTypes.REMOVE_TODO,
      payload: id,
    });
  };
  const doneHandler = id => {
    dispatch({
      type: actionTypes.DONE_TODO,
      payload: id,
    });
  };

  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      {notes.map(note => {
        return (
          <div
            onClick={() => doneHandler(note.id)}
            className={`${classes.todo} ${
              note.done ? classes.done : classes.notDone
            }`}
            key={note.id}
          >
            <h2>{note.title}</h2>
            <p>{note.task}</p>
            <span
              onClick={() => removeHandler(note.id)}
              className={`material-icons ${classes.delete}`}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
