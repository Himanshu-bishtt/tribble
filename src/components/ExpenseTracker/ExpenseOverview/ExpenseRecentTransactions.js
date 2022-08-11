import React from 'react';
import ExpenseTransactionItem from './ExpenseTransactionItem';

import styles from './ExpenseRecentTransactions.module.scss';

const ExpenseRecentTransactions = props => {
  return (
    <div>
      <div className={styles['expense__transactions--heading']}>
        5 Recent Transactions
      </div>
      <div className={styles['expense__transactions']}>
        {props.transactions.length === 0 ? (
          <p className={styles['expense__transactions--empty']}>No items</p>
        ) : (
          props.transactions.map((transaction, index) => {
            if (index <= 4) {
              return (
                <ExpenseTransactionItem
                  key={transaction.id}
                  name={transaction.name}
                  category={transaction.category}
                  type={transaction.type}
                  date={transaction.date}
                  time={transaction.time}
                  amount={transaction.amount}
                />
              );
            } else return null;
          })
        )}
      </div>
    </div>
  );
};

export default ExpenseRecentTransactions;
