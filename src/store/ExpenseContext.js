import React, { useState } from 'react';

const ExpenseContext = React.createContext({
  expenseContent: 1,
  transactions: [],
  menuButtonHandler: itemId => {},
});

export const ExpenseContextProvider = props => {
  const [expenseContent, setExpenseContent] = useState(1);
  // eslint-disable-next-line
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
    setExpenseContent(itemId);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenseContent,
        transactions,
        menuButtonHandler,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
