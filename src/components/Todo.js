import { useState } from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoItems from './TodoItems/TodoItems';

import './Todo.scss';

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

  const todoItemDeleteHandler = id => {
    const itemIndex = todoItems.findIndex(item => item.id === id);

    setTodoItems(prevTodos => [...prevTodos.splice(itemIndex, 1)]);
  };

  return (
    <div className="container">
      <div className="todo">
        <TodoForm onFormSubmit={formSubmitHandler} />

        <TodoItems todos={todoItems} onTodoItemDelete={todoItemDeleteHandler} />
      </div>
    </div>
  );
}

export default Todo;
