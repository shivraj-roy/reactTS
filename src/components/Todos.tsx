import { FC } from "react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: FC<{ items: Todo[] }> = ({ items }) => {
   return (
      <ul className={classes.todos}>
         {items.map((item) => (
            <TodoItem key={item.id} text={item.title} />
         ))}
      </ul>
   );
};
export default Todos;
