import React from 'react';

import Button from '../../UI/Button/Button';

import styles from './ExpenseAdd.module.scss';

function ExpenseAdd() {
  return (
    <form className={styles['expense__form']}>
      <div className={styles['expense__form--item']}>
        <label htmlFor="expense-name">Name</label>
        <input
          type="text"
          placeholder="Enter expense name"
          id="expense-name"
        ></input>
      </div>

      <div className={styles['expense__form--item']}>
        <label htmlFor="expense-amount">Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          id="expense-amount"
        ></input>
      </div>

      <div className={styles['expense__form--item']}>
        <label htmlFor="expense-category">Category</label>
        <input
          type="text"
          placeholder="Enter category"
          id="expense-category"
        ></input>
      </div>

      <div className={styles['expense__form--item']}>
        <label htmlFor="expense-type">Type</label>
        <select id="expense-type">
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      <div className={styles['expense__form--item']}>
        <label id="expense-date">Date</label>
        <input type="date" id="expense-date"></input>
      </div>

      <div className={styles['expense__form--item']}>
        <Button type="submit" className={styles['expense__form--submit']}>
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ExpenseAdd;
