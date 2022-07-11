import React from 'react';
import Card from '../../UI/Card';

import icones from '../../../static/icons/icons.svg';
import styles from './ExpenseOverview.module.scss';

function ExpenseOverview() {
  return (
    <div className={styles['expense__overview']}>
      <Card className={styles['expense__overview--card']}>
        <h1 className={styles['expense__overview--name']}>Total Balance</h1>
        <h3 className={styles['expense__overview--amount']}>$25,000</h3>
      </Card>
      <Card className={styles['expense__overview--card']}>
        <h1 className={styles['expense__overview--name']}>Total Income</h1>
        <h3
          className={`${styles['expense__overview--amount']} ${styles['expense__overview--amount-income']}`}
        >
          +$25,000
        </h3>
        <svg
          className={`${styles['expense__overview--icon']} ${styles['expense__overview--icon-income']}`}
        >
          <use href={`${icones}#icon-arrow-down`}></use>
        </svg>
      </Card>
      <Card className={styles['expense__overview--card']}>
        <h1 className={styles['expense__overview--name']}>Total Expense</h1>
        <h3
          className={`${styles['expense__overview--amount']} ${styles['expense__overview--amount-expense']}`}
        >
          -$25,000
        </h3>
        <svg
          className={`${styles['expense__overview--icon']} ${styles['expense__overview--icon-expense']}`}
        >
          <use href={`${icones}#icon-arrow-up`}></use>
        </svg>
      </Card>
    </div>
  );
}

export default ExpenseOverview;
