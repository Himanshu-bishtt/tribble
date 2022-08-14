import React from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Button from '../../UI/Button/Button';
import ExpenseTransactionItem from '../ExpenseOverview/ExpenseTransactionItem';

import styles from './ExpenseModal.module.scss';

const ExpenseModal = props => {
  const Overlay = () => {
    return (
      <div className={styles['expense__modal']}>
        {/* prettier-ignore */}
        <ul
          className={styles['expense__modal--list']}
          style={
            props.data.length <= 3
              ? { height: 'max-content' }
              : { height: '25rem' }}>
          {props.data.map(transaction => (
            <ExpenseTransactionItem className={styles['expense__modal--item']} key={transaction.id} name={transaction.name} date={transaction.date} time={transaction.time} amount={transaction.amount} category={transaction.category} type={transaction.type}/>
          ))}
        </ul>
        {/* prettier-ignore */}
        <Button
          className={styles['expense__modal--button']}
          onClick={props.onClose}
          title="close">X</Button>
      </div>
    );
  };
  return (
    <React.Fragment>
      <Backdrop onClick={props.onClose} />
      {createPortal(<Overlay />, document.getElementById('overlay'))}
    </React.Fragment>
  );
};

export default ExpenseModal;
