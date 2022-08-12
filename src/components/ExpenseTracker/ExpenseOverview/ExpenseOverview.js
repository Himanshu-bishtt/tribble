import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseRecentTransactions from './ExpenseRecentTransactions';
import ExpenseChart from '../ExpenseChart/ExpenseChart';

import styles from './ExpenseOverview.module.scss';

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
