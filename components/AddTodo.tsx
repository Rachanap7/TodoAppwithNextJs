"use client";
import { FormEvent, useState } from "react";
import {useTodo} from '../store/todos'

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const {handleTodo} = useTodo();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleTodo(todo);
    setTodo("");
  };
  return (
    <div className="add-todo">
      <div>
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit" onClick={handleSubmit} className="btn">
          ADD TODO
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
