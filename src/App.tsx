import Todos from "./components/Todos";
import { Todo } from "./types/todo";

function App() {
   const todos: Todo[] = [
      { id: 1, title: "First Todo" },
      { id: 2, title: "Second Todo" },
   ];

   return (
      <>
         <Todos items={todos} />
      </>
   );
}

export default App;
