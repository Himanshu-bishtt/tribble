import React, { useEffect, useState } from 'react';
import { generateRandomNumber } from '../config/config';

const ExpenseContext = React.createContext({
  expenseContent: 1,
  transactions: [],
  menuButtonHandler: () => {},
  addExpenseHandler: () => {},
});

export const ExpenseContextProvider = props => {
  const [expenseContent, setExpenseContent] = useState(1);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('expense-transactions'));

    if (!items) return;

    if (items.length !== 0) {
      setTransactions(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expense-transactions', JSON.stringify(transactions));
  }, [transactions]);

  const menuButtonHandler = itemId => {
    setExpenseContent(itemId);
  };

  const addExpenseHandler = expense => {
    const item = {
      id: 'EID' + generateRandomNumber(),
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
