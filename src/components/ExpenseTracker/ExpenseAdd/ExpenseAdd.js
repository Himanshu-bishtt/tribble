import React, { useEffect, useState } from 'react';

import Button from '../../UI/Button/Button';
import Toast from '../../UI/Toast/Toast';

import styles from './ExpenseAdd.module.scss';

function ExpenseAdd() {
  const [toast, setToast] = useState({
    flag: false,
    message: '',
    type: '',
  });

  const [nameState, setNameState] = useState('');
  const [amountState, setAmountState] = useState('');
  const [categoryState, setCategoryState] = useState('');
  const [typeState, setTypeState] = useState('Income');
  const [dateState, setDateState] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast({
        flag: false,
        message: '',
        type: '',
      });
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [toast]);

  const nameInputHandler = event => {
    setNameState(event.target.value);
  };

  const amountInputHandler = event => {
    setAmountState(event.target.value);
  };

  const categoryInputHandler = event => {
    setCategoryState(event.target.value);
  };

  const typeHandler = event => {
    setTypeState(event.target.value);
  };

  const dateInputHandler = event => {
    setDateState(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (nameState.trim().length === 0) {
      setToast({
        flag: true,
        message: 'Please enter valid name',
        type: 'error',
      });
      return;
    }

    if (amountState.trim().length === 0) {
      setToast({
        flag: true,
        message: 'Please enter valid amount',
        type: 'error',
      });
      return;
    }

    if (categoryState.trim().length === 0) {
      setToast({
        flag: true,
        message: 'Please enter valid category',
        type: 'error',
      });
      return;
    }

    if (dateState.trim().length === 0) {
      setToast({
        flag: true,
        message: 'Please enter valid date',
        type: 'error',
      });
      return;
    }

    const expenseData = {
      name: nameState,
      amount: amountState,
      category: categoryState,
      type: typeState,
      date: dateState,
    };

    console.log(expenseData);

    setToast({
      flag: true,
      message: 'Form added successfully',
      type: 'success',
    });

    setNameState('');
    setAmountState('');
    setCategoryState('');
    setTypeState('Income');
    setDateState('');
  };

  return (
    <React.Fragment>
      {toast.flag ? <Toast message={toast.message} type={toast.type} /> : null}
      <form className={styles['expense__form']} onSubmit={formSubmitHandler}>
        <div className={styles['expense__form--item']}>
          <label htmlFor="expense-name">Name</label>
          <input
            type="text"
            placeholder="Enter expense name"
            id="expense-name"
            onChange={nameInputHandler}
            value={nameState}
          ></input>
        </div>

        <div className={styles['expense__form--item']}>
          <label htmlFor="expense-amount">Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            id="expense-amount"
            onChange={amountInputHandler}
            value={amountState}
          ></input>
        </div>

        <div className={styles['expense__form--item']}>
          <label htmlFor="expense-category">Category</label>
          <input
            type="text"
            placeholder="Enter category"
            id="expense-category"
            onChange={categoryInputHandler}
            value={categoryState}
          ></input>
        </div>

        <div className={styles['expense__form--item']}>
          <label htmlFor="expense-type">Type</label>
          <select id="expense-type" onChange={typeHandler} value={typeState}>
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>

        <div className={styles['expense__form--item']}>
          <label id="expense-date">Date</label>
          <input
            type="date"
            id="expense-date"
            onChange={dateInputHandler}
            value={dateState}
          ></input>
        </div>

        <div className={styles['expense__form--item']}>
          <Button type="submit" className={styles['expense__form--submit']}>
            Submit
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default ExpenseAdd;
