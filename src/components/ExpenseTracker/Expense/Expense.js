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
      <div className="container">
        <ExpenseMenu menuButtonHandler={menuButtonHandler} />
        {content === 1 ? <ExpenseOverview /> : <ExpenseAdd />}
      </div>
    </React.Fragment>
  );
};

export default Expense;
