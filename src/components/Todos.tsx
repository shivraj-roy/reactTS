import { FC } from "react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: FC<{ items: Todo[]; onRemoveTodo: (id: number) => void }> = ({
   items,
   onRemoveTodo,
}) => {
   return (
      <ul className={classes.todos}>
         {items.map((item) => (
            <TodoItem
               key={item.id}
               id={item.id}
               text={item.title}
               onRemove={onRemoveTodo}
            />
         ))}
      </ul>
   );
};
export default Todos;
