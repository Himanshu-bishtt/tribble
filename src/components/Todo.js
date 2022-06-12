import TodoForm from './TodoForm/TodoForm';
import TodoItems from './TodoItems/TodoItems';

import './Todo.scss';
import { useState } from 'react';

const TODO_ITEMS = [
  {
    id: 'ID' + Math.ceil(Math.random() * 100000),
    name: 'Football Match',
    finishingDate: new Date(2022, 7, 15),
    category: 'Important',
    creatingDate: new Date(),
    description: 'Some text about the todo item that is being added.',
  },
];

function Todo() {
  const [todoItems, setTodoItems] = useState(TODO_ITEMS);

  const formSubmitHandler = todo => {
    const item = {
      id: 'ID' + Math.ceil(Math.random() * 100000),
      ...todo,
    };

    setTodoItems(prevTodos => [item, ...prevTodos]);
  };
  return (
    <div className="container">
      <div className="todo">
        <TodoForm onFormSubmit={formSubmitHandler} />

        <TodoItems todos={todoItems} />
      </div>
    </div>
  );
}

export default Todo;
