import { Todo } from "./todo";

export type TodoContextType = {
   items: Todo[];
   addTodo: (todoText: string) => void;
   removeTodo: (todoId: number) => void;
};
