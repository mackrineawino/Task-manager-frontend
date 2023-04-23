import React, { useState, useEffect } from "react";
import "./App.css";

// import NewTask from "./Components/NewTask";
// import TodoList from "./Components/TodoList";
// import { Todo } from "./Components/Todo";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import MainContainer from "./Components/MainContainer";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Todo } from "./Model/Todo";
import TodoList from "./Components/TodoList";
import InputField from "./Components/InputField";

const App: React.FC = () => {


  const [user, setUser] = useState<null>(null);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/tasks")
      .then((response) => response.json())
      .then((todos) => {
        console.log(todos);
        setTodos(todos);
      });
  }, []);



  

  const handleLogout = ():void => {
    setUser(null);
  }

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: todos.length +1 , name:todo, completed: false, user_id: Date.now(), }]);
      setTodo("");
    }
  };

  if (!user) return <LandingPage onLogin={setUser} />;

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Header user={user} setUser={setUser} onLogout={handleLogout} />
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    {/* <BrowserRouter> */}
      <Routes>
      <Route
          path="/tasks"
          element={<TodoList todos={todos} setTodos={setTodos} />}
        />
      </Routes>
    
    </div>
  );
};

export default App;
