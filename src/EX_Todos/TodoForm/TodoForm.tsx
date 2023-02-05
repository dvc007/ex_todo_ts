import React from "react";
import { useState } from "react";
import { I_Todo, I_TodoFormComponent } from "./../interface/interfaceExTodos";
import { nanoid } from "nanoid";
export default function TodoForm({ handleAddTodo }: I_TodoFormComponent) {
  const [title, setTitle] = useState<string>("");
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    let objectTodo: I_Todo = {
      id: nanoid(),
      title: title,
      isComplated: false,
    };
    handleAddTodo(objectTodo);
    setTitle("");
  };
  return (
    <div className="py-10 text-center flex">
      <input
        onChange={handleOnchange}
        className="p-5 rounded border border-gray-400 grow"
        type="text"
        value={title}
      />
      <button
        onClick={handleSubmit}
        type="button"
        className="bg-black text-white"
      >
        Add Todo
      </button>
    </div>
  );
}
