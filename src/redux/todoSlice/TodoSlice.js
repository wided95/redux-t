import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [
    {
      id: Math.random(),
      title: "todo item 1",
      description: "description todo item1",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo item 2",
      description: "description todo item2",
      isDone: false,
    },
    {
      id: Math.random(),
      title: "todo item 3",
      description: "description todo item3",
      isDone: true,
    },
  ],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todolist.push(action.payload);
    },
    removeTask: (state, action) => {
      state.todolist = state.todolist.filter(
        (el) => el.id !== action.payload.id
      );
    },
    doneTask: (state, action) => {
      let i = state.todolist.findIndex((el) => el.id === action.payload.id);
      state.todolist[i] = {
        ...state.todolist[i],
        isDone: !state.todolist[i].isDone,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, removeTask, doneTask } = TodoSlice.actions;

export default TodoSlice.reducer;
