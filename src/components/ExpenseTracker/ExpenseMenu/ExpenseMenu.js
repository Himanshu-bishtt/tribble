import React from 'react';

import styles from './ExpenseMenu.module.scss';
import icons from '../../../static/icons/icons.svg';
import Button from '../../UI/Button';

const ExpenseMenu = () => {
  const expenseMenuHandler = event => {
    const item = event.target.closest('button');

    if (!item) return;

    console.log(+item.dataset.id);
  };
  return (
    <div className={styles['expense__menu']} onClick={expenseMenuHandler}>
      <Button
        className={styles['expense__menu--item']}
        title="Dashboard"
        id="1"
      >
        <svg>
          <use href={`${icons}#icon-grid`}></use>
        </svg>
        <p>Dashboard</p>
      </Button>
      <Button
        className={styles['expense__menu--item']}
        title="Add Expense"
        id="2"
      >
        <svg>
          <use href={`${icons}#icon-plus`}></use>
        </svg>
      </Button>
      <Button className={styles['expense__menu--item']} title="Profile" id="3">
        <svg>
          <use href={`${icons}#icon-user`}></use>
        </svg>
        <p>Profile</p>
      </Button>
    </div>
  );
};

export default ExpenseMenu;
