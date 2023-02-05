export interface I_Todo {
  id: string;
  title: string;
  isComplated: boolean;
}

export interface I_TodoListComponent {
  todos: I_Todo[];
  handleRemoveTodo: (id: string) => void;
}

export interface I_TodoItemComponent {
  todo: I_Todo;
  handleRemoveTodo: (id: string) => void;
}

export interface I_TodoFormComponent {
  handleAddTodo: (todo: I_Todo) => void;
}
