import React, { useState } from 'react';
import { generateRandomNumber } from '../config/config';

const ExpenseContext = React.createContext({
  expenseContent: 1,
  transactions: [],
  menuButtonHandler: itemId => {},
  addExpenseHandler: () => {},
});

export const ExpenseContextProvider = props => {
  const [expenseContent, setExpenseContent] = useState(1);
  // eslint-disable-next-line
  const [transactions, setTransactions] = useState([]);

  const menuButtonHandler = itemId => {
    setExpenseContent(itemId);
  };

  const addExpenseHandler = expense => {
    const item = {
      id: 'EXPID' + generateRandomNumber(),
      ...expense,
    };
    setTransactions(prev => [item, ...prev]);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenseContent,
        transactions,
        menuButtonHandler,
        addExpenseHandler,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
