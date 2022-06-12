import TodoForm from "./TodoForm/TodoForm";
import TodoItems from "./TodoItems/TodoItems";

import "./Todo.scss";

function Todo() {
  const items = [
    {
      id: "id" + Math.ceil(Math.random() * 100000),
      name: "Football Match",
      finishingDate: new Date(2022, 7, 15),
      category: "Important",
      creatingDate: new Date(),
      description: "Some text about the todo item that is being added.",
    },
  ];
  return (
    <div className="container">
      <div className="todo">
        <TodoForm />

        <TodoItems todos={items} />
      </div>
    </div>
  );
}

export default Todo;
