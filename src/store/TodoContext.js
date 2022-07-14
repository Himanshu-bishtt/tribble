import React, { useEffect, useState } from 'react';

const TodoContext = React.createContext({
  todoItems: [],
  formShowing: false,
  formSubmitHandler: todo => {},
  todoItemDeleteHandler: id => {},
  showFormHandler: () => {},
  hideFormHandler: () => {},
});

export const TodoContextProvider = props => {
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
    <TodoContext.Provider
      value={{
        todoItems,
        formShowing,
        formSubmitHandler,
        todoItemDeleteHandler,
        showFormHandler,
        hideFormHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

const generateRandomNumber = () => Math.ceil(Math.random() * 100000);

export default TodoContext;
