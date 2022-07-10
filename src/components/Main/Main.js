import React, { useEffect, useState } from 'react';

import Header from '../TodoApp/Header/Header';
import Todo from '../TodoApp/Todo/Todo';
import Expense from '../ExpenseTracker/Expense';

const Main = () => {
  const [app, setApp] = useState(1);

  const menuItemHandler = item => {
    console.log(item);
    setApp(item);
  };

  return (
    <React.Fragment>
      <Header menuItemHandler={menuItemHandler} />
      {app === 1 ? <Todo /> : <Expense />}
    </React.Fragment>
  );
};

export default Main;
