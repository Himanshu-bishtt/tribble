import React from 'react';

import Header from '../TodoApp/Header/Header';
import Todo from '../TodoApp/Todo/Todo';
import Expense from '../ExpenseTracker/Expense';

const Main = () => {
  const menuItemHandler = item => {
    console.log(item);
  };
  return (
    <React.Fragment>
      <Header menuItemHandler={menuItemHandler} />
      <Todo />
      <Expense />
    </React.Fragment>
  );
};

export default Main;
