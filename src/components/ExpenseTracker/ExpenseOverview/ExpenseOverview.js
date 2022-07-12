import React from 'react';

import styles from './ExpenseOverview.module.scss';
import ExpenseRecentTransactions from './ExpenseRecentTransactions';
import ExpenseSummary from './ExpenseSummary';

const ExpenseOverview = props => {
  return (
    <div className={styles['expense__overview']}>
      <ExpenseSummary />
      <ExpenseRecentTransactions transactions={props.transactions} />
    </div>
  );
};

export default ExpenseOverview;
