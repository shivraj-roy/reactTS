import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./types/todo";
import TodoContextProvider from "./context/todo-context";

function App() {
   const [todos, setTodos] = useState<Todo[]>([]);

   const addTodoHandler = (todoText: string) => {
      const newTodo: Todo = { id: Math.random(), title: todoText };
      setTodos((prevTodos) => {
         return prevTodos.concat(newTodo);
      });
   };
   const removeTodoHandler = (todoId: number) => {
      setTodos((prevTodos) => {
         return prevTodos.filter((todo) => todo.id !== todoId);
      });
   };

   return (
      <TodoContextProvider>
         <NewTodo onAddTodo={addTodoHandler} />
         <Todos items={todos} onRemoveTodo={removeTodoHandler} />
      </TodoContextProvider>
   );
}

export default App;
