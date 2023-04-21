import React, { useState, useEffect } from "react";
import "./App.css";
// import NewTask from "./Components/NewTask";
// import TodoList from "./Components/TodoList";
// import { Todo } from "./Components/Todo";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import MainContainer from "./Components/MainContainer";
import { Route, Routes } from "react-router-dom";
import { Todo } from "./Model/Todo";
import InputField from "./Components/InputField";

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
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((res) => {
        setTodos(res);
      });
  }, []);

  console.log(todo);

  function handleLogout() {
    setUser(null);
  }

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), name:todo, completed: false, user_id: Date.now(), }]);
      setTodo("");
    }
  };

  if (!user) return <LandingPage onLogin={setUser} />;

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Header user={user} setUser={setUser} onLogout={handleLogout} />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <Routes>
        <Route
          path="*"
          element={
            <MainContainer
              todo={todo}
              setTodo={setTodo}
              handleAdd={handleAdd}
              todos={todos}
              setTodos={setTodos}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
