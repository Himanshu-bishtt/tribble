import React, { useEffect, useState } from 'react';
import { TOAST_TIMER } from '../../../config/config';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import Toast from '../../UI/Toast/Toast';

import styles from './ExpenseAdd.module.scss';

const ExpenseAdd = props => {
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
    }, TOAST_TIMER);

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
      time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    };

    props.addExpenseHandler(expenseData);

    setToast({
      flag: true,
      message: 'Expense added successfully',
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
        <Input
          label="Name"
          input={{
            type: 'text',
            placeholder: 'Enter expense name',
            id: 'expense-name',
            value: nameState,
          }}
          onChange={nameInputHandler}
        />

        <Input
          label="Amount"
          input={{
            type: 'number',
            placeholder: 'Enter amount',
            id: 'expense-amount',
            value: amountState,
          }}
          onChange={amountInputHandler}
        />

        <Input
          label="Category"
          input={{
            type: 'text',
            placeholder: 'Enter category',
            id: 'expense-category',
            value: categoryState,
          }}
          onChange={categoryInputHandler}
        />

        <div className={styles['expense__form--item']}>
          <label htmlFor="expense-type">Type</label>
          <select id="expense-type" onChange={typeHandler} value={typeState}>
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>

        <Input
          label="Date"
          input={{
            type: 'date',
            id: 'expense-date',
            value: dateState,
          }}
          onChange={dateInputHandler}
        />

        <div className={styles['expense__form--item']}>
          <Button type="submit" className={styles['expense__form--submit']}>
            Submit
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ExpenseAdd;
