import { FC, useContext } from "react";
import { TodoContext } from "../context/ctx";
import classes from "./TodoItem.module.css";

const TodoItem: FC<{
   text: string;
   id: number;
}> = ({ text, id }) => {
   const { removeTodo } = useContext(TodoContext);

   const removeTodoHandler = () => {
      removeTodo(id);
   };
   return (
      <li onClick={removeTodoHandler} className={classes.item}>
         {text}
      </li>
   );
};
export default TodoItem;
