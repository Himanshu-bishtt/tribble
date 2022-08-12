import React from 'react';
import ExpenseSummary from './ExpenseSummary';
import ExpenseRecentTransactions from './ExpenseRecentTransactions';
import ExpenseChart from '../ExpenseChart/ExpenseChart';

import styles from './ExpenseOverview.module.scss';

const ExpenseOverview = () => {
  return (
    <div className={styles['expense__overview']}>
      <ExpenseSummary />
      <div className={styles['expense__overview--data']}>
        <ExpenseRecentTransactions />
        <ExpenseChart />
      </div>
    </div>
  );
};

export default ExpenseOverview;
