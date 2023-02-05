import React from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import { I_Todo } from "./interface/interfaceExTodos";
import { useState } from "react";
export default function EX_Todos({}) {
  const [todos, setTodos] = useState<I_Todo[]>([
    {
      id: "1",
      title: "Lam Thinh",
      isComplated: true,
    },
    {
      id: "2",
      title: "Lam Thinh 2",
      isComplated: false,
    },
    {
      id: "3",
      title: "Lam Thinh 3",
      isComplated: true,
    },
  ]);

  const handleAddTodo = (newTodo: I_Todo) => {
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleRemoveTodo = (idTodo: string) => {
    let newTodoss = todos.filter((item) => {
      return item.id !== idTodo;
    });
    setTodos(newTodoss);
  };

  const handleCheck = () => {};
  return (
    <div>
      <h1 className="text-center text-red-600 text-3xl">TODO</h1>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList handleRemoveTodo={handleRemoveTodo} todos={todos} />
    </div>
  );
}
