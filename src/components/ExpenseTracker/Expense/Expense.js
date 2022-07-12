import React, { useState } from 'react';

import ExpenseMenu from '../ExpenseMenu/ExpenseMenu';
import ExpenseOverview from '../ExpenseOverview/ExpenseOverview';
import ExpenseAdd from '../ExpenseAdd/ExpenseAdd';

const Expense = () => {
  const [content, setContent] = useState(1);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: 'School Fees',
      category: 'Education',
      type: 'Expense',
      date: '12 July 2022',
      time: '2:10 PM',
      amount: 12,
    },
    {
      id: 2,
      name: 'Salary',
      category: 'Salary',
      type: 'Income',
      date: '07 July 2022',
      time: '1:10 PM',
      amount: 12_000,
    },
    {
      id: 3,
      name: 'Dividend Credit',
      category: 'Shares',
      type: 'Income',
      date: '12 July 2022',
      time: '2:10 PM',
      amount: 230,
    },
    {
      id: 4,
      name: 'Salary',
      category: 'Salary',
      type: 'Income',
      date: '07 July 2022',
      time: '1:10 PM',
      amount: 12_000,
    },
  ]);

  const menuButtonHandler = itemId => {
    setContent(itemId);
  };

  return (
    <React.Fragment>
      <div className="container">
        <ExpenseMenu menuButtonHandler={menuButtonHandler} />
        {content === 1 ? (
          <ExpenseOverview transactions={transactions} />
        ) : (
          <ExpenseAdd />
        )}
      </div>
    </React.Fragment>
  );
};

export default Expense;
