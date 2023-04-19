// import React, { useRef } from "react";
// import "./styles.css";

// interface Props {
//   todo: string;
//   setTodo: React.Dispatch<React.SetStateAction<string>>;
//   handleSubmit: (e: React.FormEvent) => void;
// }

// const NewTask: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   //console.log(todo);

//   return (
//     <form
//       className="input"
//       onSubmit={(e) => {
//         handleSubmit(e);
//         inputRef.current?.blur();
//       }}
//     >
//       <input
//         type="text"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//         placeholder="Enter a new Task"
//         className="input_box"
//         ref={inputRef}
//         required
//       />
//       <button className="input_submit" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default NewTask;

import React, { useRef } from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const NewTask: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Todo"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default NewTask;