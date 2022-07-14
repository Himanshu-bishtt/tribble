import React, { useState } from 'react';

import Header from '../TodoApp/Header/Header';
import Todo from '../TodoApp/Todo/Todo';
import Expense from '../ExpenseTracker/Expense/Expense';
import { TodoContextProvider } from '../../store/TodoContext';

const Main = () => {
  const [app, setApp] = useState(1);

  const menuItemHandler = item => {
    console.log(item);
    setApp(item);
  };

  let content;

  if (app === 1)
    content = (
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    );
  if (app === 2) content = <Expense />;
  if (app === 3) console.log('Test');

  return (
    <React.Fragment>
      <Header menuItemHandler={menuItemHandler} />
      {content}
    </React.Fragment>
  );
};

export default Main;
