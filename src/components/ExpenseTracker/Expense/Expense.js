import React, { useContext } from 'react';

import ExpenseContext from '../../../store/ExpenseContext';
import ExpenseMenu from '../ExpenseMenu/ExpenseMenu';
import ExpenseOverview from '../ExpenseOverview/ExpenseOverview';
import ExpenseAdd from '../ExpenseAdd/ExpenseAdd';

const Expense = () => {
  const expenseCtx = useContext(ExpenseContext);

  let content = '';

  if (expenseCtx.expenseContent === 1) content = <ExpenseOverview />;
  if (expenseCtx.expenseContent === 2)
    content = <ExpenseAdd addExpenseHandler={expenseCtx.addExpenseHandler} />;
  if (expenseCtx.expenseContent === 3) console.log('Profile');

  return (
    <React.Fragment>
      <div className="container">
        <ExpenseMenu menuButtonHandler={expenseCtx.menuButtonHandler} />
        {content}
      </div>
    </React.Fragment>
  );
};

export default Expense;
