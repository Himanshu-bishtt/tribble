import React from 'react';

import icons from '../../../static/icons/icons.svg';
import styles from './ExpenseRecentTransactions.module.scss';

const ExpenseRecentTransactions = () => {
  return (
    <React.Fragment>
      <div className={styles['expense__transactions--heading']}>
        Recent Transactions
      </div>
      <div className={styles['expense__transactions']}>
        <div className={styles['transaction__item']}>
          <svg className={styles['transaction__item--icon']}>
            <use href={`${icons}#icon-truck`}></use>
          </svg>
          <div className={styles['transaction__item--details']}>
            <h3 className={styles['transaction__item--name']}>
              Transportation
            </h3>
            <p className={styles['transaction__item--date']}>
              12 July 2022 at 2:10 PM
            </p>
          </div>
          <div className={styles['transaction__item--amount']}>-$12</div>
        </div>

        <div className={styles['transaction__item']}>
          <svg className={styles['transaction__item--icon']}>
            <use href={`${icons}#icon-headphones`}></use>
          </svg>
          <div className={styles['transaction__item--details']}>
            <h3 className={styles['transaction__item--name']}>
              Transportation
            </h3>
            <p className={styles['transaction__item--date']}>
              12 July 2022 at 2:10 PM
            </p>
          </div>
          <div className={styles['transaction__item--amount']}>-$12</div>
        </div>

        <div className={styles['transaction__item']}>
          <svg className={styles['transaction__item--icon']}>
            <use href={`${icons}#icon-credit-card`}></use>
          </svg>
          <div className={styles['transaction__item--details']}>
            <h3 className={styles['transaction__item--name']}>
              Transportation
            </h3>
            <p className={styles['transaction__item--date']}>
              12 July 2022 at 2:10 PM
            </p>
          </div>
          <div className={styles['transaction__item--amount']}>-$12</div>
        </div>

        <div className={styles['transaction__item']}>
          <svg className={styles['transaction__item--icon']}>
            <use href={`${icons}#icon-truck`}></use>
          </svg>
          <div className={styles['transaction__item--details']}>
            <h3 className={styles['transaction__item--name']}>
              Transportation
            </h3>
            <p className={styles['transaction__item--date']}>
              12 July 2022 at 2:10 PM
            </p>
          </div>
          <div className={styles['transaction__item--amount']}>-$12</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExpenseRecentTransactions;
