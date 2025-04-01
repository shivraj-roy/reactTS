import { FC } from "react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

const Todos: FC<{ items: Todo[] }> = ({ items }) => {
   return (
      <ul>
         {items.map((item) => (
            <TodoItem key={item.id} text={item.title} />
         ))}
      </ul>
   );
};
export default Todos;
