import React, { useEffect, useState } from 'react';
import { generateRandomNumber } from '../config/config';

const TodoContext = React.createContext({
  todoItems: [],
  formShowing: false,
  toast: {
    flag: false,
    message: '',
    type: '',
  },
  formSubmitHandler: todo => {},
  todoItemDeleteHandler: id => {},
  showFormHandler: () => {},
  hideFormHandler: () => {},
  showToast: () => {},
  hideToast: () => {},
});

export const TodoContextProvider = props => {
  const [todoItems, setTodoItems] = useState([]);
  const [formShowing, setFormShowing] = useState(false);
  const [toast, setToast] = useState({
    flag: false,
    message: '',
    type: '',
  });

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

  const showToast = (message, type) => {
    setToast({
      flag: true,
      message,
      type,
    });
  };

  const hideToast = () => {
    setToast({
      flag: false,
      message: '',
      type: '',
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todoItems,
        formShowing,
        formSubmitHandler,
        todoItemDeleteHandler,
        showFormHandler,
        hideFormHandler,
        toast,
        showToast,
        hideToast,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
