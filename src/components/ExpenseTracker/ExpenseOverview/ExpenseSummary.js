import React, { useContext } from 'react';
import ExpenseContext from '../../../store/ExpenseContext';

import icons from '../../../static/icons/icons.svg';
import styles from './ExpenseSummary.module.scss';

const ExpenseSummary = props => {
  const expenseCtx = useContext(ExpenseContext);

  const income = expenseCtx.transactions.reduce((prev, cur) => {
    return cur.type === 'Income' ? prev + +cur.amount : prev;
  }, 0);

  const expense = expenseCtx.transactions.reduce((prev, cur) => {
    return cur.type === 'Expense' ? prev + +cur.amount : prev;
  }, 0);

  return (
    <div className={styles['expense__summary']}>
      <div className={styles['summary__item']}>
        <svg className={styles['summary__item--logo']}>
          <use href={`${icons}#icon-archive`}></use>
        </svg>
        <div className={styles['summary__item--details']}>
          <h2>${income - expense}</h2>
          <p>Total Balance</p>
        </div>
      </div>

      <div className={styles['summary__item']}>
        <svg className={styles['summary__item--logo']}>
          <use href={`${icons}#icon-arrow-down`}></use>
        </svg>
        <div className={styles['summary__item--details']}>
          <h2>${income}</h2>
          <p>Total Income</p>
        </div>
      </div>

      <div className={styles['summary__item']}>
        <svg className={styles['summary__item--logo']}>
          <use href={`${icons}#icon-arrow-up`}></use>
        </svg>
        <div className={styles['summary__item--details']}>
          <h2>${expense}</h2>
          <p>Total Expense</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
