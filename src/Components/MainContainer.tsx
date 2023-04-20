import React from 'react'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: React.FC;
  todos: [];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const MainContainer: React.FC<Props> = ({todos, setTodos, handleAdd, setTodo, todo}) => {
  return (
    <div>MainContainer</div>
  )
}

export default MainContainer