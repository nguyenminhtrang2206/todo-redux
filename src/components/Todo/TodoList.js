import React from "react";
import { useSelector } from "react-redux";

import { notes } from "../../notes";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const notes = useSelector(state => state);
  const removeHandler = id => {
    console.log(id, "was clicked");
  };
  const doneHandler = id => {
    console.log(id, "was clicked");
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
            <h2>
              {note.id}. {note.title}
            </h2>
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