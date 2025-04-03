import { FC, useContext } from "react";
import { TodoContext } from "../context/ctx";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: FC = () => {
   const { items } = useContext(TodoContext);

   return (
      <ul className={classes.todos}>
         {items.map((item) => (
            <TodoItem key={item.id} id={item.id} text={item.title} />
         ))}
      </ul>
   );
};
export default Todos;
