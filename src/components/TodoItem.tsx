import { FC } from "react";
import classes from "./TodoItem.module.css";

const TodoItem: FC<{
   text: string;
   id: number;
   onRemove: (ids: number) => void;
}> = ({ text, id, onRemove }) => {
   const removeTodo = () => {
      onRemove(id);
   };
   return (
      <li onClick={removeTodo} className={classes.item}>
         {text}
      </li>
   );
};
export default TodoItem;
