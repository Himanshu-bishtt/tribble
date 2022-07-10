import { useEffect, useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoItems from '../TodoItems/TodoItems';

import './Todo.scss';
import styles from '../TodoForm/TodoForm.module.scss';
import Button from '../../UI/Button';

const generateRandomNumber = () => Math.ceil(Math.random() * 100000);

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);

  const [formShowing, setFormShowing] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));

    if (!items) return;

    if (items.length !== 0) {
      setTodoItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todoItems));
  }, [todoItems]);

  const formSubmitHandler = todo => {
    const item = {
      id: 'ID' + generateRandomNumber(),
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
          <Button
            className={styles['todo__form--btn']}
            onClick={showFormHandler}
          >
            Add New Todo
          </Button>
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
};

export default Todo;
