import React from 'react';
import ExpenseTransactionItem from './ExpenseTransactionItem';

import styles from './ExpenseRecentTransactions.module.scss';

const ExpenseRecentTransactions = props => {
  console.log(props);
  return (
    <React.Fragment>
      <div className={styles['expense__transactions--heading']}>
        Recent Transactions
      </div>
      <div className={styles['expense__transactions']}>
        {props.transactions.map((transaction, index) => {
          if (index >= 4) return;
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
        })}
      </div>
    </React.Fragment>
  );
};

export default ExpenseRecentTransactions;
