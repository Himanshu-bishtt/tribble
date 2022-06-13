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
  {
    id: 'ID' + Math.ceil(Math.random() * 100000),
    name: 'Football Practice',
    finishingDate: new Date(2022, 7, 23),
    category: 'Sports',
    creatingDate: new Date(),
    description: 'Football practice with Uttrakhan FC.',
  },
  {
    id: 'ID' + Math.ceil(Math.random() * 100000),
    name: 'Fornite with Harsh',
    finishingDate: new Date(2022, 7, 31),
    category: 'Entertainment',
    creatingDate: new Date(),
    description: 'Fortnite new season with food.',
  },
];

function Todo() {
  const [todoItems, setTodoItems] = useState(TODO_ITEMS);

  const [formShowing, setFormShowing] = useState(false);

  const formSubmitHandler = todo => {
    const item = {
      id: 'ID' + Math.ceil(Math.random() * 100000),
      ...todo,
    };

    setTodoItems(prevTodos => [item, ...prevTodos]);

    setFormShowing(false);
  };

  const todoItemDeleteHandler = id => {
    setTodoItems(prevTodos => [...prevTodos.filter(item => item.id !== id)]);
  };

  const showFormHandler = () => {
    setFormShowing(true);
  };

  const hideFormHandler = () => {
    setFormShowing(false);
  };

  return (
    <div className="container">
      <div className="todo">
        {!formShowing ? (
          <button className="btn todo__form--btn" onClick={showFormHandler}>
            Add New Todo
          </button>
        ) : (
          <TodoForm
            onFormSubmit={formSubmitHandler}
            onFormCancel={hideFormHandler}
          />
        )}

        <TodoItems todos={todoItems} onTodoItemDelete={todoItemDeleteHandler} />
      </div>
    </div>
  );
}

export default Todo;
