import React from 'react';

import styles from './Expense.module.scss';
import icons from '../../static/icons/icons.svg';
import Button from '../UI/Button';

const Expense = () => {
  return (
    <div className={styles['expense__menu']}>
      <Button className={styles['expense__menu--item']} title="Overview">
        <svg>
          <use href={`${icons}#icon-info`}></use>
        </svg>
        <p>Overview</p>
      </Button>
      <Button className={styles['expense__menu--item']} title="Add Expense">
        <svg>
          <use href={`${icons}#icon-plus`}></use>
        </svg>
      </Button>
      <Button className={styles['expense__menu--item']} title="Profile">
        <svg>
          <use href={`${icons}#icon-user`}></use>
        </svg>
        <p>Profile</p>
      </Button>
    </div>
  );
};

export default Expense;
