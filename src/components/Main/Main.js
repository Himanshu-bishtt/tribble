import React, { useState } from 'react';

import Header from '../Header/Header';
import Todo from '../TodoApp/Todo/Todo';
import Expense from '../ExpenseTracker/Expense/Expense';
import { TodoContextProvider } from '../../store/TodoContext';
import { ExpenseContextProvider } from '../../store/ExpenseContext';

const Main = () => {
  const [app, setApp] = useState(1);

  const menuItemHandler = item => {
    setApp(item);
  };

  let content;

  if (app === 1)
    content = (
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    );
  if (app === 2)
    content = (
      <ExpenseContextProvider>
        <Expense />
      </ExpenseContextProvider>
    );
  if (app === 3) console.log('Calculator');

  return (
    <React.Fragment>
      <Header menuItemHandler={menuItemHandler} />
      {content}
    </React.Fragment>
  );
};

export default Main;

// WORK ON ExpenseContext
