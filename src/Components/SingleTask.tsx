import React, { useEffect, useRef } from 'react';
import {useState} from "react";
import {AiFillEdit} from "react-icons/ai";
import {AiFillDelete} from "react-icons/ai";
import {MdDone} from "react-icons/md";


type Props = {
    todo: Task;
    todos: Task[];
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);


    const handleDone = (id: number) =>{
        setTodos(todos.map((todo)=>todo.id===id? {...todo, isDone:!todo.isDone}: todo)
   ) };

   const handleDelete = (id: number) =>{
    setTodos(todos.filter((todo)=>todo.id !== id)); 
  };
  

  const handleEdit = (event:React.FormEvent, id: number) =>{
      event.preventDefault();
      setTodos(
        todos.map((todo) =>(
        todo.id===id? {...todo, todo:editTodo}: todo
      )));
      setEdit(false);
  };

   const inputRef = useRef<HTMLInputElement>(null);
   
   useEffect(() => {
    inputRef.current?.focus();
   }, [edit]);

   
    return (
    <form className="todos__single" onSubmit={(event) => handleEdit(event, todo.id)}>

        {edit? (
                <input ref={inputRef} value={editTodo} onChange={(event)=> setEditTodo(event.target.value)} className="todos__single--text"/>
            ): todo.isDone ? (<s className="todos__single--text">{todo.todo}</s>):
             (<span className="todos__single--text">{todo.todo}</span>)
        }



        
            
        
        <div>
            <span className="icon" onClick={() => { if (!edit && !todo.isDone)
            {
                setEdit(!edit); 
            }
        
            }}>
                <AiFillEdit />
                </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
            <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /></span>
        </div>
    </form>
  )
}

export default SingleTodo