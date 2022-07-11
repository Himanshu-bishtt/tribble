import React from 'react';

import styles from './ExpenseOverview.module.scss';
import ExpenseRecentTransactions from './ExpenseRecentTransactions';
import ExpenseSummary from './ExpenseSummary';

const ExpenseOverview = () => {
  return (
    <React.Fragment>
      <ExpenseSummary />
      {/* <ExpenseRecentTransactions /> */}
    </React.Fragment>
  );
};

export default ExpenseOverview;
