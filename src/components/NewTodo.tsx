import { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (todoText: string) => void }> = ({
   onAddTodo,
}) => {
   const todoTextRef = useRef<HTMLInputElement>(null);

   const todoSubmitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      const enteredText = todoTextRef.current!.value;
      if (enteredText.trim().length === 0) {
         return;
      }
      onAddTodo(enteredText);
      todoTextRef.current!.value = "";
   };
   return (
      <form onSubmit={todoSubmitHandler} className={classes.form}>
         <label htmlFor="text">Todo Text</label>
         <input type="text" id="text" ref={todoTextRef} />
         <button>Add Todo</button>
      </form>
   );
};
export default NewTodo;
