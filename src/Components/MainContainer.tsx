import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Todo } from "../Model/Todo";
import InputField from "./InputField";
import TodoList from "./TodoList";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const MainContainer: React.FC<Props> = ({
  todos,
  setTodos,
  handleAdd,
  setTodo,
  todo,
}) => {
  return (
    <div>
      
      <Routes>
        <Route
          path="/field"
          element={<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />}
        />
        <Route
          path="/tasks"
          element={<TodoList todos={todos} setTodos={setTodos} />}
        />
      </Routes>
      
    </div>
  );
};

export default MainContainer;
