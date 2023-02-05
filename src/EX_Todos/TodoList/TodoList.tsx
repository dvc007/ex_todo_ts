import React from "react";
import { I_TodoListComponent } from "../interface/interfaceExTodos";
import TodoItem from "./../TodoItem/TodoItem";

export default function TodoList({
  todos,
  handleRemoveTodo,
}: I_TodoListComponent) {
  console.log(todos);
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                isComplated
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => {
              return (
                <TodoItem handleRemoveTodo={handleRemoveTodo} todo={item} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
