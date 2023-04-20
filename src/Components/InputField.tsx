import { useRef } from "react";
import React from "react";


interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) =>{

  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="input" onSubmit={
      (e)=> {handleAdd(e)
      inputRef.current?.blur();
    }}>
      <input ref={inputRef} type="input"  value={todo} onChange={(event) => setTodo(event.target.value)} placeholder="Enter your task" className="input__box"/>
      <button className="input__submit" type="submit">Go</button>

    </form>
  );
}

export default InputField;
