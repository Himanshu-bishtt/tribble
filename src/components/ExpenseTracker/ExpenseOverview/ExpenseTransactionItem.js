import React from 'react';

import icons from '../../../static/icons/icons.svg';
import styles from './ExpenseTransactionItem.module.scss';

const ExpenseTransactionItem = props => {
  return (
    <div className={styles['transaction__item']}>
      <svg className={styles['transaction__item--icon']}>
        <use href={`${icons}#icon-truck`}></use>
      </svg>
      <div className={styles['transaction__item--details']}>
        <h3 className={styles['transaction__item--name']}>{props.name}</h3>
        <p className={styles['transaction__item--date']}>
          {`${props.date} at ${props.time}`}
        </p>
      </div>
      <h3 className={styles['transaction__item--category']}>
        {props.category}
      </h3>
      <div
        style={props.type === 'Expense' ? { color: 'red' } : { color: 'green' }}
        className={styles['transaction__item--amount']}
      >
        ${props.amount}
      </div>
    </div>
  );
};

export default ExpenseTransactionItem;
