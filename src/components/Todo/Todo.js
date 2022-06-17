import { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoItems from '../TodoItems/TodoItems';

import './Todo.scss';

const generateRandomNumber = () => Math.ceil(Math.random() * 100000);

const init = () => {
  const data = JSON.parse(localStorage.getItem('items'));

  if (!data) return;

  TODO_ITEMS = data.map(item => {
    return {
      ...item,
      finishingDate: new Date(item.finishingDate),
      creatingDate: new Date(item.creatingDate),
    };
  });
};

let TODO_ITEMS = [
  {
    id: 'ID' + generateRandomNumber(),
    name: 'Football Match',
    finishingDate: new Date(2022, 7, 15),
    category: 'Important',
    creatingDate: new Date(),
    description: 'Some text about the todo item that is being added.',
  },
  {
    id: 'ID' + generateRandomNumber(),
    name: 'Football Practice',
    finishingDate: new Date(2022, 7, 23),
    category: 'Sports',
    creatingDate: new Date(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 'ID' + generateRandomNumber(),
    name: 'Fornite with Harsh',
    finishingDate: new Date(2022, 7, 31),
    category: 'Entertainment',
    creatingDate: new Date(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
];

function Todo() {
  init();

  const [todoItems, setTodoItems] = useState(TODO_ITEMS);

  const [formShowing, setFormShowing] = useState(false);

  localStorage.setItem('items', JSON.stringify(todoItems));

  const formSubmitHandler = todo => {
    const item = {
      id: 'ID' + generateRandomNumber(),
      ...todo,
    };

    setTodoItems(prevTodos => [item, ...prevTodos]);

    localStorage.setItem('items', JSON.stringify(todoItems));

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
