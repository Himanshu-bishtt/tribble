import React, { useState } from 'react';

import ExpenseMenu from '../ExpenseMenu/ExpenseMenu';
import ExpenseOverview from '../ExpenseOverview/ExpenseOverview';
import ExpenseAdd from '../ExpenseAdd/ExpenseAdd';

const Expense = () => {
  const [content, setContent] = useState(1);

  const menuButtonHandler = itemId => {
    setContent(itemId);
  };

  return (
    <React.Fragment>
      <ExpenseMenu menuButtonHandler={menuButtonHandler} />
      {content === 1 ? <ExpenseOverview /> : <ExpenseAdd />}
    </React.Fragment>
  );
};

export default Expense;
