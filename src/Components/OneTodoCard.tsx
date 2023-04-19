// import React, { useEffect, useRef, useState } from "react";
// import { AiFillEdit } from "react-icons/ai";
// import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
// import { MdAutoDelete } from "react-icons/md";
// import "./styles.css";
// import { Todo } from "./Todo";
// type Props = {
//   task: Todo;
//   tasks: Todo[];
//   setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
// };

// const OneTodoCard: React.FC<Props> = ({ task, tasks, setTasks }) => {
//   const [edit, setEdit] = useState<boolean>(false);
//   const [editTasks, setEditTasks] = useState<string>(task.name);

//   const handleDone = (id: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, isDone: !task.isDone } : task
//       )
//     );
//   };

//   const handleDelete = (id: number) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const handleSubmit = (e: React.FormEvent, id: number) => {
//     e.preventDefault();
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, task: editTasks } : task
//       )
//     );
//     setEdit(false);
//   };

//   const inputRef = useRef <HTMLInputElement>(null);

//   useEffect(() => {
//     inputRef.current?.focus()
//   }, [edit])

//   return (
//     <form className="todos_single" onSubmit={(e) => handleSubmit(e, task.id)}>
//       {edit ? (
//         <input
//           ref={inputRef}
//           value={editTasks}
//           onChange={(e) => setEditTasks(e.target.value)}
//           className="todos_single_text"
//         />
//       ) : task.isDone ? (
//         <s className="todos_single_text">{task.name}</s>
//       ) : (
//         <span className="todos_single_text">{task.name}</span>
//       )}

//       <div>
//         <span
//           className="icon"
//           onClick={() => {
//             if (!edit && !task.isDone) {
//               setEdit(!edit);
//             }
//           }}
//         >
//           <AiFillEdit />
//         </span>
//         <span className="icon" onClick={() => handleDelete(task.id)}>
//           <MdAutoDelete />
//         </span>
//         <span className="icon" onClick={() => handleDone(task.id)}>
//           <IoCheckmarkDoneCircleSharp />
//         </span>
//       </div>
//     </form>
//   );
// };

// export default OneTodoCard;

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "./Todo";

const OneTodoCard: React.FC<{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default OneTodoCard;
