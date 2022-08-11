import React from 'react';
import ExpenseChart from '../ExpenseChart/ExpenseChart';

import styles from './ExpenseOverview.module.scss';
import ExpenseRecentTransactions from './ExpenseRecentTransactions';
import ExpenseSummary from './ExpenseSummary';

const ExpenseOverview = props => {
  return (
    <div className={styles['expense__overview']}>
      <ExpenseSummary transactions={props.transactions} />
      <div className={styles['expense__overview--data']}>
        <ExpenseRecentTransactions transactions={props.transactions} />
        <ExpenseChart transactions={props.transactions} />
      </div>
    </div>
  );
};

export default ExpenseOverview;
