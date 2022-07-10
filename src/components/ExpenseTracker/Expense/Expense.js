import React, { useState } from 'react';

import ExpenseMenu from '../ExpenseMenu/ExpenseMenu';
import ExpenseOverview from '../Overview/ExpenseOverview';
import AddExpense from '../Add/AddExpense';

const Expense = () => {
  const [content, setContent] = useState(1);

  const menuButtonHandler = itemId => {
    setContent(itemId);
  };

  return (
    <React.Fragment>
      <ExpenseMenu menuButtonHandler={menuButtonHandler} />
      {content === 1 ? <ExpenseOverview /> : <AddExpense />}
    </React.Fragment>
  );
};

export default Expense;
