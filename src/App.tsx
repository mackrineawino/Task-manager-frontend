

import React, { useState, useEffect } from "react";
import "./App.css";
import NewTask from "./Components/NewTask";
import TodoList from "./Components/TodoList";
import { Todo } from "./Components/Todo";
import Header from "./Components/Header";
import Login from "./Components/Login";

const App: React.FC = () => {
  const [user, setUser] = useState<null>(null);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  useEffect(() => {
    fetch("/tasks")
      .then((r) => r.json())
      .then((todo) => {
        console.log(todo)
        setTodos(todo);
      });
  }, []);

  function handleLogout() {
    setUser(null);
  }

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };


  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Header user={user} setUser={setUser} onLogout={handleLogout} />
      <NewTask todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
