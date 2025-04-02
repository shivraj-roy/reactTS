import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./types/todo";

function App() {
   const [todos, setTodos] = useState<Todo[]>([]);

   const addTodoHandler = (todoText: string) => {
      const newTodo: Todo = { id: Math.random(), title: todoText };
      setTodos((prevTodos) => {
         return prevTodos.concat(newTodo);
      });
   };

   return (
      <>
         <NewTodo onAddTodo={addTodoHandler} />
         <Todos items={todos} />
      </>
   );
}

export default App;
