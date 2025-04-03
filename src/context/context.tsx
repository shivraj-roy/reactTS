import { createContext } from "react";
import { TodoContextType } from "../types/context";

export const TodoContext = createContext<TodoContextType>({
   items: [],
   addTodo: () => {},
   removeTodo: () => {},
});
