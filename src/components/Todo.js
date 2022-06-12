import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

import "./Todo.scss";
function Todo() {
  return (
    <div className="container">
      <div className="todo">
        <TodoForm />

        <TodoItems />
      </div>
    </div>
  );
}

export default Todo;
