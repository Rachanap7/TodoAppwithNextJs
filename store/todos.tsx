"use client";

import { error } from "console";
import { ReactNode, useState, createContext, useContext } from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdDate: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleTodo: (task: string) => void;
  deleteTodo: (id: string) => void;
  toggleIsComplete: (id:string)=>void;
};

export const todoContext = createContext<TodosContext | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodo] = useState([]);

  function handleTodo(task: string) {
    setTodo((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdDate: new Date(),
        },
        ...prev,
      ];
      console.log(newTodos);
      return newTodos;
    });
  }

  function deleteTodo(id: string) {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  function toggleIsComplete(id: string) {
    setTodo((prev) => {
      const updateTodo = prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

      return updateTodo;
    });
  }

  return (
    <todoContext.Provider value={{ todos, handleTodo, deleteTodo,toggleIsComplete }}>
      {children}
    </todoContext.Provider>
  );
}

export function useTodo() {
  const todoContextvalue = useContext(todoContext);
  if (!todoContextvalue) {
    throw new Error("usetodo used out of provider");
  }
  return todoContextvalue;
}
