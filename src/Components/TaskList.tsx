import React from 'react'

import "./styles.css";
import SingleTask from './SingleTask';

interface Props{
    todos: Task[];
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {todos.map((todo) =>(
           <SingleTask todo = {todo} key = {todo.id} todos = {todos} setTodos ={setTodos}/>
        ))}

    </div>
  )
}

export default TodoList;