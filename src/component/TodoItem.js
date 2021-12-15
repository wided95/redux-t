import React from "react";
import { useDispatch } from "react-redux";
import { doneTask } from "../redux/todoSlice/TodoSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
  return (
    <div className={`todo-item ${todo.isDone?"Done":"undone"} `}>
      <div className="text">
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <span onClick={()=>dispatch(doneTask({id:todo.id}))}>{todo.isDone ? "Done" : "Not Done"}</span>
      <button onClick={()=>dispatch(removeTask({id:todo.id}))}>Remove</button>
    </div>
  );
};

export default TodoItem;
