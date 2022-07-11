import React from 'react';

import icons from '../../../static/icons/icons.svg';
import styles from './ExpenseSummary.module.scss';

const ExpenseSummary = () => {
  return (
    <div className={styles['expense__summary']}>
      <div className={styles['summary__item']}>
        <svg className={styles['summary__item--logo']}>
          <use href={`${icons}#icon-archive`}></use>
        </svg>
        <div className={styles['summary__item--details']}>
          <h2>$13,652,000</h2>
          <p>Total Balance</p>
        </div>
      </div>

      <div className={styles['summary__item']}>
        <svg className={styles['summary__item--logo']}>
          <use href={`${icons}#icon-arrow-down`}></use>
        </svg>
        <div className={styles['summary__item--details']}>
          <h2>$12,452,000</h2>
          <p>Total Income</p>
        </div>
      </div>

      <div className={styles['summary__item']}>
        <svg className={styles['summary__item--logo']}>
          <use href={`${icons}#icon-arrow-up`}></use>
        </svg>
        <div className={styles['summary__item--details']}>
          <h2>$1,200,000</h2>
          <p>Total Expense</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
