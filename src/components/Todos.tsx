import { FC } from "react";
import { Todo } from "../types/todo";

const Todos: FC<{ items: Todo[] }> = ({ items }) => {
   return (
      <ul>
         {items.map((item) => (
            <li key={item.id}>{item.title}</li>
         ))}
      </ul>
   );
};
export default Todos;
