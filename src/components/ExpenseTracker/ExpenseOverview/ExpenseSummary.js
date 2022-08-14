import React, { useContext, useState } from 'react';
import ExpenseContext from '../../../store/ExpenseContext';

import icons from '../../../static/icons/icons.svg';
import styles from './ExpenseSummary.module.scss';
import ExpenseModal from '../ExpenseModal/ExpenseModal';

const ExpenseSummary = () => {
  const expenseCtx = useContext(ExpenseContext);

  const [modalData, setModalData] = useState({
    flag: false,
    data: [],
  });

  const income = expenseCtx.transactions.reduce((prev, cur) => {
    return cur.type === 'Income' ? prev + +cur.amount : prev;
  }, 0);

  const expense = expenseCtx.transactions.reduce((prev, cur) => {
    return cur.type === 'Expense' ? prev + +cur.amount : prev;
  }, 0);

  const balanceHandler = () => {
    setModalData({
      flag: true,
      data: expenseCtx.transactions,
    });
  };

  const incomeHandler = () => {
    setModalData({
      flag: true,
      data: expenseCtx.transactions.filter(
        transaction => transaction.type === 'Income'
      ),
    });
  };

  const expenseHandler = () => {
    setModalData({
      flag: true,
      data: expenseCtx.transactions.filter(
        transaction => transaction.type === 'Expense'
      ),
    });
  };

  const modalCloseHandler = () => {
    setModalData({
      flag: false,
      data: [],
    });
  };

  return (
    <React.Fragment>
      {modalData.flag && (
        <ExpenseModal onClose={modalCloseHandler} data={modalData.data} />
      )}
      <div className={styles['expense__summary']}>
        <div className={styles['summary__item']} onClick={balanceHandler}>
          <svg className={styles['summary__item--logo']}>
            <use href={`${icons}#icon-archive`}></use>
          </svg>
          <div className={styles['summary__item--details']}>
            <h2>${income - expense}</h2>
            <p>Total Balance</p>
          </div>
        </div>

        <div className={styles['summary__item']} onClick={incomeHandler}>
          <svg className={styles['summary__item--logo']}>
            <use href={`${icons}#icon-arrow-down`}></use>
          </svg>
          <div className={styles['summary__item--details']}>
            <h2>${income}</h2>
            <p>Total Income</p>
          </div>
        </div>

        <div className={styles['summary__item']} onClick={expenseHandler}>
          <svg className={styles['summary__item--logo']}>
            <use href={`${icons}#icon-arrow-up`}></use>
          </svg>
          <div className={styles['summary__item--details']}>
            <h2>${expense}</h2>
            <p>Total Expense</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExpenseSummary;
