import React from 'react'
import { useSelector } from 'react-redux'
import AddTodo from './AddTodo';

const Todolist = () => {
    const todos = useSelector(state => state.todo.todolist);
    console.log(todos);
    return (
        <div className="todo-list">
            <AddTodo/>
           {todos.map((todo)=>(
           <Todolist todo={todo}/>
           ))}
        </div>
    )
}

export default Todolist
