import React from "react";
import { Todo } from "../types/todo";
import { TodoContextType } from "../types/context";
import { TodoContext } from "./context";

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [todos, setTodos] = React.useState<Todo[]>([]);

   const addTodoHandler = (todoText: string) => {
      const newTodo: Todo = { id: Math.random(), title: todoText };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
   };

   const removeTodoHandler = (todoId: number) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
   };

   const todoCtx: TodoContextType = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler,
   };

   return (
      <TodoContext.Provider value={todoCtx}>{children}</TodoContext.Provider>
   );
};
export default TodoContextProvider;
